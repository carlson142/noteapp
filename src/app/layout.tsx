import type { Metadata } from "next";
import { Geist, Geist_Mono, Macondo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const macondo = Macondo({
  variable: "--font-macondo",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Note Taking App",
  description: "Generated d1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${macondo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
