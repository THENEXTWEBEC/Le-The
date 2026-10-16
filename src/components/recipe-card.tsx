import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import { ResponsiveImage as Image } from "@/components/responsive-image";
import Link from "next/link";
import type { Recipe } from "@/data/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <Link href={`/recetas/${recipe.slug}`} className={`card-image ${recipe.slug === "guia-preparar-te" ? "quote-image" : ""}`} aria-label={`Ver receta: ${recipe.title}`}>
        <Image src={recipe.image} alt={recipe.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      </Link>
      <div className="card-copy">
        <div className="card-meta">{recipe.category} <span>·</span> {recipe.duration}</div>
        <h3><Link href={`/recetas/${recipe.slug}`}>{recipe.title}</Link></h3>
        <p>{recipe.introduction}</p>
        <Link href={`/recetas/${recipe.slug}`} className="text-link">Ver preparación <ArrowUpRightIcon /></Link>
      </div>
    </article>
  );
}
