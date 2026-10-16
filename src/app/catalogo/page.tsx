import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import { CatalogVarieties } from "@/components/catalog-varieties";
import { ProductFilters } from "@/components/product-filters";
import { catalogVarietyCount } from "@/data/catalog-varieties";
import { whatsappHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Catálogo de tés y best sellers", `Explora los best sellers y ${catalogVarietyCount} variedades agrupadas por familias en el catálogo de Le Thé Ecuador. Consulta disponibilidad por WhatsApp.`, "/catalogo");

export default function CatalogPage() {
  const whatsapp = whatsappHref("Hola, vi los best sellers en la web de Le Thé. ¿Me pueden contar sobre otros sabores de té disponibles?");

  return <div className="container listing-page catalog-page">
    <div className="page-heading">
      <p className="eyebrow">Catálogo</p>
      <h1>Best sellers</h1>
      <p>Una selección para empezar a explorar Le Thé. Confirma la composición y presentación de cada té con nosotros.</p>
    </div>
    <div className="catalog-more-flavors">
      <p><strong>Más de 80 sabores de té.</strong> Explora {catalogVarietyCount} variedades nombradas en el catálogo recibido. ¿Buscas otra opción? Pregúntanos por disponibilidad.</p>
      <div className="catalog-more-flavors-actions"><a className="text-link" href="#otras-variedades">Ver variedades</a>{whatsapp && <a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">Preguntar por WhatsApp <ArrowUpRightIcon /></a>}</div>
    </div>
    <ProductFilters />
    <CatalogVarieties />
  </div>;
}
