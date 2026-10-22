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
    name: "Wabi Matcha",
    kind: "Té matcha",
    flavor: "Especial",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/matcha-latte.webp"),
    imageAlt: "Matcha verde preparado para disfrutarlo solo o en latte",
    description: "Un punto de partida para tu ritual. Desde que los monjes zen lo llevaron a Japón en el siglo XII, el matcha se bate con calma y se toma con intención. Disfrútalo solo o en latte.",
    notes: "Un perfil vegetal y envolvente para disfrutar solo o en una preparación cremosa.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Batido con agua o preparado como latte frío o caliente.",
    relatedRecipes: ["matcha-latte-frio", "matcha-latte-caliente"],
  },
  {
    slug: "bingo-blueberry",
    name: "Bingo Blueberry",
    kind: "Infusión",
    flavor: "Frutal",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-bingo-blueberry.png"),
    imageAlt: "Empaque rojo de Bingo Blueberry rodeado de arándanos frescos",
    description: "Una infusión frutal con arándanos azules, primos del mortiño de nuestros Andes. Intensa, dulce y refrescante, caliente o con hielo.",
    notes: "Un perfil frutal y vibrante, perfecto para disfrutar caliente o con hielo.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Sírvelo frío con arándanos frescos, si te apetece.",
    relatedRecipes: ["bingo-blueberry-frio", "guia-preparar-te"],
  },
  {
    slug: "sencha-kyoto-rose",
    name: "Sencha Kyoto Rose",
    kind: "Hoja suelta",
    flavor: "Verde",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-petalos-rosa.png"),
    imageAlt: "Empaque de Sencha Kyoto Rose acompañado de pétalos de rosa",
    description: "El sencha es el té más tomado en Japón y nació cerca de Kioto en el siglo XVIII. Nuestra versión une sus hojas verdes con pétalos de rosa, para una taza fresca y delicada.",
    notes: "Un perfil floral y suave con la frescura de una base verde.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Disfrútalo caliente o con hielo, según el momento.",
    relatedRecipes: ["infusion-rose-frutos-rojos", "guia-preparar-te"],
  },
  {
    slug: "cream-earl-grey",
    name: "Cream Earl Grey",
    kind: "Hoja suelta",
    flavor: "Negro",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-cream-earl-grey.png"),
    imageAlt: "Empaque rojo de Cream Earl Grey rodeado de bergamotas y hojas de té",
    description: "Su nombre viene de Charles Grey, primer ministro británico de los años 1830, y del té negro con bergamota que lo hizo famoso. Nuestra versión le suma notas cremosas que suavizan su toque cítrico.",
    notes: "Un perfil negro, aromático y elegante para disfrutar a tu manera.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Pruébalo caliente, solo o con un toque de leche.",
    relatedRecipes: ["earl-grey-citrico-con-hielo", "guia-preparar-te"],
  },
  {
    slug: "kama-sutra-chai",
    name: "Kama Sutra Chai",
    kind: "Hoja suelta",
    flavor: "Chai",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-naranja.webp"),
    imageAlt: "Empaque de Kama Sutra Chai acompañado de especias cálidas",
    description: "El chai nació en la India, donde el té negro se hierve con especias y se comparte en cada esquina. Una mezcla cálida y especiada, ideal con leche.",
    notes: "Un perfil cálido y especiado para disfrutarlo solo o con leche.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Pruébalo caliente y, si te apetece, suavízalo con leche.",
    relatedRecipes: ["chai-latte-especiado", "guia-preparar-te"],
  },
  {
    slug: "quangzhou-milk",
    name: "Quangzhou Milk",
    kind: "Hoja suelta",
    flavor: "Oolong",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-arandanos.webp"),
    imageAlt: "Empaque de Quangzhou Milk acompañado de una taza cremosa",
    description: "Un oolong de perfil suave y cremoso, perfecto para preparar con leche.",
    notes: "Un oolong de perfil suave y cremoso para disfrutar caliente o preparado con leche.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Pruébalo caliente o prepáralo con leche para resaltar su perfil suave.",
    relatedRecipes: ["guia-preparar-te"],
  },
  {
    slug: "rooibos-provence",
    name: "Rooibos Provence",
    kind: "Hoja suelta",
    flavor: "Rooibos",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-manzana-verde.webp"),
    imageAlt: "Empaque de Rooibos Provence acompañado de lavanda y rosas",
    description: "El rooibos viene de las montañas de Cederberg, en Sudáfrica, y no tiene cafeína. Aquí se encuentra con los campos de lavanda de la Provenza francesa. Perfecto para relajarte. Lleva lavanda, rosas y más.",
    notes: "Un perfil suave y floral, pensado para una pausa relajada sin cafeína.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Disfrútalo caliente o con hielo, según el momento.",
    relatedRecipes: ["guia-preparar-te"],
  },
  {
    slug: "mint-green",
    name: "Mint Green",
    kind: "Hoja suelta",
    flavor: "Herbal",
    serving: ["Caliente", "Frío"],
    image: assetPath("/images/te-menta.webp"),
    imageAlt: "Empaque de Mint Green rodeado de hojas de menta",
    description: "Desde la antigua Grecia hasta las teterías de Marruecos, la menta ha refrescado a medio mundo. Herbal, sin cafeína y muy fresca. Pruébalo frío.",
    notes: "Un perfil herbal y refrescante para disfrutar en cualquier momento del día.",
    ingredients: null,
    quantity: null,
    steepTime: null,
    waterTemperature: null,
    suggestedServing: "Puedes consultarnos cómo prepararlo caliente o con hielo.",
    relatedRecipes: ["te-verde-frio-menta-limon", "guia-preparar-te"],
  },
];

export const getProduct = (slug: string) => products.find((item) => item.slug === slug);
