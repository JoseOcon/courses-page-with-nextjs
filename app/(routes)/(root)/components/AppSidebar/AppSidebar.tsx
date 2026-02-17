"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Route, routes, teacherRoutes } from "./AppSidebar.data";

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-gray-500">
      <SidebarContent className="bg-gray-800 text-white">
        <SidebarHeader
          className={`${state === "expanded" ? "p-auto" : "p-0"} transition-all duration-300`}
        >
          <Link href="/" className="flex flex-row items-center">
            <Image
              src="/new-logo.png"
              alt="Logo de Academia"
              width={80}
              height={80}
            />
            {state === "expanded" && (
              <span className="text-xl font-bold tracking-wide">
                Tu Academia
              </span>
            )}
          </Link>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Plataforma
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            {routes.map((route: Route) => (
              <SidebarMenuItem key={route.href}>
                <SidebarMenuButton asChild>
                  <a
                    href={route.href}
                    style={{
                      padding: "1.2rem 0  !important",
                    }}
                  >
                    <div
                      className={`p-1 rounded-lg text-white ${route.bgColor} ${state === "expanded" ? "ml-2" : "ml-0.5"}`}
                    >
                      <route.icon className="w-5 h-5" />
                    </div>
                    {state === "expanded" && (
                      <span className="ml-3">{route.label}</span>
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Profesor</SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            <SidebarMenuItem>
              <SidebarMenuSub>
                {teacherRoutes.map((route: Route) => (
                  <SidebarMenuSubItem key={route.href}>
                    <SidebarMenuSubButton
                      href={route.href}
                      className="py-5 text-white"
                    >
                      <div
                        className={`p-1 rounded-lg text-white ${route.bgColor}`}
                      >
                        <route.icon className="w-5 h-5" />
                      </div>
                      {state === "expanded" && (
                        <span className="ml-3">{route.label}</span>
                      )}
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
