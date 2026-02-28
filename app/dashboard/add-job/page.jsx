"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddJobPage() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    jobType: "Remote",
    description: "",
    responsibilities: "",
    isFeatured: false,
    companyLogo: "",
  });
  const [logoFile, setLogoFile] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    let logoUrl = form.companyLogo;
    try {
      // Upload logo to imgbb if file selected
      if (logoFile) {
        const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        if (!imgbbApiKey) throw new Error("IMGBB API key not set in environment");
        const formData = new FormData();
        formData.append("image", logoFile);
        const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const imgbbData = await imgbbRes.json();
        if (!imgbbRes.ok || !imgbbData.data?.url) throw new Error("Logo upload failed");
        logoUrl = imgbbData.data.url;
      }
      const token = localStorage.getItem("token");
      // Only include companyLogo if a logo was uploaded
      const payload = { ...form };
      if (logoUrl) payload.companyLogo = logoUrl;
      else delete payload.companyLogo;
      // Convert responsibilities textarea (string) to array of strings (split by line)
      if (payload.responsibilities) {
        payload.responsibilities = payload.responsibilities
          .split('\n')
          .map(r => r.trim())
          .filter(r => r.length > 0);
      }
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add job");
      setSuccess("Job added successfully!");
      setForm({ title: "", company: "", location: "", category: "", jobType: "Remote", description: "", responsibilities: "", isFeatured: false, companyLogo: "" });
      setLogoFile(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'Design', 'Sales', 'Marketing', 'Finance', 'Technology', 'Engineering', 'Business', 'Human Resource'
  ];

  return (
    <div className="w-[90%] mx-auto mt-10 bg-white p-8 rounded shadow ">
      <h2 className="text-3xl font-bold mb-8">Create Job</h2>
      <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <Label htmlFor="companyLogo">Company Logo</Label>
          <Input
            id="companyLogo"
            name="companyLogo"
            type="file"
            accept="image/*"
            className="mt-2"
            onChange={e => setLogoFile(e.target.files[0])}
          />
        </div>
        <div>
          <Label htmlFor="title">Job Title</Label>
          <Input id="title" name="title" value={form.title} onChange={handleChange} required placeholder="e.g. Housekeeping Attendant" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" value={form.company} onChange={handleChange} required placeholder="e.g. Royal Thai Retreats" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" value={form.location} onChange={handleChange} required placeholder="e.g. Bangkok, Thailand" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="category">Job Category</Label>
          <Select value={form.category} onValueChange={val => setForm(f => ({ ...f, category: val }))}>
            <SelectTrigger className="mt-2 w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="jobType">Job Type</Label>
          <Select value={form.jobType} onValueChange={val => setForm(f => ({ ...f, jobType: val }))}>
            <SelectTrigger className="mt-2 w-full">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Onsite">Onsite</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description">Job Description</Label>
          <Textarea id="description" name="description" value={form.description} onChange={handleChange} required placeholder="Describe the job responsibilities, requirements, etc." className="mt-2 min-h-[120px]" />
        </div>
        <div>
          <Label htmlFor="responsibilities">Responsibilities</Label>
          <Textarea
            id="responsibilities"
            name="responsibilities"
            value={form.responsibilities}
            onChange={handleChange}
            placeholder="Enter one responsibility per line"
            className="mt-2 min-h-[80px]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="isFeatured" name="isFeatured" checked={form.isFeatured} onCheckedChange={val => setForm(f => ({ ...f, isFeatured: !!val }))} />
          <Label htmlFor="isFeatured">Mark as Featured Job</Label>
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Adding..." : "Add Job"}
        </Button>
      </form>
    </div>
  );
}
