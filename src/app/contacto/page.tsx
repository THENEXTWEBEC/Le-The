import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import { pageMetadata } from "@/lib/seo";
import { contactEmail, instagramUrl, whatsappHref } from "@/lib/contact";

export const metadata = pageMetadata("Contacto", "Escríbenos por WhatsApp o Instagram para conocer los tés de Le Thé Ecuador.", "/contacto");

export default function ContactPage() {
  const whatsapp = whatsappHref("Hola, me gustaría conocer los tés de Le Thé.");
  return <div className="container contact-page"><div className="page-heading"><p className="eyebrow">Contacto</p><h1>Hablemos de tu próximo té.</h1><p>Elige tu canal preferido y cuéntanos qué sabor estás buscando.</p></div><div className="contact-options" id="whatsapp">{whatsapp && <div><h2>WhatsApp</h2><p>Consulta sabores, presentaciones y disponibilidad.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp <ArrowUpRightIcon /></a></div>}{instagramUrl && <div><h2>Instagram</h2><p>Cuéntanos cuál es tu té favorito por mensaje directo.</p><a className="button button-outline" href={instagramUrl} target="_blank" rel="noopener noreferrer">Enviar DM <ArrowUpRightIcon /></a></div>}{contactEmail && <div><h2>Correo</h2><p>Para consultas generales.</p><a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}</a></div>}</div></div>;
}
