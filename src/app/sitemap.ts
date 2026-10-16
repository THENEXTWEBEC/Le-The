import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { recipes } from "@/data/recipes";
import { blogPosts } from "@/data/blog-posts";
import { canonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/catalogo", "/recetas", "/blog", "/nosotros", "/empresas", "/contacto", "/privacidad", "/terminos",
    ...products.map(({ slug }) => `/catalogo/${slug}`),
    ...recipes.map(({ slug }) => `/recetas/${slug}`),
    ...blogPosts.map(({ slug }) => `/blog/${slug}`),
  ];
  return paths.map((path) => ({ url: canonicalUrl(path), changeFrequency: "monthly" }));
}
