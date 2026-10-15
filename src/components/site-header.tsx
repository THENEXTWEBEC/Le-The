import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/recetas", label: "Recetas" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/empresas", label: "Empresas" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand" href="/" aria-label="Le Thé Ecuador, inicio">
          <BrandLogo priority />
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/catalogo">Descubrir tés <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
