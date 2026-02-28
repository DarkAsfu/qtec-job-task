// Register page for the application
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:5000/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.message || "Registration failed");
      setSuccess("Registration successful! Please login.");
      setName(""); setEmail(""); setUsername(""); setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <Input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Full Name" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email address" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <Input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required placeholder="Username" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <Input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">{success}</div>}
          <button type="submit" className="w-full py-2 px-4 bg-[#5B3DF6] text-white rounded font-bold hover:bg-[#3d28b0] transition" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
