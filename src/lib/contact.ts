const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "593991001033";
export const whatsappNumber = /^\d{10,15}$/.test(rawNumber) ? rawNumber : null;
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || null;
export const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/lethe_ec/";

export function whatsappHref(message: string) {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
