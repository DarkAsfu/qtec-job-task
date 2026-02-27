import Link from 'next/link';

const jobs = [
  {
    id: 1,
    companyLogo: '/icon/fiSX9QYy_400x400 1.png', // Nomad
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 2,
    companyLogo: '/icon/BvBoaEET_400x400 1.png', // Netlify
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Paris, France',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 3,
    companyLogo: '/icon/BvBoaEET_400x400 1.png', // Dropbox
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, USA',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 4,
    companyLogo: '/icon/v-6GHzAd_400x400.png', // Maze
    title: 'Brand Designer',
    company: 'Maze',
    location: 'San Fransisco, USA',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 5,
    companyLogo: '/icon/qUvcta52_400x400 1.png', // Terraform
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 6,
    companyLogo: '/icon/s93HU9p3_400x400.png', // Udacity
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Hamburg, Germany',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 7,
    companyLogo: '/icon/Btnfm47p_400x400 1.png', // Packer
    title: 'HR Manager',
    company: 'Packer',
    location: 'Lucern, Switzerland',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 8,
    companyLogo: '/icon/godaddy-logo-0 1.png', // Webflow
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Lucern, Switzerland',
    type: 'Full-Time',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
];

const tagColors = {
  'Full-Time': 'bg-[#E9FBF0] text-[#4DC591] border border-[#E9FBF0]',
  Marketing: 'bg-[#FFF8ED] text-[#FFB836] border border-[#FFB836]',
  Design: 'bg-white text-[#4640DE] border border-[#4640DE]',
};

export default function LatestJobsOpen() {
  return (
    <section className="w-full px-31 py-12 bg-[#F8F8FD]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="flex items-center gap-2 font-clash-display text-5xl font-semibold">
          <span className="text-[#25324B]">Latest</span>
          <span style={{ color: '#26A4FF' }}>jobs open</span>
        </h2>
        <Link href="#" className="text-[#4640DE] text-[16px] font-semibold font-epilogue flex items-center gap-2 hover:underline">
          Show all jobs <span className="inline-block">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-8">
            {jobs.filter((_, i) => i % 2 === col).map((job) => (
              <div
                key={job.id}
                className="flex items-center bg-white rounded-[8px] px-8 py-6 gap-6 shadow-sm"
              >
                <img src={job.companyLogo} alt={job.company} className="w-12 h-12 object-contain" />
                <div className="flex-1">
                  <div className="text-[#25324B] text-lg font-semibold font-epilogue leading-tight mb-1">{job.title}</div>
                  <div className="text-[#7C8493] text-sm font-epilogue mb-3">{job.company} · {job.location}</div>
                  <div className="flex gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-[6px] text-xs font-epilogue font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700 border'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
