import type { Metadata } from "next";

export const canonicalBase = "https://thenextwebec.github.io/Le-The";
export const socialImage = `${canonicalBase}/images/social-preview.jpg`;

export function canonicalUrl(path: string) {
  return `${canonicalBase}${path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`}`;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = canonicalUrl(path);
  const fullTitle = path === "/" ? title : `${title} | Le Thé Ecuador`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_EC",
      siteName: "Le Thé Ecuador",
      title: fullTitle,
      description,
      url,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Le Thé Ecuador: un momento para tu té" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [socialImage] },
  };
}
