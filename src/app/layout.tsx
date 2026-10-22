import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { canonicalBase } from "@/lib/seo";
import { assetPath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBase),
  title: { default: "Le Thé Ecuador | Un momento para tu té", template: "%s | Le Thé Ecuador" },
  description: "Descubre Le Thé Ecuador, explora tés y encuentra recetas sencillas para disfrutar cada taza.",
  robots: process.env.NODE_ENV === "production" ? { index: true, follow: true } : { index: false, follow: false },
  icons: {
    icon: [{ url: assetPath("/favicon.ico"), sizes: "any" }, { url: assetPath("/icon-192.png"), sizes: "192x192", type: "image/png" }, { url: assetPath("/icon-512.png"), sizes: "512x512", type: "image/png" }],
    apple: [{ url: assetPath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">{children}</main><SiteFooter /><AnalyticsConsent /></body></html>;
}
