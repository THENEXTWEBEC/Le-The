import type { Metadata } from "next";
import { RecipeFilters } from "@/components/recipe-filters";

export const metadata: Metadata = { title: "Recetas y guías", description: "Ideas y recetas de té frío, matcha latte y guías de preparación de Le Thé Ecuador." };

export default function RecipesPage() {
  return <div className="container listing-page"><div className="page-heading"><p className="eyebrow">Recetas</p><h1>Ideas para cada taza.</h1><p>Elige una receta, sigue los pasos y ajusta el resultado a tu gusto. Los ingredientes adicionales son sugerencias de preparación.</p></div><RecipeFilters /></div>;
}
