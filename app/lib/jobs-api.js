import axios from 'axios';

export async function getJobs() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/jobs`);
  return res.data;
}

export async function getFeaturedJobs() {
  const jobs = await getJobs();
  return jobs.filter(job => job.isFeatured);
}

export async function getLatestJobs() {
  const jobs = await getJobs();
  // Sort by created_at descending, return latest 8
  return jobs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 8);
}
