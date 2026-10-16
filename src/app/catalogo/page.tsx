import { ProductFilters } from "@/components/product-filters";
import { whatsappHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Best sellers | Catálogo de tés", "Descubre los best sellers de Le Thé Ecuador y pregunta por WhatsApp sobre su selección de más de 80 sabores de té.", "/catalogo");

export default function CatalogPage() {
  const whatsapp = whatsappHref("Hola, vi los best sellers en la web de Le Thé. ¿Me pueden contar sobre otros sabores de té disponibles?");

  return <div className="container listing-page catalog-page">
    <div className="page-heading">
      <p className="eyebrow">Catálogo</p>
      <h1>Best sellers</h1>
      <p>Una selección para empezar a explorar Le Thé. Confirma la composición y presentación de cada té con nosotros.</p>
    </div>
    <div className="catalog-more-flavors">
      <p><strong>Más de 80 sabores de té.</strong> ¿Te interesa uno que no aparece aquí? Escríbenos para conocer otras opciones y consultar su disponibilidad.</p>
      {whatsapp && <a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">Preguntar por WhatsApp <span aria-hidden="true">↗</span></a>}
    </div>
    <ProductFilters />
  </div>;
}
