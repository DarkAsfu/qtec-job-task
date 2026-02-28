"use server";
import Link from 'next/link';

const tagColors = {
  'Full-Time': 'bg-[#E9FBF0] text-[#4DC591] border border-[#E9FBF0]',
  Marketing: 'bg-[#FFF8ED] text-[#FFB836] border border-[#FFB836]',
  Design: 'bg-white text-[#4640DE] border border-[#4640DE]',
};

export default async function LatestJobsOpen() {
  let jobs = [];
  let error = "";
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/jobs`, { cache: 'no-store' });
    const allJobs = await res.json();
    jobs = allJobs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 8);
  } catch (e) {
    error = "Failed to load latest jobs.";
  }

  return (
    <section className="w-full px-4 md:px-31 py-8 md:py-12 bg-[#F8F8FD]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <h2 className="flex items-center gap-2 font-clash-display text-3xl sm:text-4xl md:text-5xl font-semibold">
          <span className="text-[#25324B]">Latest</span>
          <span style={{ color: '#26A4FF' }}>jobs open</span>
        </h2>
        <Link href="#" className="text-[#4640DE] text-[16px] font-semibold font-epilogue flex items-center gap-2 hover:underline">
          Show all jobs <span className="inline-block">→</span>
        </Link>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-4 md:gap-8">
            {jobs.filter((_, i) => i % 2 === col).map((job) => (
              <Link
                key={job._id}
                href={`/job-details/${job._id}`}
                className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-[8px] px-4 md:px-8 py-4 md:py-6 gap-4 md:gap-6 shadow-sm hover:shadow-md transition-shadow duration-150 cursor-pointer"
                prefetch={false}
              >
                <img src={job.companyLogo || '/icon/default.png'} alt={job.company} className="w-12 h-12 object-contain mb-2 sm:mb-0" />
                <div className="flex-1">
                  <div className="text-[#25324B] text-lg font-semibold font-epilogue leading-tight mb-1">{job.title}</div>
                  <div className="text-[#7C8493] text-sm font-epilogue mb-3">{job.company} · {job.location}</div>
                  <div className="flex gap-2 flex-wrap">
                    {job.category && (
                      <span
                        className={`px-3 py-1 rounded-[6px] text-xs font-epilogue font-medium ${tagColors[job.category] || 'bg-gray-100 text-gray-700 border'}`}
                      >
                        {job.category}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
