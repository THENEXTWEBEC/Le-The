import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import Link from "next/link";
import { whatsappHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacidad", "Conoce qué datos se usan al contactar a Le Thé Ecuador y qué información legal falta confirmar.", "/privacidad");

export default function PrivacyPage() {
  const contact = whatsappHref("Hola, quisiera hacer una consulta sobre mis datos personales en Le Thé Ecuador.");
  return <article className="container legal-page">
    <header className="page-heading"><p className="eyebrow">Información del sitio</p><h1>Privacidad</h1><p>Así funciona la información que compartes al visitar esta web o al escribirnos.</p></header>
    <div className="legal-copy">
      <section><h2>Qué datos compartes</h2><p>Al explorar el catálogo, blog o recetas no te pedimos crear una cuenta. Si usas el formulario para empresas, puedes escribir el nombre de la empresa, tu nombre, correo, teléfono opcional, ciudad opcional, cantidad aproximada, interés y detalles de tu consulta.</p><p>El formulario prepara un mensaje en WhatsApp. Esta web no guarda esos campos ni los envía a un servidor propio; el envío ocurre cuando confirmas «Enviar» en WhatsApp. También puedes escribirnos directamente por WhatsApp o Instagram.</p></section>
      <section><h2>Para qué usamos tu consulta</h2><p>Los datos que decidas enviar se utilizan para responder a tu solicitud comercial y continuar esa conversación. No hay suscripción a boletines ni perfiles comerciales automatizados en este sitio.</p></section>
      <section><h2>Servicios externos y cookies</h2><p>Al abrir WhatsApp o Instagram, esos servicios aplican sus propias políticas. GitHub Pages y Sites alojan copias públicas de la web y pueden tratar datos técnicos de acceso según sus condiciones. {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? "La medición con Google Analytics 4 solo se activa si aceptas la preferencia opcional; puedes cambiarla desde el pie de página." : "Esta versión no activa herramientas de analítica ni publicidad ni instala cookies propias para seguimiento."} Las plataformas de alojamiento pueden usar registros o medidas técnicas de seguridad; el propietario debe confirmar sus detalles con cada proveedor.</p></section>
      <section><h2>Tus consultas sobre datos</h2><p>Puedes escribir al canal confirmado de Le Thé Ecuador para preguntar por el uso de los datos que hayas enviado, solicitar acceso, corrección o eliminación, o retirar una autorización cuando corresponda.</p>{contact && <a className="text-link" href={contact} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <ArrowUpRightIcon /></a>}</section>
      <section className="legal-pending"><h2>Datos pendientes de completar por el propietario</h2><p>Antes de considerar este aviso legal definitivo, Le Thé Ecuador debe confirmar la identidad y domicilio legal del responsable del tratamiento, un correo de contacto, la base jurídica aplicable, los plazos de conservación de conversaciones y registros, y los detalles de tratamiento y transferencias de sus proveedores. No se publican datos supuestos.</p></section>
      <p><Link className="text-link" href="/contacto">Ver todos los canales de contacto <ArrowUpRightIcon /></Link></p>
    </div>
  </article>;
}
