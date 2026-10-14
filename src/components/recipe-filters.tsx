"use client";

import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/recipe-card";

export function RecipeFilters() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [temperature, setTemperature] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const options = (field: "category" | "ingredient" | "temperature" | "difficulty") => [...new Set(recipes.map((item) => item[field]))];
  const filtered = useMemo(() => recipes.filter((item) =>
    item.title.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es").trim()) &&
    (!category || item.category === category) && (!ingredient || item.ingredient === ingredient) &&
    (!temperature || item.temperature === temperature) && (!difficulty || item.difficulty === difficulty)
  ), [query, category, ingredient, temperature, difficulty]);

  return <>
    <div className="filters recipe-filters" role="search" aria-label="Buscar y filtrar recetas">
      <label>Buscar receta<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre de la receta" /></label>
      <label>Tipo de bebida<select value={category} onChange={(event) => setCategory(event.target.value)}><option value="">Todos</option>{options("category").map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Ingrediente<select value={ingredient} onChange={(event) => setIngredient(event.target.value)}><option value="">Todos</option>{options("ingredient").map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Servicio<select value={temperature} onChange={(event) => setTemperature(event.target.value)}><option value="">Todos</option>{options("temperature").map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Dificultad<select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}><option value="">Todas</option>{options("difficulty").map((item) => <option key={item}>{item}</option>)}</select></label>
    </div>
    <p className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "receta" : "recetas"}</p>
    {filtered.length ? <div className="catalog-grid">{filtered.map((item) => <RecipeCard key={item.slug} recipe={item} />)}</div> :
      <div className="empty-state"><h2>No encontramos esa receta</h2><p>Prueba otra palabra o cambia los filtros.</p><button type="button" onClick={() => { setQuery(""); setCategory(""); setIngredient(""); setTemperature(""); setDifficulty(""); }}>Limpiar filtros</button></div>}
  </>;
}
