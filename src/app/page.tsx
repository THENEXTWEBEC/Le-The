import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import { ResponsiveImage as Image } from "@/components/responsive-image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { RecipeCard } from "@/components/recipe-card";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/data/blog-posts";
import { products } from "@/data/products";
import { recipes } from "@/data/recipes";
import { instagramUrl, whatsappHref } from "@/lib/contact";
import { assetPath } from "@/lib/paths";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Le Thé Ecuador | Un momento para tu té", "Descubre Le Thé Ecuador: tés, recetas e ideas para disfrutar cada taza a tu manera.", "/");

export default function HomePage() {
  const whatsapp = whatsappHref("Hola, quiero conocer los tés de Le Thé. ¿Me ayudan a elegir uno?");
  return <>
    <section className="hero hero-text-only container">
      <div className="hero-copy">
        <p className="eyebrow">Le Thé Ecuador</p>
        <h1>Haz del té <em>tu momento.</em></h1>
        <p className="hero-lede">Sabores para descubrir con calma. Prepáralo a tu manera y disfruta todos los días.</p>
        <div className="actions"><Link className="button button-primary" href="/catalogo">Explorar tés <ArrowUpRightIcon /></Link><Link className="button button-outline" href="/recetas">Ver recetas</Link></div>
      </div>
    </section>

    <section className="intro-section section-space">
      <div className="container intro-grid">
        <div className="intro-image"><Image src={assetPath("/images/ritual-del-te.webp")} alt="Composición de infusiones y la frase «Si un té no te hace feliz, tómate dos»" fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        <div className="intro-copy"><p className="eyebrow">El ritual</p><h2>Una pausa que se siente tuya.</h2><p>Hay muchas formas de disfrutar una taza. En Le Thé queremos que encuentres la que acompaña mejor tu día: caliente, fría, sola o compartida.</p><Link className="text-link" href="/nosotros">Conoce Le Thé <ArrowUpRightIcon /></Link></div>
      </div>
    </section>

    <section className="section-space container">
      <div className="section-heading"><p className="eyebrow">Best sellers</p><h2>Encuentra tu favorito.</h2><p>Frutales, Herbales, Orgánicos, Té verde, Té negro, Té azul, Té rojo, Té blanco, Té dorado, Oolong, Rooibos, Chais y nuestro “Wabi Matcha”.</p></div>
      <div className="featured-products">{products.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
      <div className="section-end"><Link href="/catalogo" className="button button-outline">Ver todo el catálogo <ArrowUpRightIcon /></Link></div>
    </section>

    <section className="how-section section-space"><div className="container how-grid"><div><p className="eyebrow">Cómo disfrutar tu té</p><h2>Tu forma de prepararlo también cuenta.</h2><p>Una buena taza empieza con curiosidad. Descubre ideas para ajustar agua, tiempo, leche, hielo y frutas a tu gusto.</p><Link className="button button-light" href="/recetas/guia-preparar-te">Aprender a prepararlo <ArrowUpRightIcon /></Link></div><div className="how-lines" aria-hidden="true"><span>01 <b>Elige</b></span><span>02 <b>Prepara</b></span><span>03 <b>Disfruta</b></span></div></div></section>

    <section className="section-space container"><div className="section-heading"><p className="eyebrow">Ideas para tu taza</p><h2>Recetas para volver a preparar.</h2><p>Pasos claros, cantidades útiles y espacio para encontrar tu versión favorita.</p></div><div className="recipe-preview">{recipes.slice(0, 3).map((item) => <RecipeCard key={item.slug} recipe={item} />)}</div><div className="section-end"><Link href="/recetas" className="button button-outline">Todas las recetas <ArrowUpRightIcon /></Link></div></section>

    <section className="section-space blog-home-section"><div className="container"><div className="section-heading"><p className="eyebrow">Blog Le Thé</p><h2>Conversaciones con té.</h2><p>Una invitación para compartir y una curiosidad para mirar tu taza con otros ojos.</p></div><div className="blog-grid">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div><div className="section-end"><Link href="/blog" className="button button-outline">Ir al blog <ArrowUpRightIcon /></Link></div></div></section>

    <section className="idea-section section-space container"><div className="idea-image"><Image src={assetPath("/images/te-bingo-blueberry.png")} alt="Empaque de Bingo Blueberry acompañado de arándanos" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="idea-copy"><p className="eyebrow">Una idea fresca</p><h2>El té también se sirve con hielo.</h2><p>Prueba Bingo Blueberry en frío, con hielo y fruta fresca. Una preparación sencilla para descubrir su perfil intenso, dulce y refrescante.</p><Link className="text-link" href="/recetas/bingo-blueberry-frio">Preparar Bingo Blueberry frío <ArrowUpRightIcon /></Link></div></section>

    <section className="business-band"><div className="container business-band-inner"><div><p className="eyebrow">Le Thé para empresas</p><h2>Un momento para compartir.</h2><p>¿Tienes una idea para tu equipo, un evento o un detalle corporativo? Cuéntanos qué necesitas y conversemos sobre las opciones disponibles.</p></div><Link className="button button-light" href="/empresas">Hablar de mi empresa <ArrowUpRightIcon /></Link></div></section>

    <section className="contact-band"><div className="container contact-band-inner"><div><p className="eyebrow">¿Cuál te llevas primero?</p><h2>Elige el tuyo y conviértelo en tu momento del día.</h2><p>Wabi Matcha, Bingo Blueberry, Sencha Kyoto Rose, Cream Earl Grey y más tés seleccionados con cariño y empacados para conservar todo su aroma.</p></div><div className="contact-band-actions">{whatsapp ? <a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Pedir por WhatsApp <ArrowUpRightIcon /></a> : <Link className="button button-primary" href="/contacto">Conversemos <ArrowUpRightIcon /></Link>}{instagramUrl && <a className="text-link" href={instagramUrl} target="_blank" rel="noopener noreferrer">Cuéntanos por DM <ArrowUpRightIcon /></a>}</div></div></section>
  </>;
}
