import React from 'react'
import Image from 'next/image'

export default function JobDetailsPage() {
  const job = {
    companyLogo: '/icon/fiSX9QYy_400x400 1.png',
    company: 'Brain Station 23',
    location: 'Dhaka, Bangladesh',
    jobTitle: 'Data Engineer',
    vacancies: 2,
    officeTime: 'Monday to Friday [11:00 AM – 8:00 PM]',
    location: 'Dhaka, Dhaka, Bangladesh',
    jobType: 'Full Time',
    mode: 'On-site',
    deadline: '15 Mar, 2026',
    shareLinks: [
      { icon: '/icon/facebook.svg', name: 'Facebook' },
      { icon: '/icon/linkedin.svg', name: 'LinkedIn' },
      { icon: '/icon/twitter.svg', name: 'Twitter' },
      { icon: '/icon/instagram.svg', name: 'Instagram' },
      { icon: '/icon/pinterest.svg', name: 'Pinterest' },
      { icon: '/icon/whatsapp.svg', name: 'WhatsApp' },
      { icon: '/icon/email.svg', name: 'Email' },
      { icon: '/icon/telegram.svg', name: 'Telegram' },
    ],
    companyDescription: `It was in 2006, with little capital but a pocketful of belief, our CEO, Raisul Kabir, started Brain Station 23, a software company, right after graduating from BUET. The new company initially focused on the international market, with the local market added in 2010. Since then, the company has shown continuous growth and currently employs over 800+ professionals. Brain Station 23 is now not only an established name in Bangladesh but also in countries like the USA, UAE, Malaysia, UK, Netherland...`,
    skills: [
      { name: 'PYTHON', color: 'bg-cyan-100 text-cyan-700' },
      { name: 'Azure', color: 'bg-green-100 text-green-700' },
      { name: 'AWS', color: 'bg-purple-100 text-purple-700' },
      { name: 'SQL', color: 'bg-red-100 text-red-700' },
      { name: 'CI/CD', color: 'bg-orange-100 text-orange-700' },
      { name: 'postgresql', color: 'bg-blue-100 text-blue-700' },
    ],
    description: `We are looking for an experienced Data Engineer to join our dynamic team for one of our valued clients, MetLife. In this role, you will design, build, and optimize scalable data solutions—enabling high-performance analytics, business intelligence, and AI-driven insights across the organization.

If you are passionate about modern data platforms, cloud technologies, and transforming data into business value, we'd love to hear from you.`,
    responsibilities: [
      'Design, build, and optimize data pipelines and ETL workflows.',
      'Develop and maintain data warehouse architectures for high-performance analytics.',
      'Ensure data quality, security, and scalability across structured and unstructured data.',
      'Work with cross-functional teams to support business intelligence and AI-driven insights.',
      'Required Skills & Technologies:',
      '• 5-10 years of experience in Data Engineering',
      '• Proven experience with Azure Synapse Analytics and Azure Data Factory',
      '• Solid understanding of ETL processes and data modeling concepts',
      '• Ability to collaborate with data engineers, data scientists, and business stakeholders to integrate data sources and develop data models',
      '• Experience with data lake architecture and management (e.g., Azure Data Lake Storage)',
      '• Ensure data quality, security, and compliance with organization policies, international standards and regulations',
      '• Troubleshoot and resolve data analytics issues and errors',
      '• Develop and implement data integration and transformation processes using Azure Synapse Analytics, PySpark, and Azure Data Factory',
      '• Knowledge of Informatica along with Azure Synapse is a plus',
      'We are seeking:',
      '• Strong background in data engineering, database management, or software development.',
      '• Proven experience in building scalable data architectures.',
      '• Passionate about leveraging data for business impact.'
    ],
  };

  return (
    <div className="min-h-screen bg-[#f6f9fe] py-10 px-2 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left Card */}
        <aside className="w-full lg:w-[370px] flex-shrink-0">
          <div className="bg-white rounded-2xl shadow p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <img src={job.companyLogo} alt={job.company} className="w-16 h-16 rounded-full object-cover bg-gray-100" />
              <div>
                <div className="font-clash-display text-xl font-bold text-[#25324B] flex items-center gap-1">{job.company} <svg className="w-5 h-5 text-blue-500 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg></div>
                <div className="text-[#7C8493] font-epilogue text-sm flex items-center gap-1"><svg className="w-4 h-4 text-blue-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" /></svg>{job.location}</div>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Job Title</span> <span className="font-normal">{job.jobTitle}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Vacancies</span> <span className="font-normal">{job.vacancies}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Office Time</span> <span className="font-normal">{job.officeTime}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Location</span> <span className="font-normal">{job.location}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Job Type</span> <span className="font-normal">{job.jobType}</span> <span className="ml-2 px-2 py-0.5 rounded bg-[#e6f0fa] text-xs text-[#25324B]">{job.mode}</span></div>
              <div className="flex justify-between text-[#25324B] font-epilogue text-base"><span className="font-semibold">Deadline</span> <span className="font-normal">{job.deadline}</span></div>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#3ec6e0] to-[#4f8cff] text-white font-epilogue text-lg font-semibold shadow hover:from-[#4f8cff] hover:to-[#3ec6e0] transition mb-4">Apply Now</button>
            
          </div>
        </aside>
        {/* Right Main Content */}
        <main className="flex-1">
          <div className="gap-8 mb-8">
            {/* Company Description */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H8V4h8z" /></svg>
                <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Company Description</h3>
              </div>
              <p className="text-[#515B6F] font-epilogue text-base leading-relaxed flex-1">{job.companyDescription} <a href="#" className="text-blue-500 hover:underline text-sm ml-1">Read more</a></p>
            </div>
            {/* Skills */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col mt-8">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a1 1 0 01.993.883L13 3v2.382l1.447 1.342a1 1 0 01.11 1.32l-.083.094-1.447 1.342V13a1 1 0 01-1.993.117L11 13V8.382l-1.447-1.342a1 1 0 01-.11-1.32l.083-.094L11 5.382V3a1 1 0 01.883-.993L12 2z" /></svg>
                <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {job.skills.map(skill => (
                  <span key={skill.name} className={`px-3 py-1 rounded-full font-semibold font-epilogue text-xs ${skill.color}`}>{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="bg-white rounded-2xl shadow p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H8V4h8z" /></svg>
              <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Description</h3>
            </div>
            <p className="text-[#515B6F] font-epilogue text-base leading-relaxed whitespace-pre-line">{job.description}</p>
          </div>
          {/* Job Responsibilities */}
          <div className="bg-white rounded-2xl shadow p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H8V4h8z" /></svg>
              <h3 className="font-clash-display text-xl font-semibold text-[#25324B]">Job Responsibilities</h3>
            </div>
            <ul className="list-disc pl-6 text-[#515B6F] font-epilogue text-base leading-relaxed space-y-1">
              {job.responsibilities.map((item, idx) => (
                <li key={idx} className={item.startsWith('Required Skills') || item.startsWith('We are seeking') ? 'font-semibold mt-2' : ''}>{item}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}