// app/job-listings/page.tsx
import { Suspense } from "react";
import JobListingsContent from "./JobListingsContent";

export default function JobListingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobListingsContent />
    </Suspense>
  );
}