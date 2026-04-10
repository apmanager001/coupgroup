import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { getSiteUrl, siteAuthor } from "@/app/lib/site-content";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = getSiteUrl();
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteAuthor.name} | ${siteAuthor.role}`,
    template: `%s | ${siteAuthor.name}`,
  },
  description: siteAuthor.description,
  applicationName: `${siteAuthor.name} Projects`,
  authors: [{ name: siteAuthor.name, url: siteAuthor.personalSite }],
  creator: siteAuthor.name,
  publisher: siteAuthor.name,
  category: "technology",
  keywords: [
    "Robert Foley",
    "web developer",
    "frontend developer",
    "Next.js portfolio",
    "coupgroup",
    "project showcase",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${siteAuthor.name} Projects`,
    title: `${siteAuthor.name} | ${siteAuthor.role}`,
    description: siteAuthor.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteAuthor.name} | ${siteAuthor.role}`,
    description: siteAuthor.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff7ef" },
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
