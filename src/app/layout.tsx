import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteDescription =
  "Alsality Group builds and grows hospitality brands across restaurant development, operations, marketing, and food concepts in Qatar.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alsality-group.vercel.app"),
  title: "Alsality Group",
  description: siteDescription,
  openGraph: {
    title: "Alsality Group",
    description: siteDescription,
    url: "/",
    siteName: "Alsality Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alsality Group",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
