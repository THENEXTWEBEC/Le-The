"use client";

import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import { catalogGroups, catalogVarietyCount } from "@/data/catalog-varieties";
import { whatsappHref } from "@/lib/contact";

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();

export function CatalogVarieties() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const visibleGroups = useMemo(() => {
    const search = normalize(query);
    return catalogGroups
      .filter((group) => !category || group.id === category)
      .map((group) => ({
        ...group,
        varieties: group.varieties.filter((name) => !search || normalize(`${name} ${group.title}`).includes(search)),
      }))
      .filter((group) => group.varieties.length > 0);
  }, [query, category]);
  const visibleCount = visibleGroups.reduce((count, group) => count + group.varieties.length, 0);

  return <section className="varieties-section" id="otras-variedades" aria-labelledby="varieties-title">
    <div className="varieties-intro">
      <div>
        <p className="eyebrow">Explora el catálogo</p>
        <h2 id="varieties-title">Más tés por descubrir.</h2>
      </div>
      <p>{catalogVarietyCount} variedades nombradas en el catálogo de Le Thé, reunidas por familias. Consulta composición, presentación y disponibilidad antes de elegir.</p>
    </div>

    <div className="varieties-tools" role="search" aria-label="Buscar y filtrar otras variedades">
      <label htmlFor="variety-search">Busca un sabor</label>
      <input id="variety-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej. Earl Grey, manzana, menta…" autoComplete="off" />
      <div className="varieties-categories" role="group" aria-label="Filtrar por familia">
        <button type="button" aria-pressed={category === ""} onClick={() => setCategory("")}>Todas <span>{catalogVarietyCount}</span></button>
        {catalogGroups.map((group) => <button key={group.id} type="button" aria-pressed={category === group.id} onClick={() => setCategory(group.id)}>{group.title} <span>{group.varieties.length}</span></button>)}
      </div>
    </div>

    <p className="varieties-count" aria-live="polite">{visibleCount} {visibleCount === 1 ? "variedad" : "variedades"} {query || category ? (visibleCount === 1 ? "encontrada" : "encontradas") : "para explorar"}</p>
    {visibleCount ? <div className="varieties-groups">{visibleGroups.map((group, index) => <div className="varieties-group" key={group.id}>
      <div className="varieties-group-heading"><span className="varieties-group-index">{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3><span>{group.varieties.length} {group.varieties.length === 1 ? "variedad" : "variedades"}</span></div>
      <ul className="varieties-list">{group.varieties.map((name) => {
        const whatsapp = whatsappHref(`Hola, vi ${name} en la selección de ${group.title} del catálogo Le Thé. ¿Está disponible? ¿Cuál es su composición y presentación?`);
        return <li key={`${group.id}-${name}`}>{whatsapp ? <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Consultar ${name} de ${group.title} por WhatsApp`}><span>{name}</span><span className="varieties-list-action">Consultar <ArrowUpRightIcon /></span></a> : <span>{name}</span>}</li>;
      })}</ul>
    </div>)}</div> : <div className="varieties-empty"><p>No encontramos ese nombre en la selección.</p><button type="button" onClick={() => { setQuery(""); setCategory(""); }}>Ver todas las variedades</button></div>}
    <p className="varieties-note">Los nombres se conservan como aparecen en el catálogo recibido. La composición y disponibilidad de cada variedad se confirman directamente con Le Thé.</p>
  </section>;
}
