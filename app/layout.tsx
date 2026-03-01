import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rohtangapiary.com/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rohtang Apiary | Pure Natural Honey",
    template: "%s | Rohtang Apiary",
  },
  description:
    "Discover the finest Himalayan honey, sustainably harvested by our dedicated beekeeper committed to preserving the ecosystem.",
  keywords:
    "Himalayan honey, natural honey, organic honey, sustainable beekeeping, honey products",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Rohtang Apiary | Pure Natural Honey",
    description:
      "Discover the finest Himalayan honey, sustainably harvested by our dedicated beekeeper committed to preserving the ecosystem.",
    siteName: "Rohtang Apiary",
    images: [
      {
        url: "/hero.avif",
        width: 1200,
        height: 630,
        alt: "Rohtang Apiary Himalayan Honey",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohtang Apiary | Pure Natural Honey",
    description:
      "Discover the finest Himalayan honey, sustainably harvested by our dedicated beekeeper committed to preserving the ecosystem.",
    images: ["/hero.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
