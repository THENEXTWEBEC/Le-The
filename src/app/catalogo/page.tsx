import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import { CatalogVarieties } from "@/components/catalog-varieties";
import { ProductFilters } from "@/components/product-filters";
import { whatsappHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Catálogo de tés y best sellers", "Descubre los best sellers y la variedad de sabores de Le Thé Ecuador. Consulta disponibilidad por WhatsApp.", "/catalogo");

export default function CatalogPage() {
  const whatsapp = whatsappHref("Hola, vi los best sellers en la web de Le Thé. ¿Me pueden contar sobre otros sabores de té disponibles?");

  return <div className="container listing-page catalog-page">
    <div className="page-heading">
      <p className="eyebrow">Catálogo</p>
      <h1>Best sellers</h1>
      <p>Descubre nuestros favoritos y encuentra el té ideal para cada momento.</p>
    </div>
    <div className="catalog-more-flavors">
      <p><strong>Muchos sabores por descubrir.</strong> Explora nuestras variedades por familia o pregúntanos por la disponibilidad de tu favorita.</p>
      <div className="catalog-more-flavors-actions"><a className="text-link" href="#otras-variedades">Ver variedades</a>{whatsapp && <a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">Preguntar por WhatsApp <ArrowUpRightIcon /></a>}</div>
    </div>
    <ProductFilters />
    <CatalogVarieties />
  </div>;
}
