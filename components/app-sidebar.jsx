"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconCirclePlusFilled,
} from "@tabler/icons-react"
import Image from "next/image";

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Add Job Listing",
      url: "/dashboard/add-job",
      icon: IconCirclePlusFilled,
    },
    {
      title: "View Job Listing",
      url: "/dashboard/view-jobs",
      icon: IconListDetails,
    },
    {
      title: "View Application",
      url: "/dashboard/view-applications",
      icon: IconFileDescription,
    },
  ],
  
}

export function AppSidebar({ user, ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <Link href="/">
                <Image src="/logo.png" alt="QuickHire Logo" width={32} height={32} className="h-8 w-8" />
                <span className="text-[#25324B] font-[Red_Hat_Display] text-[20px] font-bold leading-[150%] ml-2" style={{fontFamily: 'Red Hat Display, sans-serif'}}>QuickHire</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={data.navMain.map(item => ({
            ...item,
            href: item.url,
          }))}
          activeTitle={typeof window !== 'undefined' ? data.navMain.find(i => i.url === window.location.pathname)?.title : undefined}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
