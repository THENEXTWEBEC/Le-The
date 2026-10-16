import type { Metadata } from "next";
import { ResponsiveImage as Image } from "@/components/responsive-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/products";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/recipe-card";
import { whatsappHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return products.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return { title: "Té no encontrado" };
  return pageMetadata(product.name, product.description, `/catalogo/${product.slug}`);
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const whatsapp = whatsappHref(`Hola, quisiera consultar sobre ${product.name} de Le Thé.`);
  const related = recipes.filter((item) => product.relatedRecipes.includes(item.slug));
  return <>
    <div className="container breadcrumb"><Link href="/catalogo">Catálogo</Link><span>/</span><span>{product.name}</span></div>
    <article className="container detail-layout product-detail"><div className="detail-image"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" priority /></div><div className="detail-copy"><p className="eyebrow">Contenido inicial editable</p><h1>{product.name}</h1><p className="detail-lede">{product.description}</p><div className="product-attributes"><div><span>Tipo</span><strong>{product.kind}</strong></div><div><span>Perfil</span><strong>{product.flavor}</strong></div><div><span>Se disfruta</span><strong>{product.serving.join(" o ").toLowerCase()}</strong></div></div><p className="detail-note">Esta ficha presenta una selección inicial. La composición y los parámetros específicos del producto están pendientes de confirmación.</p>{whatsapp && <a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar este té por WhatsApp <span aria-hidden="true">↗</span></a>}</div></article>
    <section className="container detail-info section-space"><div><h2>Acerca de este té</h2><p>{product.notes}</p><p>{product.suggestedServing}</p></div><dl><div><dt>Ingredientes del producto</dt><dd>{product.ingredients || "Por confirmar"}</dd></div><div><dt>Cantidad por preparación</dt><dd>{product.quantity || "Por confirmar"}</dd></div><div><dt>Tiempo de infusión</dt><dd>{product.steepTime || "Por confirmar"}</dd></div><div><dt>Temperatura del agua</dt><dd>{product.waterTemperature || "Por confirmar"}</dd></div></dl></section>
    {related.length > 0 && <section className="container section-space"><div className="section-heading"><h2>Prepáralo a tu manera.</h2><p>Recetas sugeridas, independientes de la composición confirmada del producto.</p></div><div className="related-grid">{related.map((item) => <RecipeCard key={item.slug} recipe={item} />)}</div></section>}
  </>;
}
