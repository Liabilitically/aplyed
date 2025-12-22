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
  title: "Aplyed | Hiring that feels Human",
  description: "No Resumes. No Applications. Connect with the perfect opportunity through a human-centric hiring database.",
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
      <meta property="og:title" content="Aplyed | Hiring that feels Human" />
      <meta property="og:description" content="No Resumes. No Applications. Connect with the perfect opportunity through a human-centric hiring database." />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Aplyed | Hiring that feels Human" />
      <meta name="twitter:description" content="No Resumes. No Applications. Connect with the perfect opportunity through a human-centric hiring database." />
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
