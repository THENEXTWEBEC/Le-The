import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import Link from "next/link";
import { whatsappHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacidad", "Conoce cómo se usa la información que compartes al contactar a Le Thé Ecuador.", "/privacidad");

export default function PrivacyPage() {
  const contact = whatsappHref("Hola, quisiera hacer una consulta sobre mis datos personales en Le Thé Ecuador.");
  return <article className="container legal-page">
    <header className="page-heading"><p className="eyebrow">Información del sitio</p><h1>Privacidad</h1><p>En Le Thé Ecuador cuidamos la información que compartes cuando consultas nuestros productos o te comunicas con nosotros.</p></header>
    <div className="legal-copy">
      <section><h2>Qué información recibimos</h2><p>La navegación por el catálogo, el blog y las recetas no requiere crear una cuenta ni entregar datos personales. Si utilizas el formulario para empresas, puedes compartir el nombre de la empresa, tu nombre, correo electrónico, teléfono, ciudad, cantidad aproximada, motivo de interés y detalles de tu consulta.</p><p>El formulario prepara un mensaje con la información que ingresaste y lo abre en WhatsApp. El sitio no guarda esos datos ni los envía a un servidor propio: solo se comparten cuando revisas el mensaje y confirmas «Enviar» en WhatsApp. También puedes contactarnos directamente por WhatsApp o Instagram.</p></section>
      <section><h2>Para qué utilizamos la información</h2><p>Utilizamos la información que decidas compartir para responder consultas, revisar opciones para empresas, confirmar disponibilidad y continuar la conversación comercial que hayas iniciado.</p><p>No utilizamos estos datos para vender bases de datos, enviar boletines no solicitados ni crear perfiles comerciales automatizados desde este sitio.</p></section>
      <section><h2>Consentimiento y servicios externos</h2><p>Antes de abrir WhatsApp desde el formulario, debes aceptar compartir tus datos con Le Thé Ecuador para recibir una respuesta a tu consulta. WhatsApp e Instagram reciben y tratan la información conforme a sus propias políticas de privacidad cuando utilizas esos servicios.</p><p>GitHub Pages aloja una copia pública de esta web y puede tratar datos técnicos de acceso conforme a sus condiciones. {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? "La medición con Google Analytics 4 se activa únicamente cuando aceptas la preferencia opcional y puedes modificarla desde el pie de página." : "Esta configuración del sitio no activa herramientas de analítica ni publicidad, ni instala cookies propias para seguimiento."}</p></section>
      <section><h2>Responsable</h2><p>Le Thé Ecuador es responsable de gestionar las consultas y la información que recibimos directamente a través de nuestros canales de contacto. Para consultas relacionadas con privacidad, puedes comunicarte con nosotros por WhatsApp o revisar todos los canales disponibles en la página de contacto.</p></section>
      <section><h2>Tus derechos</h2><p>Puedes solicitar información sobre los datos que hayas compartido, pedir su acceso, corrección o eliminación, retirar tu autorización cuando corresponda o formular una consulta sobre su uso. Atenderemos tu solicitud a través de nuestros canales de contacto, verificando razonablemente tu identidad cuando sea necesario.</p>{contact && <a className="text-link" href={contact} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <ArrowUpRightIcon /></a>}</section>
      <p><Link className="text-link" href="/contacto">Ver todos los canales de contacto <ArrowUpRightIcon /></Link></p>
    </div>
  </article>;
}
