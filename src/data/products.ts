import { assetPath } from "@/lib/paths";

export type Product = {
  slug: string;
  name: string;
  kind: string;
  flavor: string;
  serving: string[];
  image: string;
  imageAlt: string;
  description: string;
  notes: string;
  ingredients: string | null;
  quantity: string | null;
  steepTime: string | null;
  waterTemperature: string | null;
  suggestedServing: string;
  relatedRecipes: string[];
};

export const products: Product[] = [
  {
    slug: "matcha",
    name: "Matcha",
    kind: "Matcha",
    flavor: "Vegetal",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/matcha-latte.webp"),
    imageAlt: "Matcha verde vertiéndose sobre leche en un vaso",
    description: "Un punto de partida para explorar el ritual del matcha, solo o en latte.",
    notes: "Un perfil vegetal y envolvente para disfrutar solo o en una preparación cremosa.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Batido con agua o preparado como latte frío o caliente.",
    relatedRecipes: ["matcha-latte-frio", "matcha-latte-caliente"],
  },
  {
    slug: "te-naranja",
    name: "Té con naranja",
    kind: "Té de hoja suelta",
    flavor: "Cítrico",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-naranja.webp"),
    imageAlt: "Empaque rojo de Le Thé sobre una composición de naranjas frescas",
    description: "Una invitación a descubrir un té de inspiración cítrica.",
    notes: "Un perfil cítrico, alegre y versátil para disfrutar caliente o con hielo.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Pruébalo en una preparación fría con rodajas de naranja.",
    relatedRecipes: ["te-frio-naranja", "guia-preparar-te"],
  },
  {
    slug: "te-arandanos",
    name: "Té con arándanos",
    kind: "Té de hoja suelta",
    flavor: "Frutal",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-arandanos.webp"),
    imageAlt: "Empaque rojo de Le Thé rodeado de arándanos",
    description: "Una opción frutal para imaginar un pequeño momento de pausa.",
    notes: "Un perfil frutal que acompaña muy bien una pausa refrescante.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Sírvelo frío con arándanos frescos, si te apetece.",
    relatedRecipes: ["te-frio-arandanos", "guia-preparar-te"],
  },
  {
    slug: "te-manzana-verde",
    name: "Té con manzana verde",
    kind: "Té de hoja suelta",
    flavor: "Frutal",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-manzana-verde.webp"),
    imageAlt: "Empaque verde de Le Thé rodeado de manzanas verdes",
    description: "Una opción de inspiración frutal para disfrutar una pausa a tu manera.",
    notes: "Un perfil frutal y fresco, ideal para quienes disfrutan sabores ligeros.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Puedes consultarnos cómo prepararlo caliente o con hielo.",
    relatedRecipes: ["te-verde-manzana-canela", "guia-preparar-te"],
  },
  {
    slug: "te-menta",
    name: "Té con menta",
    kind: "Té de hoja suelta",
    flavor: "Herbal",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-menta.webp"),
    imageAlt: "Empaque verde de Le Thé rodeado de hojas de menta",
    description: "Una alternativa de inspiración herbal para tu momento de té.",
    notes: "Un perfil herbal y refrescante para disfrutar en cualquier momento del día.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Puedes consultarnos cómo prepararlo caliente o con hielo.",
    relatedRecipes: ["te-verde-frio-menta-limon", "guia-preparar-te"],
  },
  {
    slug: "te-rosas",
    name: "Té con rosas",
    kind: "Té de hoja suelta",
    flavor: "Floral",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-rosas.webp"),
    imageAlt: "Empaque rojo de Le Thé entre rosas rosadas",
    description: "Una opción de inspiración floral para regalarte una pausa.",
    notes: "Un perfil floral y delicado para convertir la pausa en un momento especial.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Puedes consultarnos cómo prepararlo caliente o con hielo.",
    relatedRecipes: ["infusion-rose-frutos-rojos", "guia-preparar-te"],
  },
];

export const getProduct = (slug: string) => products.find((item) => item.slug === slug);
