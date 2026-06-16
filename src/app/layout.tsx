import type { Metadata } from "next";
import { Space_Mono, Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import GlobalPreloader from "@/components/ui/global-preloader";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Astute Estate",
  description: "Luxury Minimalist Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${spaceMono.className} ${jost.variable} ${cormorant.variable} font-mono antialiased`}
      >
        <GlobalPreloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

