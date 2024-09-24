import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { gitlabmono, incognito, inter } from "@/config/font";
import { SEO } from "@/config/seo";
import "@/styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SEO.title}`,
    default: SEO.title,
  },
  metadataBase: new URL(SEO.url),
  description: SEO.description,
  openGraph: {
    title: {
      template: `%s | ${SEO.title}`,
      default: SEO.title,
    },
    url: SEO.url,
    siteName: "victoreke.com",
    locale: "en-US",
    type: "website",
    description: SEO.description,
    images: SEO.ogImage,
  },
  alternates: {
    canonical: SEO.url,
  },
  other: {
    // TODO: Add Google Site Verification
    // "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
