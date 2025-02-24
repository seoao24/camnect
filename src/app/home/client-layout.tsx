"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AppHeader from "@/layout/app-header";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F8F8] text-black`}
      >
        <AppHeader />
        <div className="p-0 m-0">
          {children}
        </div>
      </body>
    </html>
  );
}
