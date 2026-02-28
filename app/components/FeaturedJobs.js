"use server";
import Link from 'next/link';

const tagColors = {
  Marketing: 'bg-[#FFEDED] text-[#FF6A55]',
  Design: 'bg-[#E9F9FF] text-[#26A4FF]',
  Business: 'bg-[#F3F1FF] text-[#4640DE]',
  Technology: 'bg-[#FFF0F0] text-[#F7666F]',
};

export default async function FeaturedJobs() {
  let jobs = [];
  let error = "";
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/jobs`, { cache: 'no-store' });
    const allJobs = await res.json();
    jobs = allJobs.filter(job => job.isFeatured);
  } catch (e) {
    error = "Failed to load featured jobs.";
  }

  return (
    <section className="w-full px-4 md:px-31 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <h2 className="flex items-center gap-2 font-clash-display text-3xl sm:text-4xl md:text-5xl font-semibold">
          <span className="text-[#25324B]">Featured</span>
          <span style={{ color: '#26A4FF' }}>jobs</span>
        </h2>
        <Link href="#" className="text-[#4640DE] text-[16px] font-semibold font-epilogue flex items-center gap-2 hover:underline">
          Show all jobs <span className="inline-block">→</span>
        </Link>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {jobs.map((job) => (
          <Link
            key={job._id}
            href={`/job-details/${job._id}`}
            className="flex flex-col items-start gap-4 flex-[1_0_0] p-4 md:p-6 border border-[#D6DDEB] bg-white hover:shadow-lg transition cursor-pointer group"
            prefetch={false}
          >
            <div className="flex items-center justify-between w-full mb-4">
              <img src={job.companyLogo || '/icon/default.png'} alt={job.company} className="w-8 h-8 object-contain" />
              <span className="px-3 py-1 border border-[#EDEDED] rounded-[6px] text-[#4640DE] text-xs font-epilogue font-medium bg-white">{job.jobType || job.type}</span>
            </div>
            <div className="mb-2">
              <div className="text-[#25324B] text-base font-semibold font-epilogue leading-tight group-hover:underline">{job.title}</div>
              <div className="text-[#7C8493] text-xs font-epilogue my-1">{job.company} · {job.location}</div>
            </div>
            <div className="text-[#7C8493] text-xs font-epilogue mb-4 line-clamp-2">{job.description}</div>
            <div className="flex gap-2 mt-auto">
              {job.category && (
                <span
                  className={`px-3 py-1 rounded-[6px] text-xs font-epilogue font-medium ${tagColors[job.category] || 'bg-gray-100 text-gray-700'}`}
                >
                  {job.category}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
