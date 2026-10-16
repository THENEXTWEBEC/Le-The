import { pageMetadata } from "@/lib/seo";
import { ResponsiveImage as Image } from "@/components/responsive-image";
import { assetPath } from "@/lib/paths";
import Link from "next/link";

export const metadata = pageMetadata("Nosotros", "Conoce la propuesta de Le Thé Ecuador y descubre nuevas maneras de disfrutar el té.", "/nosotros");

export default function AboutPage() {
  return <div className="container about-page"><div className="page-heading"><p className="eyebrow">Nosotros</p><h1>Le Thé, a tu manera.</h1><p>Nos gusta pensar en el té como un pequeño momento propio. Esta web reúne una primera selección para descubrir sabores e ideas para prepararlos.</p></div><div className="about-grid"><div className="about-image"><Image src={assetPath("/images/ritual-del-te.webp")} alt="Tazas de té y una ilustración de tetera con frase sobre disfrutar el té" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div><h2>Una invitación a explorar.</h2><p>Le Thé Ecuador presenta el té como una experiencia flexible: una taza caliente, un vaso con hielo o una receta hecha en casa.</p><p>El catálogo inicial de este sitio es editorial y está sujeto a confirmación. Aquí encontrarás recetas independientes de las especificaciones de cada producto.</p><Link href="/catalogo" className="button button-primary">Explorar los tés <span aria-hidden="true">↗</span></Link></div></div></div>;
}
