import Image from 'next/image';

export default function JobCard({ job }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-[#D6DDEB] rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-3 mb-2">
        <Image src={job.companyLogo} alt={job.company} width={48} height={48} className="w-12 h-12 object-contain" />
            <div>
              <Link href={`/job-details/${job.id}`} className="font-clash-display text-lg font-semibold text-[#25324B] hover:underline">
                {job.title}
              </Link>
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
    </div>
  );
}
import Link from 'next/link';
