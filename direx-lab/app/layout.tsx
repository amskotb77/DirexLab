import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://direxlab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Direx Lab — Growth Direction for E-commerce Brands",
    template: "%s — Direx Lab",
  },
  description:
    "Direx Lab directs profitable growth for e-commerce brands through performance marketing, conversion rate optimization, creative strategy, and business development.",
  keywords: [
    "performance marketing agency",
    "e-commerce growth agency",
    "conversion rate optimization",
    "CRO agency",
    "creative strategy",
    "Meta Ads agency",
    "Direx Lab",
  ],
  authors: [{ name: "Direx Lab" }],
  openGraph: {
    title: "Direx Lab — Growth Direction for E-commerce Brands",
    description:
      "We direct profitable growth for e-commerce brands through strategy, creative, and performance.",
    url: siteUrl,
    siteName: "Direx Lab",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direx Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direx Lab — Growth Direction for E-commerce Brands",
    description:
      "We direct profitable growth for e-commerce brands through strategy, creative, and performance.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink text-paper overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
