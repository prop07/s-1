import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideLayout from "./SideLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sochsansar",
  description: "Soch sansar is a blog about technology, programming, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" bg-secondary text-text min-h-[100vh] flex flex-col overflow-hidden ">
      <div className=" max-w-7xl mx-auto">
        <NavBar />
        <div className=" text-sm p-2 grid grid-cols-4 gap-3">
          <div className=" col-span-3">
          {children}
          </div>
          <SideLayout />
        </div>
        <Footer />
      </div>
    </div>
      </body>
    </html>
  );
}
