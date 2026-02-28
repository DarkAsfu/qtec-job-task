
import { useState } from 'react';
import JobCard from './JobCard';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';


const categories = [
  'Design', 'Sales', 'Marketing', 'Finance', 'Technology', 'Engineering', 'Business', 'Human Resource'
];


export default function JobListings({ jobs }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [workMode, setWorkMode] = useState('');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? job.category === category : true;
    const matchesLocation = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
    const matchesJobType = jobType
      ? (job.type && job.type.toLowerCase().trim() === jobType.toLowerCase().trim())
      : true;
    const matchesWorkMode = workMode
      ? (job.mode && job.mode.toLowerCase().trim() === workMode.toLowerCase().trim())
      : true;
    return matchesSearch && matchesCategory && matchesLocation && matchesJobType && matchesWorkMode;
  });

  return (
    <section className="w-full min-h-screen bg-white  py-8 md:py-12">
      <div className="px-4 md:px-31 mx-auto">
        <h1 className="font-clash-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25324B] mb-8 text-center md:text-left">Job Listings</h1>
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 flex-wrap">
          <Input
            type="text"
            placeholder="Search jobs or companies..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 font-epilogue text-base text-[#25324B] placeholder-[#7C8493]"
          />
          <Select value={category || 'all'} onValueChange={v => setCategory(v === 'all' ? '' : v)}>
            <SelectTrigger className="w-40 font-epilogue text-base text-[#25324B] bg-white">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={jobType || 'all'} onValueChange={v => setJobType(v === 'all' ? '' : v)}>
            <SelectTrigger className="w-35 font-epilogue text-base text-[#25324B] bg-white">
              <SelectValue placeholder="All Job Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Job Types</SelectItem>
                <SelectItem value="Full-Time">Full Time</SelectItem>
                <SelectItem value="Part-Time">Part Time</SelectItem>
                <SelectItem value="Contractual">Contractual</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={workMode || 'all'} onValueChange={v => setWorkMode(v === 'all' ? '' : v)}>
            <SelectTrigger className="w-30 font-epilogue text-base text-[#25324B] bg-white">
              <SelectValue placeholder="Remote/Onsite" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Remote/Onsite</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="Onsite">Onsite</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="font-epilogue text-base text-[#25324B] placeholder-[#7C8493]"
          />
        </div>
        {/* Job List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <div className="col-span-full text-[#7C8493] text-center py-12 font-epilogue">No jobs found.</div>
          ) : (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </section>
  );
}
