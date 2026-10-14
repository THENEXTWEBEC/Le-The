# Le Thé Ecuador

Sitio inicial de Le Thé Ecuador, creado con Next.js, TypeScript y Tailwind CSS. Incluye una portada editorial, catálogo exploratorio, fichas de té, recetas, presentación de marca y contacto.

## Requisitos

- Node.js 20.9 o superior
- npm

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre `http://localhost:3000`.

Para generar la versión de producción:

```bash
npm run typecheck
npm run build
npm start
```

## Configuración de contacto

El WhatsApp comercial confirmado es `+593 99 100 1033` y está configurado por defecto en `src/lib/contact.ts`. Puedes cambiarlo con `NEXT_PUBLIC_WHATSAPP_NUMBER` en `.env.local` usando solo dígitos y código de país. El botón abre un mensaje prellenado.

El enlace de Instagram `@lethe_ec` procede de la imagen de marca proporcionada y puede cambiarse con `NEXT_PUBLIC_INSTAGRAM_URL`. El correo y la URL pública del sitio se configuran con `NEXT_PUBLIC_CONTACT_EMAIL` y `NEXT_PUBLIC_SITE_URL`. No se publica una dirección física sin confirmación.

## Contenido y estructura

| Ruta o carpeta | Contenido |
| --- | --- |
| `/` | Inicio editorial con tés y recetas destacados |
| `/catalogo` | Búsqueda y filtros de tés |
| `/catalogo/[slug]` | Ficha reutilizable de cada té |
| `/recetas` | Búsqueda y filtros de recetas |
| `/recetas/[slug]` | Preparación detallada |
| `/nosotros` | Presentación breve de la marca |
| `/contacto` | Canales confirmados |
| `src/data/products.ts` | Datos editables de tés |
| `src/data/recipes.ts` | Datos editables de recetas |
| `src/components/` | Encabezado, pie, tarjetas y filtros reutilizables |
| `public/images/` | Imágenes locales optimizadas |

### Añadir un té

1. Guarda su imagen optimizada en `public/images/`.
2. Añade un objeto a `products` en `src/data/products.ts` con un `slug` único, ruta de imagen y texto alternativo.
3. Completa los datos comerciales solo tras verificarlos. Si faltan ingredientes, cantidad, tiempo o temperatura, mantén `null` para que la ficha muestre «Por confirmar».
4. Relaciona recetas existentes mediante sus `slug` en `relatedRecipes`.

### Añadir una receta

1. Añade un objeto a `recipes` en `src/data/recipes.ts` con un `slug` único.
2. Incluye cantidades, utensilios, pasos, tiempo y porciones. Aclara cuáles ingredientes son sugerencias de receta cuando corresponda.
3. Añade sus enlaces relacionados en `related`. La ruta individual se genera automáticamente.

## Imágenes y marca

Las cinco fotografías recibidas están guardadas como JPEG optimizados con nombres descriptivos. El archivo `logo-provisional.jpg` es un recorte del logotipo que aparece en la fotografía de matcha, usado de forma temporal. Sustitúyelo por el archivo oficial cuando esté disponible, conservando las proporciones y actualizando las referencias en `site-header.tsx` y `site-footer.tsx`. La composición de bebida cítrica se presenta únicamente como inspiración de preparación, con un encuadre que evita usar la marca ajena de la imagen como identidad de Le Thé.

## Pendiente de confirmación

- Archivo independiente del logotipo oficial.
- Nombres comerciales, composición, notas de cata y parámetros de infusión de cada té.
- Precios, disponibilidad, correo y ubicación, si se publicarán más adelante.

El contenido de catálogo es una muestra editorial editable. No incluye carrito ni pagos.
