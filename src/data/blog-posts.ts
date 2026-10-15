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
  {
    slug: "descubre-el-te-negro",
    title: "Descubre la magia del té negro",
    category: "Conoce tu té",
    excerpt: "Tres razones para hacerle espacio al té negro: sus compuestos vegetales, su carácter estimulante y una historia que la ciencia sigue explorando.",
    image: assetPath("/images/blog-te-negro.png"),
    imageAlt: "Té negro servido en una taza, con el texto «Beneficios del té negro» y el logotipo de Le Thé Ecuador",
    imageWidth: 1484,
    imageHeight: 1486,
    sections: [
      {
        heading: "Una taza rica en matices",
        paragraphs: [
          "Amantes del té, este es el momento de descubrir el té negro. Su sabor profundo y sus aromas hacen que cada preparación tenga algo propio. Aquí van tres razones para acercarse a él con curiosidad.",
        ],
      },
      {
        heading: "1. Polifenoles en cada sorbo",
        paragraphs: [
          "El té negro contiene polifenoles, incluidos compuestos conocidos como teaflavinas. En estudios de laboratorio muestran actividad antioxidante. Eso describe una propiedad de sus compuestos; no significa que una taza detenga el envejecimiento.",
        ],
      },
      {
        heading: "2. Una pausa con cafeína y L-teanina",
        paragraphs: [
          "El té negro aporta cafeína y L-teanina. Algunas investigaciones han estudiado su relación con la atención, aunque la respuesta depende de la dosis y de cada persona. Una taza puede acompañar tu momento de concentración sin prometer un efecto igual para todos.",
        ],
      },
      {
        heading: "3. Una pregunta para la salud del corazón",
        paragraphs: [
          "También se investiga el té negro por su posible relación con la presión arterial y la función de los vasos sanguíneos. Algunos ensayos observaron cambios modestos, mientras otros no hallaron efectos claros. Por ahora, disfrutarlo no sustituye los hábitos ni la atención médica que cuidan el corazón.",
        ],
      },
      {
        heading: "¿Cómo disfrutas el tuyo?",
        paragraphs: [
          "Solo, con un toque de leche o servido frío: cuéntanos cómo disfrutas tu té negro y comparte tu pausa con Le Thé Ecuador usando #MomentoTeNegro. ☕",
        ],
      },
    ],
    sources: [
      { label: "Estudio de los compuestos fenólicos del té negro", url: "https://pubmed.ncbi.nlm.nih.gov/12516885/" },
      { label: "Ensayo sobre té negro, cafeína, L-teanina y atención", url: "https://pubmed.ncbi.nlm.nih.gov/26869148/" },
      { label: "Ensayo sobre té negro y presión arterial", url: "https://pubmed.ncbi.nlm.nih.gov/25658240/" },
      { label: "Ensayo sobre té negro y función vascular", url: "https://pubmed.ncbi.nlm.nih.gov/29460812/" },
    ],
    nextStep: { label: "Explorar nuestros tés", href: "/catalogo" },
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
