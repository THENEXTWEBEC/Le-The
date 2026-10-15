import Link from "next/link";
import { contactEmail, instagramUrl, whatsappHref } from "@/lib/contact";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  const whatsapp = whatsappHref("Hola, me gustaría conocer los tés de Le Thé.");
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" aria-label="Le Thé Ecuador, inicio" className="footer-logo">
            <BrandLogo />
          </Link>
          <p>Un momento de té para hacer una pausa en tu día.</p>
        </div>
        <div>
          <h2>Explora</h2>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/recetas">Recetas</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/empresas">Empresas</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div>
          <h2>Conversemos</h2>
          {whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>}
          {contactEmail && <a href={`mailto:${contactEmail}`}>Correo <span aria-hidden="true">↗</span></a>}
          {instagramUrl && <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>}
          {!whatsapp && !contactEmail && !instagramUrl && <p>Canales de contacto por confirmar.</p>}
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Le Thé Ecuador</span><span>Hecho para disfrutar cada taza.</span></div>
    </footer>
  );
}
