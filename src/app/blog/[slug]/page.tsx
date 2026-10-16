import type { Metadata } from "next";
import { ResponsiveImage as Image } from "@/components/responsive-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return { title: "Historia no encontrada" };
  return pageMetadata(post.title, post.excerpt, `/blog/${post.slug}`);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  return <>
    <div className="container breadcrumb"><Link href="/blog">Blog</Link><span>/</span><span>{post.title}</span></div>
    <article className="container blog-article">
      <header className="blog-article-header">
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </header>
      <figure className={`blog-article-cover${post.portrait ? " blog-article-cover-portrait" : ""}`}>
        <Image src={post.image} alt={post.imageAlt} width={post.imageWidth} height={post.imageHeight} sizes={post.portrait ? "(max-width: 750px) 100vw, 720px" : "(max-width: 1100px) 100vw, 1040px"} priority />
      </figure>
      <div className="blog-article-body">
        {post.sections.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
        {post.sources && <aside className="blog-sources" aria-label="Fuentes">
          <h2>Para saber más</h2>
          <ul>{post.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul>
        </aside>}
        <div className="blog-article-end"><Link className="button button-primary" href={post.nextStep.href}>{post.nextStep.label} <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/blog">Volver al blog</Link></div>
      </div>
    </article>
  </>;
}
