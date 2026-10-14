import type { Metadata } from "next";
import { ProductFilters } from "@/components/product-filters";

export const metadata: Metadata = { title: "Catálogo", description: "Explora los tés iniciales de Le Thé Ecuador. Fichas editoriales sujetas a confirmación comercial." };

export default function CatalogPage() {
  return <div className="container listing-page"><div className="page-heading"><p className="eyebrow">Catálogo</p><h1>Encuentra tu próxima taza.</h1><p>Explora esta primera selección de Le Thé. Los nombres y detalles comerciales se actualizarán al confirmar el catálogo.</p></div><ProductFilters /></div>;
}
