import React from "react";

interface AutoLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AutoLayoutProps) {
  return (
    <div className="w-full h-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="absolute top-0 left-0 h-full w-full bg-linear-to-r from-indigo-900 to-gray-900 z[-1]" />
        {children}
      </div>
    </div>
  );
}
