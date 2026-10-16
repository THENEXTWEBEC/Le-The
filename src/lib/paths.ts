const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}

const imageWidths: Record<string, number> = {
  "blog-cita-con-te": 1092,
  "blog-green-tea-mint-desert": 1378,
  "blog-te-negro": 1484,
  "blog-teina-earl-grey": 1420,
  "blog-white-tea-benefits": 1430,
  "idea-bebida-citrica": 1114,
  "hero-teaware-cyan": 1426,
  "matcha-latte-caliente": 1240,
  "matcha-latte": 1488,
  "ritual-del-te": 1192,
  "te-arandanos": 1122,
  "te-manzana-verde": 1128,
  "te-menta": 1064,
  "te-naranja": 1168,
  "te-rosas": 1136,
};

export function responsiveSrcSet(src: string) {
  const name = src.split("/").pop()?.replace(/\.webp$/, "");
  const width = name && imageWidths[name];
  if (!width) return undefined;
  return `${src.replace(/\.webp$/, "-480.webp")} 480w, ${src.replace(/\.webp$/, "-960.webp")} 960w, ${src} ${width}w`;
}
