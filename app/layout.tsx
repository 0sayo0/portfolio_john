import type { Metadata } from "next";

import { Raleway } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Morales",
  description: "Portfolio made by Jonathan Morales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} min-h-screen bg-gradient-radial from-zinc-300 via-zinc-200 to-zinc-50`}
      >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
