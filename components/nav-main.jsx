"use client"

import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";

import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  activeTitle,
  onItemClick
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-1">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = activeTitle === item.title;
            return (
              <SidebarMenuItem key={item.title}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition-colors font-medium text-base no-underline ${isActive ? 'bg-[#F3F6FD] text-[#4640DE]' : 'text-[#25324B] hover:bg-[#F3F6FD] hover:text-[#4640DE]'}`}
                    style={{ boxShadow: isActive ? '0 2px 8px 0 rgba(70,64,222,0.08)' : undefined }}
                    onClick={e => {
                      if (onItemClick) onItemClick(item);
                    }}
                    title={item.title}
                  >
                    {item.icon && (
                      <span className={`text-xl ${isActive ? 'text-[#4640DE]' : 'text-[#7C8493]'}`}>{<item.icon />}</span>
                    )}
                    <span className="truncate">{item.title}</span>
                  </Link>
                ) : (
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`flex items-center gap-3 px-4 py-6 rounded-lg transition-colors font-medium text-base ${isActive ? 'bg-[#F3F6FD] text-[#4640DE]' : 'text-[#25324B] hover:bg-[#F3F6FD] hover:text-[#4640DE]'}`}
                    style={{ boxShadow: isActive ? '0 2px 8px 0 rgba(70,64,222,0.08)' : undefined }}
                    onClick={() => onItemClick && onItemClick(item)}
                  >
                    {item.icon && (
                      <span className={`text-xl ${isActive ? 'text-[#4640DE]' : 'text-[#7C8493]'}`}>{<item.icon />}</span>
                    )}
                    <span className="truncate">{item.title}</span>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
