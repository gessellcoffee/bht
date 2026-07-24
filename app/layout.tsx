import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "@/component/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belong Here Theater",
  description: "Bringing the community together to share our knowledge and passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="bg-linear-135 from-magenta to-myCyan bg-cover bg-fixed ">
      <Navbar/>
      <div className="delay-300 duration-600 taos:scale-[0.6] taos:opacity-0" data-taos-offset="400">
        {children}
      </div>

      </body>
    </html>
  );
}
