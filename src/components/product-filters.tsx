"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export function ProductFilters() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("");
  const [flavor, setFlavor] = useState("");
  const [serving, setServing] = useState("");
  const kinds = [...new Set(products.map((item) => item.kind))];
  const flavors = [...new Set(products.map((item) => item.flavor))];
  const filtered = useMemo(() => products.filter((item) =>
    item.name.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es").trim()) &&
    (!kind || item.kind === kind) && (!flavor || item.flavor === flavor) &&
    (!serving || item.serving.includes(serving))
  ), [query, kind, flavor, serving]);

  return <>
    <div className="filters" role="search" aria-label="Buscar y filtrar best sellers">
      <label>Buscar destacado<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre del té destacado" /></label>
      <label>Tipo<select value={kind} onChange={(event) => setKind(event.target.value)}><option value="">Todos</option>{kinds.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Perfil<select value={flavor} onChange={(event) => setFlavor(event.target.value)}><option value="">Todos</option>{flavors.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Preparación<select value={serving} onChange={(event) => setServing(event.target.value)}><option value="">Ambas</option><option>Caliente</option><option>Frío</option></select></label>
    </div>
    <p className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "té destacado" : "tés destacados"}</p>
    {filtered.length ? <div className="catalog-grid">{filtered.map((item) => <ProductCard key={item.slug} product={item} />)}</div> :
      <div className="empty-state"><h2>No encontramos ese destacado</h2><p>Prueba otra palabra o explora las variedades más abajo.</p><button type="button" onClick={() => { setQuery(""); setKind(""); setFlavor(""); setServing(""); }}>Limpiar filtros</button></div>}
  </>;
}
