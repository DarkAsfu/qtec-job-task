"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


export default function ApplyJobPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    cover_note: "",
    resume_link: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({
      ...f,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("https://qtec-job-task-server.vercel.app/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: id,
          name: form.name,
          email: form.email,
          resume_link: form.resume_link,
          cover_note: form.cover_note,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit application.");
      }
      setSuccess("Application submitted successfully!");
      setTimeout(() => router.push(`/job-details/${id}`), 1500);
    } catch (err) {
      setError(err.message || "Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Apply for this Job</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="cover_note">Cover Letter</Label>
          <Textarea id="cover_note" name="cover_note" value={form.cover_note} onChange={handleChange} required placeholder="Write a short cover letter..." className="mt-2 min-h-[100px]" />
        </div>
        <div>
          <Label htmlFor="resume_link">Resume Link (Google Drive, Dropbox, etc.)</Label>
          <Input id="resume_link" name="resume_link" type="url" value={form.resume_link} onChange={handleChange} required placeholder="https://your-resume-link.com" className="mt-2" />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
}
