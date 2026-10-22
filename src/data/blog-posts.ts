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
    slug: "te-verde-menta-ritual-desierto",
    title: "Té verde con menta: frescura para seguir el ritmo",
    category: "Rituales del té",
    excerpt: "En Marruecos, el té con menta forma parte de la vida cotidiana: una pausa aromática que invita a compartir y continuar el día.",
    image: assetPath("/images/te-menta.webp"),
    imageAlt: "Empaque de Mint Green acompañado de hojas de menta",
    imageWidth: 1378,
    imageHeight: 1280,
    sections: [
      {
        heading: "Un ritual que atraviesa el desierto",
        paragraphs: [
          "El té verde con menta ocupa un lugar especial en la cultura marroquí. Se sirve caliente a distintas horas del día y acompaña encuentros, conversaciones y gestos de hospitalidad.",
          "En medio de un clima exigente, el aroma de la menta y la pausa de servir el té convierten cada taza en un ritual adaptable: puede abrir la mañana, acompañar una comida o reunir a varias personas al caer la tarde.",
        ],
      },
      {
        heading: "Teína, cafeína y atención",
        paragraphs: [
          "La llamada teína es cafeína: la misma molécula presente en el café. En el té, su cantidad cambia según las hojas, la porción y el tiempo de infusión; también varía la respuesta de cada persona.",
          "El té contiene además L-teanina. La investigación estudia cómo la combinación de L-teanina y cafeína puede influir en la atención a corto plazo, aunque una taza no produce el mismo efecto en todo el mundo. Si eres sensible a la cafeína, ajusta la cantidad o el horario.",
        ],
      },
      {
        heading: "El equilibrio de Mint Green",
        paragraphs: [
          "Inspirado en esa tradición, Mint Green de Le Thé combina el carácter del té verde con un perfil de menta fresco y aromático. Disfrútalo caliente para hacer una pausa o sírvelo con hielo cuando quieras una versión más ligera.",
          "Descubre nuestra selección de tés pensados para acompañarte en distintos ritmos y momentos. Escríbenos y te ayudamos a encontrar el blend ideal para ti.",
        ],
      },
    ],
    sources: [
      { label: "Estudio sobre la menta y el ritual del té en la cultura marroquí", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6371435/" },
      { label: "FDA: cafeína, sensibilidad individual y consumo", url: "https://www.fda.gov/consumers/articulos-para-el-consumidor-en-espanol/al-grano-cuanta-cafeina-es-demasiada" },
      { label: "Revisión de ensayos sobre té, L-teanina, cafeína y atención", url: "https://pubmed.ncbi.nlm.nih.gov/40314930/" },
    ],
    nextStep: { label: "Encontrar tu té ideal", href: "/contacto" },
  },
  {
    slug: "beneficios-te-blanco",
    title: "Té blanco: delicadeza, polifenoles y una pausa consciente",
    category: "Conoce tu té",
    excerpt: "El té blanco destaca por su procesamiento mínimo, su sabor delicado y sus polifenoles. Esto es lo que la evidencia permite decir sobre sus beneficios.",
    image: assetPath("/images/blog-white-tea-benefits.webp"),
    imageAlt: "Persona sirviendo té blanco en una taza junto al texto Beneficios del té blanco",
    imageWidth: 1430,
    imageHeight: 1442,
    sections: [
      {
        heading: "¿Qué hace especial al té blanco?",
        paragraphs: [
          "El té blanco proviene de la planta Camellia sinensis, igual que los tés verde, oolong y negro. Suele elaborarse con brotes y hojas jóvenes que pasan por un procesamiento mínimo, una característica que ayuda a conservar su perfil suave y aromático.",
          "Su taza puede ofrecer notas florales, frutales o ligeramente dulces. La variedad de la hoja y la preparación influyen tanto en el sabor como en la cantidad de cafeína y otros compuestos presentes.",
        ],
      },
      {
        heading: "Polifenoles y actividad antioxidante",
        paragraphs: [
          "El té blanco contiene polifenoles, entre ellos catequinas estudiadas por su actividad antioxidante. En el laboratorio, estos compuestos pueden interactuar con procesos de oxidación; en el cuerpo humano, su absorción y sus efectos son más complejos.",
          "Por eso, es más preciso hablar de una bebida que aporta compuestos vegetales dentro de una alimentación variada que prometer que una taza detendrá el envejecimiento o evitará el daño celular.",
        ],
      },
      {
        heading: "Hidratación y concentración",
        paragraphs: [
          "Como bebida preparada principalmente con agua, el té puede contribuir a la ingesta diaria de líquidos. Ensayos realizados con otros tipos de té han observado una hidratación comparable a la del agua en las cantidades estudiadas, aunque el agua sigue siendo la referencia principal para hidratarse.",
          "El té también puede aportar cafeína y L-teanina. Algunos estudios investigan su relación con la atención a corto plazo, pero la cantidad varía entre productos y preparaciones, y el efecto depende de la sensibilidad individual.",
        ],
      },
      {
        heading: "Corazón e inmunidad: sin promesas exageradas",
        paragraphs: [
          "Los compuestos del té se estudian por su posible relación con distintos indicadores cardiometabólicos e inmunitarios. Sin embargo, la evidencia disponible no permite asegurar que beber té blanco reduzca el colesterol, prevenga infecciones o fortalezca por sí solo el sistema inmunológico.",
          "Disfrútalo por su sabor y como parte de tus hábitos cotidianos. No sustituye una alimentación equilibrada, el descanso, la actividad física ni la orientación de un profesional de salud cuando la necesites.",
        ],
      },
      {
        heading: "Una taza a tu manera",
        paragraphs: [
          "Para apreciar su perfil delicado, sigue las indicaciones del empaque y evita usar agua excesivamente caliente. Prueba la primera taza sin endulzar y ajusta el tiempo de infusión en la siguiente preparación hasta encontrar tu equilibrio favorito.",
        ],
      },
    ],
    sources: [
      { label: "Revisión científica sobre té blanco, té verde y sus compuestos", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563719/" },
      { label: "Revisión sobre componentes bioactivos del té y sus límites", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6941079/" },
      { label: "Ensayo sobre el té y el mantenimiento de la hidratación", url: "https://pubmed.ncbi.nlm.nih.gov/21450118/" },
      { label: "FDA: cafeína, sensibilidad individual y consumo", url: "https://www.fda.gov/consumers/articulos-para-el-consumidor-en-espanol/al-grano-cuanta-cafeina-es-demasiada" },
    ],
    nextStep: { label: "Explorar nuestros tés", href: "/catalogo" },
  },
  {
    slug: "una-cita-con-te",
    title: "¿Te tomas un té conmigo?",
    category: "Momentos para compartir",
    excerpt: "No te estamos proponiendo matrimonio… todavía. Pero una cita con té sí suena bastante seria.",
    image: assetPath("/images/te-bingo-blueberry.png"),
    imageAlt: "Empaque de Bingo Blueberry acompañado de arándanos",
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
    image: assetPath("/images/te-cream-earl-grey.png"),
    imageAlt: "Empaque de Cream Earl Grey acompañado de hojas de té",
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
          "Es un clásico para quienes disfrutan los perfiles cítricos y aromáticos en su taza.",
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
    image: assetPath("/images/blog-te-negro.webp"),
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
