import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { CartSyncManager } from "@/components/cart/cart-sync-manager";
import { unstable_cache } from "next/cache";
import { ServiceWorkerRegistry } from "@/components/pwa/service-worker-registry";
import { PostHogProvider } from "@/components/analytics/posthog-provider";

// Body font — clean, modern, highly readable streetwear body
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Heading font — bold, geometric, confident streetwear & luxury apparel typography
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Global metadata for Pulsar Fashion
export const metadata: Metadata = {
  title: {
    default: "Pulsar Fashion — Premium Streetwear, Viral Polo & Wholesale Hub",
    template: "%s — Pulsar Fashion",
  },
  description:
    "Official store of Pulsar Fashion. Shop viral dual-tone polo shirts, 240+ GSM drop-shoulder tees, club jerseys, and factory wholesale lots directly from Nagor Plaza, Fulbaria, Gulistan, Dhaka. Cash on delivery nationwide.",
  keywords: [
    "Pulsar Fashion",
    "Pulsar Fashion Fulbaria",
    "Nagor Plaza wholesale",
    "viral polo shirt",
    "drop shoulder t shirt",
    "Givenchy dual tone polo",
    "streetwear Bangladesh",
    "men's apparel wholesale Dhaka",
    "Represent hoodie",
    "Brasil 10 jersey",
  ],
  authors: [{ name: "Pulsar Fashion" }],
  creator: "Pulsar Fashion",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pulsar Fashion",
    title: "Pulsar Fashion — Premium Streetwear & Wholesale Hub",
    description:
      "Shop viral dual-tone polo shirts, drop-shoulder t-shirts & wholesale lots from Pulsar Fashion (Nagor Plaza, Fulbaria, Dhaka).",
    images: [
      {
        url: "/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Pulsar Fashion Streetwear & Polo Collection",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Pulsar Fashion",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session = null;
  try {
    session = await auth();
  } catch {
    // Auth fallback
  }
  const userId = session?.user?.id;
  const faviconUrl = "/assets/logo.jpg";

  return (
    <html
      lang="en"
      className={cn("h-full", inter.variable, montserrat.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground selection:bg-neutral-900 selection:text-white">
        <CartSyncManager userId={userId} />
        {/* Skip to main content — Accessibility (WCAG AA) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextTopLoader
          color="#0f172a"
          height={3}
          showSpinner={false}
          shadow="0 0 10px #0f172a,0 0 5px #0f172a"
        />
        {/* Structured Data — SEO */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster position="top-right" richColors closeButton />
        <PostHogProvider />
        <ServiceWorkerRegistry />
      </body>
    </html>
  );
}
