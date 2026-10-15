import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://le-the-ecuador.robustlyric4.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Le Thé Ecuador | Un momento para tu té", template: "%s | Le Thé Ecuador" },
  description: "Descubre Le Thé Ecuador, explora tés y encuentra recetas sencillas para disfrutar cada taza.",
  openGraph: { type: "website", locale: "es_EC", siteName: "Le Thé Ecuador", images: ["/images/matcha-latte.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">{children}</main><SiteFooter /></body></html>;
}
