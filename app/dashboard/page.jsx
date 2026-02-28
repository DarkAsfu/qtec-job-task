'use client';
import { AppSidebar } from "@/components/app-sidebar"
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


export default function Page() {
  const [user, setUser] = useState({ name: "Admin", email: "admin@example.com", avatar: "/icon/profile.png" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      // You can also store avatar in localStorage if you want to support user avatars
      if (name && email) {
        setUser({ name, email, avatar: "/icon/profile.png" });
      }
    }
  }, []);

  return (
    <>
      {/* our statistcs */}
    </>
  );
}
