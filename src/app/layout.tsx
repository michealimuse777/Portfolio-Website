import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Imuse Michael | AI & Software Developer",
  description: "Portfolio of Imuse Michael, AI & Software Developer building automation systems and blockchain products.",
};

import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#0B0B0E] text-[#EDEDED] font-sans antialiased pb-24 sm:pb-0 selection:bg-[#7C7CFF]/30">
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
