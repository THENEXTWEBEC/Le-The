import { ResponsiveImage as Image } from "@/components/responsive-image";
import { BusinessInquiryForm } from "@/components/business-inquiry-form";
import { assetPath } from "@/lib/paths";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Té para empresas", "Cuéntanos qué necesita tu empresa y conversemos sobre opciones de té para equipos, eventos o regalos.", "/empresas");

const occasions = [
  { number: "01", title: "Para tu equipo", text: "Una pausa de té en la oficina o en un encuentro de trabajo." },
  { number: "02", title: "Para un evento", text: "Una idea para compartir té en una ocasión especial." },
  { number: "03", title: "Para regalar", text: "Un detalle que puedes pensar para clientes o colaboradores." },
];

export default function BusinessPage() {
  return <>
    <section className="business-hero container">
      <div className="business-hero-copy">
        <p className="eyebrow">Le Thé para empresas</p>
        <h1>Una pausa para <em>compartir.</em></h1>
        <p>Si tienes una idea para tu equipo, un evento o un detalle corporativo, cuéntanos lo que necesitas. Revisaremos contigo las opciones disponibles.</p>
        <a className="button button-primary" href="#consulta">Cuéntanos tu idea <span aria-hidden="true">↗</span></a>
      </div>
      <div className="business-hero-image"><Image src={assetPath("/images/te-arandanos.webp")} alt="Empaque de Le Thé Ecuador rodeado de arándanos" fill sizes="(max-width: 700px) 100vw, 50vw" priority /></div>
    </section>

    <section className="container business-occasions section-space" aria-labelledby="business-occasions-title">
      <div className="section-heading"><p className="eyebrow">Conversemos</p><h2 id="business-occasions-title">Cada empresa tiene su manera de compartir.</h2><p>Estas son algunas ideas para iniciar la conversación. Los detalles comerciales se confirman según tu consulta.</p></div>
      <div className="business-occasion-list">{occasions.map((occasion) => <div key={occasion.number}><span>{occasion.number}</span><h3>{occasion.title}</h3><p>{occasion.text}</p></div>)}</div>
    </section>

    <section className="business-inquiry-section" id="consulta" aria-labelledby="business-inquiry-title">
      <div className="container business-inquiry-layout">
        <div className="business-inquiry-intro"><p className="eyebrow">Tu consulta</p><h2 id="business-inquiry-title">Cuéntanos sobre tu empresa.</h2><p>Completa los datos para preparar tu mensaje. Si aún no conoces las cantidades o fechas, puedes comentarlo en los detalles.</p></div>
        <BusinessInquiryForm />
      </div>
    </section>
  </>;
}
