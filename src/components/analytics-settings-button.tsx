"use client";

export function AnalyticsSettingsButton() {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return null;
  return <button className="footer-settings" type="button" onClick={() => window.dispatchEvent(new Event("le-the-consent-settings"))}>Preferencias de medición</button>;
}
