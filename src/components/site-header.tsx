"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/recetas", label: "Recetas" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/empresas", label: "Empresas" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuOpen = openForPath === pathname;

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenForPath(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenForPath(null);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner container">
        <Link className="brand" href="/" aria-label="Le Thé Ecuador, inicio" onClick={() => setOpenForPath(null)}>
          <BrandLogo priority />
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/catalogo">
          Descubrir tés <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpenForPath(menuOpen ? null : pathname)}
        >
          <span className="menu-toggle-label">Menú</span>
          <span className="menu-toggle-icon" aria-hidden="true"><span /><span /></span>
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil" hidden={!menuOpen}>
        <div className="mobile-nav-inner container">
          <p className="mobile-nav-heading">Explora Le Thé</p>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={() => setOpenForPath(null)}
            >
              <span className="mobile-nav-number">0{index + 1}</span>
              <span>{link.label}</span>
              <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link className="mobile-nav-cta" href="/catalogo" onClick={() => setOpenForPath(null)}>
            Descubrir tés <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
