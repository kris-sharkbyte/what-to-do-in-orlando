import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FirebaseProvider from "@/components/FirebaseProvider";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WTDI - What To Do In Orlando | Ultimate Travel Guide & Attractions",
  description: "WTDI - What To Do In Orlando. Discover the best things to do in Orlando, Florida! From theme parks and attractions to restaurants, hotels, and local experiences. Your complete Orlando travel guide with insider tips.",
  keywords: "WTDI, what to do in Orlando, Orlando attractions, things to do Orlando, Orlando theme parks, Orlando restaurants, Orlando hotels, Orlando travel guide, Disney World, Universal Studios, Orlando activities",
  authors: [{ name: "WTDI - What To Do In Orlando" }],
  creator: "WTDI - What To Do In Orlando",
  publisher: "WTDI - What To Do In Orlando",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://what-to-do-in-orlando.web.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "WTDI - What To Do In Orlando | Ultimate Travel Guide & Attractions",
    description: "WTDI - What To Do In Orlando. Discover the best things to do in Orlando, Florida! From theme parks and attractions to restaurants, hotels, and local experiences.",
    url: 'https://what-to-do-in-orlando.web.app',
    siteName: 'WTDI - What To Do In Orlando',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orlando Travel Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WTDI - What To Do In Orlando | Ultimate Travel Guide & Attractions",
    description: "WTDI - What To Do In Orlando. Discover the best things to do in Orlando, Florida! From theme parks and attractions to restaurants, hotels, and local experiences.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FirebaseProvider />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
