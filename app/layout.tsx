import { Footer, Navbar } from "@/components/Shared";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { AppSidebar } from "./(routes)/(root)/components";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tu Academia",
  description: "Academia de cursos online para aprender a programar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${spaceGrotesk.variable} antialiased`}>
          <SidebarProvider>
            <AppSidebar />
            <div className="w-full flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-1">{children}</main>

              <Footer />
            </div>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
