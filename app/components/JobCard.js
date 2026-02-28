import Image from 'next/image';
import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <Link
      href={`/job-details/${job.id || job._id}`}
      className="flex flex-col gap-4 p-6 bg-white border border-[#D6DDEB] rounded-lg shadow-sm hover:shadow-md transition cursor-pointer no-underline"
      prefetch={false}
    >
      <div className="flex items-center gap-3 mb-2">
        {job.companyLogo && job.companyLogo !== "" ? (
          <Image src={job.companyLogo} alt={job.company} width={48} height={48} className="w-12 h-12 object-contain" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-400">
            {job.company?.[0] || 'J'}
          </div>
        )}
        <div>
          <div className="font-clash-display text-lg font-semibold text-[#25324B]">{job.title}</div>
          <div className="font-epilogue text-[#7C8493] text-sm">{job.company}</div>
        </div>
      </div>
      <div className="font-epilogue text-[#515B6F] text-base mb-2">{job.location}</div>
      <div className="flex flex-wrap gap-2 mb-2">
        {job.tags && job.tags.map(tag => (
          <span key={tag} className="px-3 py-1 rounded-full bg-[#F8F8FD] text-[#4640DE] font-epilogue text-xs font-semibold border border-[#E0E0E0]">{tag}</span>
        ))}
      </div>
      <div className="font-epilogue text-[#7C8493] text-sm line-clamp-2">{job.description}</div>
    </Link>
  );
}
