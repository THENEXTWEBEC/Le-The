import { assetPath } from "@/lib/paths";

export type Recipe = {
  slug: string;
  title: string;
  introduction: string;
  image: string;
  imageAlt: string;
  category: string;
  ingredient: string;
  temperature: string;
  difficulty: string;
  duration: string;
  servings: string;
  ingredients: string[];
  tools: string[];
  steps: string[];
  tip: string;
  variation: string;
  related: string[];
};

// Las cantidades son sugerencias de receta, no instrucciones oficiales de un producto Le Thé.
export const recipes: Recipe[] = [
  {
    slug: "matcha-latte-frio",
    title: "Matcha latte frío",
    introduction: "Cremoso y fresco, con una base de matcha bien disuelta para evitar grumos.",
    image: assetPath("/images/matcha-latte.jpg"),
    imageAlt: "Matcha vertiéndose sobre leche para preparar un latte frío",
    category: "Latte",
    ingredient: "Matcha",
    temperature: "Frío",
    difficulty: "Fácil",
    duration: "7 min",
    servings: "1 vaso",
    ingredients: ["2 g de matcha (aprox. 1 cucharadita rasa)", "40 ml de agua a 75–80 °C", "180 ml de leche o bebida vegetal", "Hielo al gusto", "Endulzante opcional"],
    tools: ["Tazón pequeño", "Batidor de bambú o batidor de mano", "Vaso alto"],
    steps: ["Tamiza el matcha en un tazón para separar posibles grumos.", "Añade el agua tibia y bate en zigzag durante 20–30 segundos, hasta obtener una mezcla uniforme.", "Llena un vaso con hielo y vierte la leche.", "Agrega el matcha lentamente y mezcla antes de beber."],
    tip: "Prueba antes de endulzar. Para más intensidad, aumenta el matcha en 0,5 g sin cambiar la cantidad de leche.",
    variation: "Usa leche de avena o añade una pizca de vainilla. Son variaciones de la receta, no ingredientes confirmados del producto.",
    related: ["matcha-latte-caliente", "guia-preparar-te"],
  },
  {
    slug: "matcha-latte-caliente",
    title: "Matcha latte caliente",
    introduction: "Una preparación suave para tomarte unos minutos con calma.",
    image: assetPath("/images/matcha-latte-caliente.png"),
    imageAlt: "Matcha vertiéndose en una taza blanca de latte caliente",
    category: "Latte",
    ingredient: "Matcha",
    temperature: "Caliente",
    difficulty: "Fácil",
    duration: "8 min",
    servings: "1 taza",
    ingredients: ["2 g de matcha", "40 ml de agua a 75–80 °C", "180 ml de leche o bebida vegetal caliente", "Endulzante opcional"],
    tools: ["Tazón pequeño", "Colador fino", "Batidor", "Taza"],
    steps: ["Tamiza el matcha directamente en el tazón.", "Añade el agua a 75–80 °C; evita el agua hirviendo. Bate en zigzag hasta que no haya grumos.", "Calienta la leche sin llevarla a ebullición y espúmala si lo deseas.", "Vierte la leche en una taza y añade el matcha batido. Remueve suavemente."],
    tip: "Si queda muy intenso, añade un poco más de leche. Ajusta el dulzor al final.",
    variation: "Puedes servirlo sin espuma o con bebida vegetal. Estas son opciones de preparación.",
    related: ["matcha-latte-frio", "guia-preparar-te"],
  },
  {
    slug: "te-frio-naranja",
    title: "Té frío de naranja",
    introduction: "Una receta sencilla para preparar, enfriar y servir un té con un toque de fruta fresca.",
    image: assetPath("/images/te-naranja.jpg"),
    imageAlt: "Empaque de té Le Thé entre naranjas",
    category: "Té frío",
    ingredient: "Naranja",
    temperature: "Frío",
    difficulty: "Fácil",
    duration: "15 min + enfriado",
    servings: "2 vasos",
    ingredients: ["8 g de té de hoja suelta con naranja, si está disponible", "500 ml de agua", "½ naranja lavada, en rodajas", "Hielo al gusto", "Endulzante opcional"],
    tools: ["Hervidor", "Infusor o colador", "Jarra", "Dos vasos"],
    steps: ["Calienta el agua. Usa la temperatura y el tiempo indicados por el té que elijas; si no los tienes, comienza con agua a 85–90 °C.", "Infusiona las hojas 3–4 minutos como punto de partida y cuela. Ajusta según el resultado.", "Deja enfriar a temperatura ambiente y refrigera hasta que esté bien frío.", "Sirve con hielo y rodajas de naranja fresca."],
    tip: "Para un sabor menos intenso, añade agua fría después de enfriar. Endulza poco a poco.",
    variation: "Añade una hoja de menta fresca al vaso. La fruta y la menta son ingredientes sugeridos de esta receta, no una declaración de composición del té.",
    related: ["te-frio-arandanos", "guia-preparar-te"],
  },
  {
    slug: "te-frio-arandanos",
    title: "Té frío de arándanos",
    introduction: "Una forma frutal y fácil de servir el té en días cálidos.",
    image: assetPath("/images/te-arandanos.jpg"),
    imageAlt: "Empaque de té Le Thé rodeado de arándanos",
    category: "Té frío",
    ingredient: "Arándanos",
    temperature: "Frío",
    difficulty: "Fácil",
    duration: "15 min + enfriado",
    servings: "2 vasos",
    ingredients: ["8 g de té de hoja suelta con arándanos, si está disponible", "500 ml de agua", "50 g de arándanos frescos", "Hielo al gusto", "Endulzante opcional"],
    tools: ["Hervidor", "Infusor o colador", "Jarra", "Dos vasos"],
    steps: ["Calienta el agua siguiendo las indicaciones del té utilizado; como punto de partida, prueba 85–90 °C.", "Infusiona 3–4 minutos y cuela. Evita dejar las hojas dentro mientras se enfría.", "Deja enfriar y lleva la infusión al refrigerador.", "Reparte el hielo y los arándanos en los vasos. Vierte el té frío."],
    tip: "Machaca unos pocos arándanos para intensificar el sabor de la fruta fresca. Endulza solo después de probar.",
    variation: "Agrega unas gotas de limón al servir. Los arándanos frescos y el limón son parte de esta receta sugerida.",
    related: ["te-frio-naranja", "guia-preparar-te"],
  },
  {
    slug: "guia-preparar-te",
    title: "Guía básica para preparar té en casa",
    introduction: "Una base práctica para ajustar agua, cantidad y tiempo a tu gusto y a cada té.",
    image: assetPath("/images/ritual-del-te.jpg"),
    imageAlt: "Composición de tazas e infusiones con una frase sobre disfrutar el té",
    category: "Guía",
    ingredient: "Té",
    temperature: "Caliente",
    difficulty: "Fácil",
    duration: "10 min",
    servings: "1 taza",
    ingredients: ["2–3 g de té de hoja suelta como punto de partida", "250 ml de agua potable", "Endulzante opcional"],
    tools: ["Hervidor", "Infusor o colador", "Taza", "Reloj o temporizador"],
    steps: ["Calienta 250 ml de agua. Revisa primero la indicación del envase del té elegido.", "Si no hay una indicación, comienza con agua menos caliente para tés delicados y más caliente para infusiones robustas; evita asumir una temperatura universal.", "Pon 2–3 g de hojas en el infusor y vierte el agua.", "Prueba a partir de los 2 minutos y cuela cuando el sabor te resulte agradable. Registra el tiempo para repetirlo o ajustarlo."],
    tip: "Si queda fuerte, reduce tiempo o cantidad de hojas. Si queda suave, aumenta uno de los dos en el próximo intento.",
    variation: "Para servir frío, prepara la infusión, cuela y deja enfriar antes de añadir hielo. Sigue siempre las indicaciones específicas del producto cuando estén disponibles.",
    related: ["matcha-latte-frio", "te-frio-naranja"],
  },
];

export const getRecipe = (slug: string) => recipes.find((item) => item.slug === slug);
