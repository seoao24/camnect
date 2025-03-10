"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AppHeader from "@/layout/app-header";
import { ToastContainer } from 'react-toastify';
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const accessKey = Cookies.get('access-key');
  if (!accessKey) {
    // router.push("/sign-in")
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F8F8] text-black`}
      >
        <div className={`w-full ${pathname.includes("/admin") ? 'hidden' : ''}`}>
          <AppHeader />
          <div className="p-0 m-0">
            <Suspense>
              {children}
            </Suspense>
          </div>
          <ToastContainer />
        </div>
        <div className={`w-full ${pathname.includes("/admin") ? '' : 'hidden'}`}>
          <Suspense>
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
