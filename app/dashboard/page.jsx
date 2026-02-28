'use client';
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart2, Users, Briefcase, FileText, Loader2 } from "lucide-react";





import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { StickyNote, Mail, User, Building2, Link as LinkIcon, Phone } from "lucide-react";

export default function Page() {
  const [stats, setStats] = useState({ jobs: 0, applications: 0, companies: 0 });
  const [latestApps, setLatestApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      setError("");
      try {
        // Fetch jobs count
        const jobsRes = await fetch("http://localhost:5000/api/jobs");
        const jobsData = await jobsRes.json();
        // Fetch applications
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";
        let applications = [];
        try {
          const appRes = await fetch("http://localhost:5000/api/applications", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (appRes.ok) {
            applications = await appRes.json();
          }
        } catch {}
        // Companies count (unique companies from jobs)
        const companies = Array.isArray(jobsData)
          ? new Set(jobsData.map(j => j.company)).size
          : 0;
        setStats({
          jobs: Array.isArray(jobsData) ? jobsData.length : 0,
          applications: applications.length,
          companies,
        });
        setLatestApps(applications.slice(0, 5));
      } catch (err) {
        setError("Failed to load dashboard statistics.");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-2">
          <BarChart2 className="w-7 h-7 text-blue-500" /> Dashboard Overview
        </h1>
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">{error}</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Total Jobs</CardTitle>
              <Briefcase className="w-7 h-7 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {loading ? <Loader2 className="animate-spin w-6 h-6 text-blue-300" /> : stats.jobs}
              </div>
              <CardDescription className="text-blue-700">Jobs posted</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-100 to-green-200 text-green-900 shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Applications</CardTitle>
              <FileText className="w-7 h-7 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {loading ? <Loader2 className="animate-spin w-6 h-6 text-green-300" /> : stats.applications}
              </div>
              <CardDescription className="text-green-700">Total applications</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 text-purple-900 shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Companies</CardTitle>
              <Users className="w-7 h-7 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {loading ? <Loader2 className="animate-spin w-6 h-6 text-purple-300" /> : stats.companies}
              </div>
              <CardDescription className="text-purple-700">Unique companies</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Last 5 Applications Table - matches view-applications page */}
        <div className=" mx-auto">
          <Card className="bg-white rounded-xl shadow">
            <CardHeader className="pb-2">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-500" /> Last 5 Applications
              </h2>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center gap-2 text-gray-500"><Loader2 className="animate-spin w-5 h-5" /> Loading...</div>
              ) : latestApps.length > 0 ? (
                <div className="overflow-x-auto rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="w-12 text-center">#</TableHead>
                        <TableHead>Job Details</TableHead>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Cover Note</TableHead>
                        <TableHead>Applied At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {latestApps.map((app, idx) => (
                        <TableRow key={app._id} className="hover:bg-gray-50">
                          <TableCell className="text-center font-medium">{idx + 1}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <span className="flex items-center gap-1 font-medium text-gray-900">
                                <Building2 className="w-4 h-4 text-gray-400" />
                                {app.job_id?.title || "-"}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-gray-500">
                                <User className="w-4 h-4 text-gray-300" />
                                {app.job_id?.company || "-"}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <span className="flex items-center gap-1 font-medium text-gray-900">
                                <User className="w-4 h-4 text-gray-400" />
                                {app.name}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-gray-500">
                                <Mail className="w-4 h-4 text-gray-300" />
                                {app.email}
                              </span>
                            </div>
                          </TableCell>
                          
                          <TableCell>
                            {app.resume_link ? (
                              <Button variant="ghost" size="sm" asChild className="gap-1">
                                <a href={app.resume_link} target="_blank" rel="noopener noreferrer">
                                  <FileText className="w-4 h-4" /> View
                                </a>
                              </Button>
                            ) : (
                              <span className="text-sm text-gray-400">No resume</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" className="gap-1">
                                  <StickyNote className="w-4 h-4" /> View Note
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Cover Note from {app.name}</DialogTitle>
                                  <DialogDescription>
                                    Applied for {app.job_id?.title} at {app.job_id?.company}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg max-h-96 overflow-y-auto">
                                  <p className="text-sm text-gray-700 whitespace-pre-line">
                                    {app.cover_note || "No cover note provided."}
                                  </p>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-gray-600 whitespace-nowrap">
                              {new Date(app.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                              <br />
                              <span className="text-xs text-gray-400">
                                {new Date(app.created_at).toLocaleTimeString()}
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-gray-400">No applications yet.</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
