"use client";

import JobListings from "../components/JobListings";
import jobs from "../../lib/jobs-data";

export default function JobListingsPage() {
  return <JobListings jobs={jobs} />;
}
