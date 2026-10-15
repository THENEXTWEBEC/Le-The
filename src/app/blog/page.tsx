import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Historias, curiosidades e ideas para hacer del té un momento propio en Le Thé Ecuador.",
};

export default function BlogPage() {
  return <div className="container blog-index">
    <header className="page-heading">
      <p className="eyebrow">Blog Le Thé</p>
      <h1>Historias para saborear despacio.</h1>
      <p>Una invitación para compartir una taza y pequeñas curiosidades para conocer mejor el té.</p>
    </header>
    <div className="blog-grid">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
  </div>;
}
