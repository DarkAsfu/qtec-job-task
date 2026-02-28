"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { RefreshCw, Loader2, FileText, StickyNote, Mail, User, Building2, Link as LinkIcon, Phone, Inbox, KeyRound } from "lucide-react";

export default function ViewApplicationsPage() {
  const [token, setToken] = useState("");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Try to get token from localStorage (e.g., after admin login)
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("token");
      if (stored) {
        setToken(stored);
      } else {
        setError("No admin token found. Please login first.");
      }
    }
  }, []);

  const fetchApplications = async () => {
    if (!token) {
      toast.error("No admin token found. Please login first.");
      return;
    }
    
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("admin_token");
          throw new Error("Unauthorized. Please login again.");
        }
        const data = await res.json();
        throw new Error(data.error || "Failed to fetch applications");
      }
      const data = await res.json();
      setApplications(data);
      toast.success(`Loaded ${data.length} applications`);
    } catch (err) {
      setError(err.message || "Failed to fetch applications");
      toast.error(err.message || "Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch if token exists
  useEffect(() => {
    if (token) {
      fetchApplications();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-7xl mx-auto">
        <CardHeader className="bg-white border-b">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">Job Applications</CardTitle>
              <CardDescription className="text-gray-500">
                Manage and review all job applications
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="px-3 py-1">
                Total: {applications.length}
              </Badge>
              <Button 
                onClick={fetchApplications} 
                disabled={loading || !token}
                variant="outline"
                className="gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Loading...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2 text-red-600">
                <KeyRound className="w-5 h-5" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          {!token && (
            <div className="text-center py-12">
              <KeyRound className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Admin Token Found</h3>
              <p className="text-gray-500 mb-6">Please login as admin to view applications</p>
              <Button onClick={() => window.location.href = "/admin/login"}>
                Go to Admin Login
              </Button>
            </div>
          )}

          {token && (
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-12 text-center">#</TableHead>
                    <TableHead>Job Details</TableHead>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Cover Note</TableHead>
                    <TableHead>Applied At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-12">
                        <div className="flex flex-col items-center gap-2">
                          <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
                          <p className="text-sm text-gray-500">Loading applications...</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}

                  {!loading && applications.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-12">
                        <Inbox className="mx-auto mb-4 w-12 h-12 text-gray-300" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">No Applications Found</h3>
                        <p className="text-sm text-gray-500">Applications will appear here once candidates apply</p>
                      </TableCell>
                    </TableRow>
                  )}

                  {!loading && applications.map((app, idx) => (
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
                        <div className="space-y-1">
                          {app.phone && (
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              <Phone className="w-4 h-4 text-gray-400" /> {app.phone}
                            </span>
                          )}
                          {app.linkedin_url && (
                            <a 
                              href={app.linkedin_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                            >
                              <LinkIcon className="w-4 h-4" /> LinkedIn
                            </a>
                          )}
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}