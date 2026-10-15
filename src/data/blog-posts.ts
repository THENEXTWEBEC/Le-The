import { assetPath } from "@/lib/paths";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  portrait?: boolean;
  sections: { heading: string; paragraphs: string[] }[];
  sources?: { label: string; url: string }[];
  nextStep: { label: string; href: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "una-cita-con-te",
    title: "¿Te tomas un té conmigo?",
    category: "Momentos para compartir",
    excerpt: "No te estamos proponiendo matrimonio… todavía. Pero una cita con té sí suena bastante seria.",
    image: assetPath("/images/blog-cita-con-te.png"),
    imageAlt: "Una taza de té dentro de un estuche rojo con la pregunta «Will you… get Tea with me?»",
    imageWidth: 1092,
    imageHeight: 1348,
    portrait: true,
    sections: [
      {
        heading: "Una invitación que cabe en una taza",
        paragraphs: [
          "No te estamos proponiendo matrimonio… todavía. 💍🫖 Pero una cita con té sí suena bastante seria.",
          "¿Te tomas un té conmigo? Puede ser la excusa perfecta para sentarse, conversar sin prisa y hacerle espacio a un momento compartido.",
        ],
      },
      {
        heading: "El plan lo ponen ustedes",
        paragraphs: [
          "Una taza caliente, una versión fría o dos sabores distintos para probar: lo importante es encontrar una forma de disfrutar el té que se sienta propia.",
        ],
      },
    ],
    nextStep: { label: "Elegir un té para compartir", href: "/catalogo" },
  },
  {
    slug: "teina-y-earl-grey",
    title: "La teína y el encanto del Earl Grey",
    category: "Conoce tu té",
    excerpt: "La teína es la cafeína presente en el té. El Earl Grey suma a su base de té negro el aroma característico de la bergamota.",
    image: assetPath("/images/blog-teina-earl-grey.png"),
    imageAlt: "Taza de té y tetera blanca frente a un jardín junto al agua",
    imageWidth: 1420,
    imageHeight: 1380,
    sections: [
      {
        heading: "¿Teína o cafeína?",
        paragraphs: [
          "La llamada teína es cafeína: la misma sustancia que también está presente en el café. La cantidad que llega a cada taza de té puede variar según las hojas y la preparación.",
          "Su efecto tampoco es igual para todas las personas. Influyen la cantidad que se bebe y la sensibilidad individual, así que vale la pena escuchar cómo te sienta cada taza.",
        ],
      },
      {
        heading: "El aroma de Earl Grey",
        paragraphs: [
          "El Earl Grey es una mezcla de té negro conocida por el aroma de la bergamota, un cítrico que le da su carácter perfumado. Es una forma deliciosa de detenerse a apreciar el aroma antes del primer sorbo.",
          "Esta historia habla de un estilo de té; no describe la composición de un producto específico de Le Thé Ecuador.",
        ],
      },
    ],
    sources: [
      { label: "FDA: cafeína en el té y sensibilidad individual", url: "https://www.fda.gov/consumers/articulos-para-el-consumidor-en-espanol/al-grano-cuanta-cafeina-es-demasiada" },
      { label: "Estudio sobre el aroma de tés negros con bergamota", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7570765/" },
    ],
    nextStep: { label: "Explorar más ideas para tu taza", href: "/recetas" },
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
