import { ProductFilters } from "@/components/product-filters";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Catálogo de tés", "Explora matcha y tés con naranja, arándanos, manzana verde, menta y rosas de Le Thé Ecuador.", "/catalogo");

export default function CatalogPage() {
  return <div className="container listing-page"><div className="page-heading"><p className="eyebrow">Catálogo</p><h1>Encuentra tu próxima taza.</h1><p>Explora esta selección de Le Thé. Los detalles de composición y preparación se confirmarán en cada ficha.</p></div><ProductFilters /></div>;
}
