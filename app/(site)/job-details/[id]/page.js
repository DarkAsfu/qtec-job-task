"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function JobDetailsPage(props) {
  const {id} = useParams()
  console.log(id);
  const [job, setJob] = useState(null);
  const [error, setError] = useState("");
  
  useEffect(() => {
    if (!id) return;
    const fetchJob = async () => {
      try {
        const res = await fetch(`https://qtec-job-task-server.vercel.app/api/jobs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch job details");
        const data = await res.json();
        setJob({
          title: '',
          company: '',
          location: '',
          category: '',
          jobType: '',
          description: '',
          companyLogo: '',
          isFeatured: false,
          created_at: '',
          ...data
        });
      } catch (e) {
        setError("Failed to load job details.");
      }
    };
    fetchJob();
  }, [id]);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded shadow text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded shadow text-center text-gray-500">
        Loading job details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f9fe] py-10 px-2 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left Card */}
        <aside className="w-full lg:w-92.5 shrink-0">
          <div className="bg-white rounded-2xl shadow p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              {job.companyLogo ? (
                <Image
                  src={job.companyLogo}
                  alt={job.company || "Company Logo"}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover bg-gray-100"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl font-bold">
                  {job.company?.[0] || "?"}
                </div>
              )}
              <div>
                <div className="font-clash-display text-xl font-bold text-[#25324B] flex items-center gap-1">{job.company} <svg className="w-5 h-5 text-blue-500 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg></div>
                <div className="text-[#7C8493] font-epilogue text-sm flex items-center gap-1"><svg className="w-4 h-4 text-blue-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" /></svg>{job.location}</div>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Job Title</span> <span className="font-normal">{job.title || '-'}</span></div>
              {/* <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Vacancies</span> <span className="font-normal">{job.vacancies}</span></div> */}
              {/* <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Office Time</span> <span className="font-normal">{job.officeTime}</span></div> */}
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Location</span> <span className="font-normal">{job.location || '-'}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Job Type</span> <span className="font-normal">{job.jobType || '-'}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Category</span> <span className="font-normal">{job.category || '-'}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Posted</span> <span className="font-normal">{job.created_at ? new Date(job.created_at).toLocaleDateString() : '-'}</span></div>
            </div>
            <Link
              href={`/apply-job/${id}`}
              className="w-full block py-3 rounded-xl bg-gradient-to-r from-[#3ec6e0] to-[#4f8cff] text-white font-clash-display text-lg font-bold shadow-lg hover:from-[#4f8cff] hover:to-[#3ec6e0] transition-all duration-200 mb-4 text-center flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3ec6e0]"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <span>Apply Now</span>
            </Link>
            
          </div>
        </aside>
        {/* Right Main Content */}
        <main className="flex-1">
          <div className="gap-8 mb-8">
            {/* Company Description */}
            {/* Company Description (optional) */}
            {/* <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H8V4h8z" /></svg>
                <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Company Description</h3>
              </div>
              <p className="text-[#515B6F] font-epilogue text-base leading-relaxed flex-1">{job.companyDescription} <a href="#" className="text-blue-500 hover:underline text-sm ml-1">Read more</a></p>
            </div> */}
            {/* Skills (optional) */}
            {/* <div className="bg-white rounded-2xl shadow p-6 flex flex-col mt-8">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a1 1 0 01.993.883L13 3v2.382l1.447 1.342a1 1 0 01.11 1.32l-.083.094-1.447 1.342V13a1 1 0 01-1.993.117L11 13V8.382l-1.447-1.342a1 1 0 01-.11-1.32l.083-.094L11 5.382V3a1 1 0 01.883-.993L12 2z" /></svg>
                <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {job.skills?.map(skill => (
                  <span key={skill.name} className={`px-3 py-1 rounded-full font-semibold font-epilogue text-xs ${skill.color}`}>{skill.name}</span>
                ))}
              </div>
            </div> */}
          </div>
          {/* Description */}
          <div className="bg-white rounded-2xl shadow p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H8V4h8z" /></svg>
              <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Description</h3>
            </div>
            <p className="text-[#515B6F] font-epilogue text-base leading-relaxed whitespace-pre-line">{job.description || '-'}</p>
          </div>
          {/* Job Responsibilities */}
          <div className="bg-white rounded-2xl shadow p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H8V4h8z" /></svg>
              <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Job Responsibilities</h3>
            </div>
            {Array.isArray(job.responsibilities) && job.responsibilities.length > 0 ? (
              <ul className="list-disc pl-6 text-[#515B6F] font-epilogue text-base leading-relaxed space-y-1">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-[#515B6F] font-epilogue text-base leading-relaxed">-</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}