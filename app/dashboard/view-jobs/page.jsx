"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ViewJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("http://localhost:5000/api/jobs");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch jobs");
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Filtering logic
  let filteredJobs = jobs;
  if (filter === "featured") {
    filteredJobs = jobs.filter(j => j.isFeatured);
  } else if (filter === "new") {
    filteredJobs = jobs.filter(j => !j.isFeatured);
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 bg-white p-0 rounded shadow">
      <h2 className="text-3xl font-bold mb-4 px-8 pt-8">Job Listings</h2>
      <div className="flex gap-2 px-8 mb-6">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "featured" ? "default" : "outline"} onClick={() => setFilter("featured")}>Featured</Button>
        <Button variant={filter === "new" ? "default" : "outline"} onClick={() => setFilter("new")}>New</Button>
      </div>
      {loading && <div className="px-8 pb-8">Loading...</div>}
      {error && <div className="text-red-600 text-sm px-8 pb-8">{error}</div>}
      {!loading && !error && filteredJobs.length === 0 && <div className="px-8 pb-8">No jobs found.</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b text-[#7C8493] text-xs font-epilogue">
              <th className="py-3 px-6 font-medium">Job</th>
              <th className="py-3 px-6 font-medium">Type</th>
              <th className="py-3 px-6 font-medium">Category</th>
              <th className="py-3 px-6 font-medium">Company</th>
              <th className="py-3 px-6 font-medium">Location</th>
              <th className="py-3 px-6 font-medium">Posted</th>
              <th className="py-3 px-6 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, idx) => (
              <tr key={job._id} className={idx % 2 === 1 ? 'bg-gray-50' : ''}>
                <td className="py-4 px-6 flex items-center gap-3 min-w-[220px]">
                  {/* Placeholder for logo */}
                  <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-400">
                    {job.company?.[0] || 'J'}
                  </div>
                  <div>
                    <div className="text-[#25324B] font-semibold font-epilogue leading-tight">{job.title}</div>
                    <div className="text-[#7C8493] text-xs font-epilogue">{job.description?.slice(0, 40)}...</div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  {job.jobType && (
                    <span className={`inline-block px-3 py-1 rounded-[6px] text-xs font-epilogue font-medium ${job.jobType === 'Remote' ? 'bg-[#E9F9FF] text-[#26A4FF]' : 'bg-[#F3F1FF] text-[#4640DE]'}`}>{job.jobType}</span>
                  )}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-[6px] text-xs font-epilogue font-medium ${
                      job.category === 'Marketing' ? 'bg-[#FFEDED] text-[#FF6A55]' :
                      job.category === 'Design' ? 'bg-[#E9F9FF] text-[#26A4FF]' :
                      job.category === 'Business' ? 'bg-[#F3F1FF] text-[#4640DE]' :
                      job.category === 'Technology' ? 'bg-[#FFF0F0] text-[#F7666F]' :
                      'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {job.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-[#25324B] text-sm font-epilogue">{job.company}</td>
                <td className="py-4 px-6 text-[#25324B] text-sm font-epilogue">{job.location}</td>
                <td className="py-4 px-6 text-[#7C8493] text-xs font-epilogue">{job.created_at ? new Date(job.created_at).toLocaleDateString() : ''}</td>
                <td className="py-4 px-6">
                  <button className="p-2 rounded hover:bg-gray-100 transition">
                    <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
