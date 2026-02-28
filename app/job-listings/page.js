"use server";

import JobListings from "../components/JobListings";

export default async function JobListingsPage() {
  let jobs = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/jobs`, { cache: 'no-store' });
    jobs = await res.json();
  } catch (e) {
    // jobs stays empty
  }
  return <JobListings jobs={jobs} />;
}
