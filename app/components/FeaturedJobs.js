import Link from 'next/link';

const jobs = [
  {
    id: 1,
    companyLogo: '/icon/Btnfm47p_400x400 1.png', // Revolut
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    type: 'Full Time',
    description: 'Revolut is looking for Email Marketing to help team ma ...',
    tags: ['Marketing', 'Design'],
  },
  {
    id: 2,
    companyLogo: '/icon/BvBoaEET_400x400 1.png', // Dropbox
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, US',
    type: 'Full Time',
    description: 'Dropbox is looking for Brand Designer to help the team t ...',
    tags: ['Design', 'Business'],
  },
  {
    id: 3,
    companyLogo: '/icon/fiSX9QYy_400x400 1.png', // Pitch
    title: 'Email Marketing',
    company: 'Pitch',
    location: 'Berlin, Germany',
    type: 'Full Time',
    description: 'Pitch is looking for Customer Manager to join marketing t ...',
    tags: ['Marketing'],
  },
  {
    id: 4,
    companyLogo: '/icon/godaddy-logo-0 1.png', // Blinkist
    title: 'Visual Designer',
    company: 'Blinkist',
    location: 'Granada, Spain',
    type: 'Full Time',
    description: 'Blinkist is looking for Visual Designer to help team desi ...',
    tags: ['Design'],
  },
  {
    id: 5,
    companyLogo: '/icon/qUvcta52_400x400 1.png', // ClassPass
    title: 'Product Designer',
    company: 'ClassPass',
    location: 'Manchester, UK',
    type: 'Full Time',
    description: 'ClassPass is looking for Product Designer to help us ...',
    tags: ['Marketing', 'Design'],
  },
  {
    id: 6,
    companyLogo: '/icon/s93HU9p3_400x400.png', // Canva
    title: 'Lead Designer',
    company: 'Canva',
    location: 'Ontario, Canada',
    type: 'Full Time',
    description: 'Canva is looking for Lead Engineer to help develop n ...',
    tags: ['Design', 'Business'],
  },
  {
    id: 7,
    companyLogo: '/icon/v-6GHzAd_400x400.png', // GoDaddy
    title: 'Brand Strategist',
    company: 'GoDaddy',
    location: 'Marseille, France',
    type: 'Full Time',
    description: 'GoDaddy is looking for Brand Strategist to join the team ...',
    tags: ['Marketing'],
  },
  {
    id: 8,
    companyLogo: '/icon/Btnfm47p_400x400 1.png', // Twitter (fallback to first icon)
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    type: 'Full Time',
    description: 'Twitter is looking for Data Analyst to help team desi ...',
    tags: ['Technology'],
  },
];

const tagColors = {
  Marketing: 'bg-[#FFEDED] text-[#FF6A55]',
  Design: 'bg-[#E9F9FF] text-[#26A4FF]',
  Business: 'bg-[#F3F1FF] text-[#4640DE]',
  Technology: 'bg-[#FFF0F0] text-[#F7666F]',
};

export default function FeaturedJobs() {
  return (
    <section className="w-full px-31 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="flex items-center gap-2 font-clash-display text-5xl font-semibold">
          <span className="text-[#25324B]">Featured</span>
          <span style={{ color: '#26A4FF' }}>jobs</span>
        </h2>
        <Link href="#" className="text-[#4640DE] text-[16px] font-semibold font-epilogue flex items-center gap-2 hover:underline">
          Show all jobs <span className="inline-block">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-start gap-4 flex-[1_0_0] p-6 border border-[#D6DDEB] bg-white"
            
          >
            <div className="flex items-center justify-between w-full mb-4">
              <img src={job.companyLogo} alt={job.company} className="w-8 h-8 object-contain" />
              <span className="px-3 py-1 border border-[#EDEDED] rounded-[6px] text-[#4640DE] text-xs font-epilogue font-medium bg-white">{job.type}</span>
            </div>
            <div className="mb-2">
              <div className="text-[#25324B] text-base font-semibold font-epilogue leading-tight">{job.title}</div>
              <div className="text-[#7C8493] text-xs font-epilogue my-1">{job.company} · {job.location}</div>
            </div>
            <div className="text-[#7C8493] text-xs font-epilogue mb-4 line-clamp-2">{job.description}</div>
            <div className="flex gap-2 mt-auto">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-[6px] text-xs font-epilogue font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
