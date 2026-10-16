import type { Metadata } from "next";
import { ResponsiveImage as Image } from "@/components/responsive-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "@/data/recipes";
import { RecipeCard } from "@/components/recipe-card";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return recipes.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const recipe = getRecipe((await params).slug);
  if (!recipe) return { title: "Receta no encontrada" };
  return pageMetadata(recipe.title, recipe.introduction, `/recetas/${recipe.slug}`);
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const recipe = getRecipe((await params).slug);
  if (!recipe) notFound();
  const related = recipes.filter((item) => recipe.related.includes(item.slug));
  return <>
    <div className="container breadcrumb"><Link href="/recetas">Recetas</Link><span>/</span><span>{recipe.title}</span></div>
    <article className="container recipe-article"><header className="recipe-intro"><p className="eyebrow">{recipe.category} · {recipe.temperature}</p><h1>{recipe.title}</h1><p>{recipe.introduction}</p><div className="recipe-facts"><span><strong>Tiempo</strong>{recipe.duration}</span><span><strong>Porciones</strong>{recipe.servings}</span><span><strong>Dificultad</strong>{recipe.difficulty}</span></div></header><div className={`recipe-cover ${recipe.slug === "guia-preparar-te" ? "quote-image" : ""}`}><Image src={recipe.image} alt={recipe.imageAlt} fill sizes="(max-width: 800px) 100vw, 80vw" priority /></div><div className="recipe-body"><aside><div><h2>Ingredientes</h2><ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Utensilios</h2><ul>{recipe.tools.map((item) => <li key={item}>{item}</li>)}</ul></div></aside><div><h2>Preparación</h2><ol>{recipe.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol><div className="recipe-tip"><h3>Ajústalo a tu gusto</h3><p>{recipe.tip}</p></div><div className="recipe-tip"><h3>Otra forma de servirlo</h3><p>{recipe.variation}</p></div></div></div></article>
    {related.length > 0 && <section className="container section-space"><div className="section-heading"><h2>Sigue explorando.</h2></div><div className="related-grid">{related.map((item) => <RecipeCard key={item.slug} recipe={item} />)}</div></section>}
  </>;
}
