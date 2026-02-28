"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import JobListings from "@/app/components/JobListings";

export default function JobListingsPage() {
  const searchParams = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Read query params
  const initialSearch = searchParams.get("search") || "";
  const initialLocation = searchParams.get("location") || "";

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://qtec-job-task-server.vercel.app'}/api/jobs`, { cache: 'no-store' });
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return <JobListings jobs={jobs} initialSearch={initialSearch} initialLocation={initialLocation} loading={loading} />;
}
