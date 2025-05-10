
import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"], // Choose required font weights
  //variable: "--font-space-grotesk", // Custom CSS variable
});

export const metadata: Metadata = {
  title: "Cyberlab",
  description: "Your trusted partner in cybersecurity solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${spaceGrotesk.className} text-[#C5D8C3] antialiased  bg-gradient-to-br from-[#13292b] via-[#204747] to-[#142d2d]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
