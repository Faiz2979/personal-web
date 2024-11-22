import Navbar from "@/component/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import './custom.css';
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Faiz's Website",
  description: "Welcome to my personal website, where I share my experiences.",
  // icons: {
  //   icon: "/assets/icon.png", // Path ke favicon di folder public
  //   shortcut: "/assets/icon.png", // Shortcut icon
  //   apple: "/assets/icon.png", // Untuk perangkat Apple
  // }
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
        <Navbar></Navbar>
        {children}
        
      </body>
    </html>
  );
}
