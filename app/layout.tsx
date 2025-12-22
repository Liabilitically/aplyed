import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  title: "aplyed | Hiring that feels Human",
  description: "No Resumes. No Applications. Just an intelligent matching engine that connects talented students with the right employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <meta property="og:title" content="aplyed | Hiring that feels Human" />
      <meta property="og:description" content="No Resumes. No Applications. Just an intelligent matching engine that connects talented students with the right employers." />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="aplyed | Hiring that feels Human" />
      <meta name="twitter:description" content="No Resumes. No Applications. Just an intelligent matching engine that connects talented students with the right employers." />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
