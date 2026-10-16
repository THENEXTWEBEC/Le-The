import { pageMetadata } from "@/lib/seo";
import { contactEmail, instagramUrl, whatsappHref } from "@/lib/contact";

export const metadata = pageMetadata("Contacto", "Escríbenos por WhatsApp o Instagram para conocer los tés de Le Thé Ecuador.", "/contacto");

export default function ContactPage() {
  const whatsapp = whatsappHref("Hola, me gustaría conocer los tés de Le Thé.");
  return <div className="container contact-page"><div className="page-heading"><p className="eyebrow">Contacto</p><h1>Hablemos de tu próximo té.</h1><p>Elige el canal confirmado que prefieras. Muy pronto podrás encontrar aquí más formas de contactar a Le Thé.</p></div><div className="contact-options" id="whatsapp"><div><h2>WhatsApp</h2><p>Para consultar sobre la selección y hacer preguntas.</p>{whatsapp ? <a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp <span aria-hidden="true">↗</span></a> : <span className="pending">Canal por confirmar</span>}</div><div><h2>Instagram</h2><p>Cuéntanos cuál es tu té favorito por mensaje directo.</p>{instagramUrl ? <a className="button button-outline" href={instagramUrl} target="_blank" rel="noopener noreferrer">Enviar DM <span aria-hidden="true">↗</span></a> : <span className="pending">Canal por confirmar</span>}</div><div><h2>Correo</h2><p>Para consultas generales.</p>{contactEmail ? <a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}</a> : <span className="pending">Correo por confirmar</span>}</div></div><p className="contact-note">La ubicación y otros datos comerciales se publicarán cuando estén confirmados.</p></div>;
}
