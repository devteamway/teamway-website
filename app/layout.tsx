import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teamway — The Way to Build Better Software",
  description: "Teamway is a software consultancy and development agency helping startups and enterprises build scalable products fast, powered by AI tools and modern technologies.",
  keywords: ["software development", "software consultancy", "MVP development", "mobile app development", "web development", "cloud services", "AI-powered development"],
  authors: [{ name: "Teamway" }],
  openGraph: {
    title: "Teamway — The Way to Build Better Software",
    description: "Teamway is a software consultancy and development agency helping startups and enterprises build scalable products fast.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
