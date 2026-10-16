"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const storageKey = "le-the-analytics-consent";
type Choice = "accepted" | "rejected" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function activateAnalytics() {
  if (!measurementId || document.getElementById("le-the-ga4")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args); };
  window.gtag("js", new Date());
  window.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied" });
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("config", measurementId, { send_page_view: false });
  const script = document.createElement("script");
  script.id = "le-the-ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function AnalyticsConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);
  const [details, setDetails] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!measurementId) return;
    const saved = window.localStorage.getItem(storageKey);
    const next = saved === "accepted" || saved === "rejected" ? saved : null;
    const frame = window.requestAnimationFrame(() => {
      setChoice(next);
      setReady(true);
      setOpen(next === null);
      if (next === "accepted") activateAnalytics();
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const showSettings = () => { setDetails(true); setOpen(true); };
    window.addEventListener("le-the-consent-settings", showSettings);
    return () => window.removeEventListener("le-the-consent-settings", showSettings);
  }, []);

  useEffect(() => {
    if (choice !== "accepted" || !measurementId) return;
    activateAnalytics();
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [choice, pathname]);

  useEffect(() => {
    if (choice !== "accepted") return;
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const action = href.startsWith("https://wa.me/") ? "whatsapp_click"
        : href.startsWith("mailto:") ? "email_click"
        : href.startsWith("tel:") ? "phone_click"
        : link.classList.contains("button-primary") ? "primary_cta_click" : null;
      if (action) window.gtag?.("event", action, { link_path: href.startsWith("/") ? href : undefined });
    };
    const handleLead = () => window.gtag?.("event", "business_inquiry_handoff");
    document.addEventListener("click", handleClick);
    window.addEventListener("le-the-business-handoff", handleLead);
    return () => { document.removeEventListener("click", handleClick); window.removeEventListener("le-the-business-handoff", handleLead); };
  }, [choice]);

  if (!measurementId || !ready || !open) return null;
  const decide = (next: Exclude<Choice, null>) => {
    window.localStorage.setItem(storageKey, next);
    if (next === "rejected") window.gtag?.("consent", "update", { analytics_storage: "denied" });
    if (next === "accepted") { activateAnalytics(); window.gtag?.("consent", "update", { analytics_storage: "granted" }); }
    setChoice(next);
    setOpen(false);
  };
  return <aside className="consent-panel" aria-label="Preferencias de medición">
    <p>¿Podemos medir las visitas para mejorar la web? La medición es opcional y solo se activa si aceptas.</p>
    {details && <p className="consent-detail">La opción de medición utiliza Google Analytics 4. Puedes seguir navegando sin ella. Consulta la <Link href="/privacidad">información de privacidad</Link>.</p>}
    <div className="consent-actions"><button type="button" onClick={() => decide("accepted")}>Aceptar</button><button type="button" onClick={() => decide("rejected")}>Rechazar</button><button type="button" onClick={() => setDetails(!details)} aria-expanded={details}>Configurar</button></div>
  </aside>;
}
