// app/job-listings/JobListingsContent.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import JobListings from "@/app/components/JobListings";

export default function JobListingsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");

  // Fetch jobs from API with search/location params
  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        if (location) params.append("location", location);
        const url = `${process.env.NEXT_PUBLIC_API_URL || 'https://qtec-job-task-server.vercel.app'}/api/jobs?${params.toString()}`;
        const res = await fetch(url, { cache: 'no-store' });
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [search, location]);

  // Handler to update search/location and URL
  const handleSearchChange = (val) => {
    setSearch(val);
    const params = new URLSearchParams(window.location.search);
    if (val) params.set("search", val); else params.delete("search");
    router.replace(`?${params.toString()}`);
  };
  
  const handleLocationChange = (val) => {
    setLocation(val);
    const params = new URLSearchParams(window.location.search);
    if (val) params.set("location", val); else params.delete("location");
    router.replace(`?${params.toString()}`);
  };

  return (
    <JobListings 
      jobs={jobs} 
      initialSearch={search} 
      initialLocation={location} 
      loading={loading}
      onSearchChange={handleSearchChange}
      onLocationChange={handleLocationChange}
    />
  );
}