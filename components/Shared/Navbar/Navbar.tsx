"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { BellRing, LogIn, Search } from "lucide-react";

export function Navbar() {
  return (
    <div className="flex justify-between p-4 border-b border-gray-500 h-16 bg-gray-800">
      <SidebarTrigger className="text-white" />

      <div className="flex gap-4 items-center">
        <div className="flex max-w-sm items-center bg-white border border-gray-300 rounded-lg px-3 py-0.5 transition-colors">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <Input
            type="search"
            placeholder="Buscar cursos..."
            className="ml-2 border-0 bg-transparent focus:outline-none focus:ring-0 focus-visible:border-0 focus-visible:ring-0 text-gray-800 placeholder:text-gray-400"
          />
        </div>
        <Button variant="ghost" className="hover:bg-gray-700">
          <BellRing className="text-white hover:text-white" />
        </Button>

        <SignedOut>
          <SignInButton>
            <Button className="hover: cursor-pointer">
              <LogIn />
              Iniciar Sesión
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
