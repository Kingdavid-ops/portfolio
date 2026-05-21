import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { BRAND_NAME, FULL_NAME } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppProviders } from "@/components/providers/app-providers";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { AnimatedGrid } from "@/components/effects/animated-grid";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification:{
    google:"q3oSLbk4mdrMygVA-UWqdLelNo6vJJB_4v2icsafC7g"
  },
  title: {
    default: `${BRAND_NAME} | ${FULL_NAME}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: siteConfig.description,
  keywords: [
    "software engineer",
    "portfolio",
    BRAND_NAME,
    FULL_NAME,
    "Next.js",
    "TypeScript",
    "React",
  ],
  authors: [{ name: FULL_NAME }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} — Elite Software Engineering`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable} dark h-full scroll-smooth`}
    >
      <body className="relative min-h-full flex flex-col font-sans antialiased noise-overlay">
        <AnimatedGrid className="fixed inset-0 -z-10" />
        <CursorGlow />
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
