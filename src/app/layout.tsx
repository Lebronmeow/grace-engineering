import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Engineering | CNC & VMC Precision Machining in Vasai",
  description: "ISO 9001:2015 certified CNC machine shop in Vasai, Palghar, Maharashtra. Grace Engineering Works specializes in CNC & VMC precision machining, fasteners manufacturing, Traub job work, lathe machining, and milling services.",
  keywords: [
    "Grace Engineering", "Grace Engineering Works", "Grace Engg", "Grace Engineering Vasai", 
    "Grace Industries", "CNC machine shop", "CNC & VMC machining", "Precision machining", 
    "Precision fasteners", "Fasteners manufacturer", "Job work machining", "Traub job work", 
    "Lathe machining", "Milling services", "OD grinding services", "Vasai", "Palghar", "Maharashtra", "Mumbai"
  ],
  openGraph: {
    title: "Grace Engineering | CNC & VMC Precision Machining in Vasai",
    description: "ISO 9001:2015 certified CNC machine shop in Vasai, Palghar, Maharashtra. Grace Engineering Works specializes in CNC & VMC precision machining.",
    url: "https://graceengineering.in",
    siteName: "Grace Engineering Works",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://graceengineering.in",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "name": "Grace Engineering Works",
  "alternateName": "Grace Engineering",
  "url": "https://graceengineering.in",
  "logo": "https://graceengineering.in/grace_logo.png",
  "description": "ISO 9001:2015 certified CNC machine shop in Vasai, Palghar, Maharashtra specializing in CNC & VMC precision machining, fasteners manufacturing, and Traub job work.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ganesh Industrial Estate",
    "addressLocality": "Vasai East",
    "addressRegion": "Maharashtra",
    "postalCode": "401208",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.4078296",
    "longitude": "72.846383"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "sales@graceengineering.in",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": "English"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="md:snap-y md:snap-mandatory scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#0A0A0A] text-[#F9F9F9] overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
