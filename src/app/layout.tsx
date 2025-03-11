import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BLD Apps | Software Development Solutions",
    template: "%s | BLD Apps",
  },
  description: "Building tomorrow's software solutions today. Custom software development services for web and mobile applications.",
  keywords: ["software development", "web development", "mobile apps", "custom software", "Houston", "Texas"],
  authors: [{ name: "BLD Apps" }],
  creator: "BLD Apps",
  publisher: "BLD Apps",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://bldapps.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bldapps.com",
    title: "BLD Apps | Software Development Solutions",
    description: "Building tomorrow's software solutions today. Custom software development services for web and mobile applications.",
    siteName: "BLD Apps",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLD Apps | Software Development Solutions",
    description: "Building tomorrow's software solutions today. Custom software development services for web and mobile applications.",
    creator: "@bldapps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
