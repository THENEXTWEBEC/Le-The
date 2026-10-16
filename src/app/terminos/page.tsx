import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Uso del sitio", "Condiciones de uso de la web informativa de Le Thé Ecuador.", "/terminos");

export default function TermsPage() {
  return <article className="container legal-page">
    <header className="page-heading"><p className="eyebrow">Información del sitio</p><h1>Uso del sitio</h1><p>Información general para navegar y consultar el catálogo de Le Thé Ecuador.</p></header>
    <div className="legal-copy">
      <section><h2>Contenido y consultas</h2><p>Esta web presenta una selección editorial de tés, recetas e ideas de preparación. No permite comprar, pagar ni cerrar pedidos en línea. Las consultas por WhatsApp o Instagram no constituyen una compra ni una cotización vinculante. Disponibilidad, composición, presentación y condiciones comerciales deben confirmarse directamente con Le Thé Ecuador.</p></section>
      <section><h2>Recetas e información</h2><p>Las recetas son sugerencias para preparar bebidas. Los ingredientes añadidos y las cantidades de cada receta no describen necesariamente la composición de un producto. El contenido del blog es informativo y no sustituye orientación médica individual.</p></section>
      <section><h2>Imágenes, textos y enlaces</h2><p>Las imágenes, el logotipo y los textos se muestran para presentar la marca y sus productos. Antes de reutilizar material del sitio, solicita autorización a su titular. Los enlaces a servicios y fuentes externas abren sitios que tienen sus propias condiciones y políticas.</p></section>
      <section><h2>Disponibilidad del sitio</h2><p>Podemos corregir información, actualizar páginas o interrumpir temporalmente el acceso por mantenimiento. Si encuentras un dato incorrecto o un enlace que no funciona, <Link href="/contacto">contáctanos</Link>.</p></section>
      <section className="legal-pending"><h2>Datos legales por confirmar</h2><p>El propietario debe validar estas condiciones y completar la identidad de la entidad responsable, domicilio legal y un correo de contacto antes de utilizarlas como texto contractual definitivo. Si se habilitan pagos o pedidos en línea, harán falta condiciones comerciales adicionales.</p></section>
    </div>
  </article>;
}
