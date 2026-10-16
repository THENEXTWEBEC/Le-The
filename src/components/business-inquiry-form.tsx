"use client";

import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon";
import { useState, type FormEvent } from "react";
import { whatsappNumber } from "@/lib/contact";
import Link from "next/link";

const interests = ["Té para oficina o equipo", "Té para un evento", "Regalos corporativos", "Otra consulta"];

export function BusinessInquiryForm() {
  const [handoffUrl, setHandoffUrl] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!whatsappNumber) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const lines = [
      "Hola, quisiera consultar opciones de Le Thé para mi empresa.",
      "",
      `Empresa: ${value("company")}`,
      `Contacto: ${value("contact")}`,
      `Correo: ${value("email")}`,
      value("phone") && `Teléfono: ${value("phone")}`,
      `Interés: ${value("interest")}`,
      value("city") && `Ciudad: ${value("city")}`,
      value("quantity") && `Cantidad aproximada: ${value("quantity")}`,
      `Detalles: ${value("message")}`,
    ].filter(Boolean);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    setHandoffUrl(url);
    window.dispatchEvent(new Event("le-the-business-handoff"));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return <form className="business-form" onSubmit={handleSubmit} onChange={() => setHandoffUrl(null)}>
    <div className="business-form-grid">
      <label>Nombre de la empresa <span aria-hidden="true">*</span><input name="company" type="text" autoComplete="organization" minLength={2} maxLength={100} required /></label>
      <label>Tu nombre <span aria-hidden="true">*</span><input name="contact" type="text" autoComplete="name" minLength={2} maxLength={100} required /></label>
      <label>Correo electrónico <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" maxLength={120} required /></label>
      <label>Teléfono de contacto<input name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
      <label>¿Qué te interesa? <span aria-hidden="true">*</span><select name="interest" defaultValue="" required><option value="" disabled>Selecciona una opción</option>{interests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}</select></label>
      <label>Ciudad<input name="city" type="text" autoComplete="address-level2" maxLength={80} /></label>
      <label>Cantidad aproximada<input name="quantity" type="number" min="1" max="100000" inputMode="numeric" placeholder="Si ya la conoces" /></label>
      <label className="business-form-wide">Cuéntanos tu idea <span aria-hidden="true">*</span><textarea name="message" rows={5} minLength={10} maxLength={1000} placeholder="¿Para quiénes sería? ¿Tienes una fecha o una idea en mente?" required /></label>
    </div>
    <label className="business-consent"><input name="consent" type="checkbox" required /><span>Acepto compartir estos datos con Le Thé Ecuador para recibir una respuesta a mi consulta. He leído la <Link href="/privacidad">información de privacidad</Link>.</span></label>
    <p className="business-form-note">Al continuar se abrirá WhatsApp con tu mensaje preparado. Revísalo y pulsa «Enviar» allí para compartir los datos. Este sitio no guarda el formulario.</p>
    {whatsappNumber ? <button className="button button-primary" type="submit">Continuar en WhatsApp <ArrowUpRightIcon /></button> : <p>El canal de recepción aún no está disponible.</p>}
    {handoffUrl && <p className="business-handoff" role="status">¿No se abrió WhatsApp? <a href={handoffUrl} target="_blank" rel="noopener noreferrer">Abrir el mensaje preparado</a>. El envío se completa en WhatsApp.</p>}
  </form>;
}
