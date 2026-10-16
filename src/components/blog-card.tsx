import { ResponsiveImage as Image } from "@/components/responsive-image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

export function BlogCard({ post }: { post: BlogPost }) {
  return <article className="blog-card">
    <Link className={`blog-card-image${post.portrait ? " blog-card-image-portrait" : ""}`} href={`/blog/${post.slug}`} aria-label={`Leer ${post.title}`}>
      <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
    </Link>
    <div className="blog-card-copy">
      <p className="eyebrow">{post.category}</p>
      <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
      <Link className="text-link" href={`/blog/${post.slug}`}>Leer historia <span aria-hidden="true">↗</span></Link>
    </div>
  </article>;
}
