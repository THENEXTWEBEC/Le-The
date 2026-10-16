import type { MetadataRoute } from "next";
import { canonicalBase } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return process.env.GITHUB_PAGES === "true"
    ? { rules: { userAgent: "*", allow: "/Le-The/" }, sitemap: `${canonicalBase}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
