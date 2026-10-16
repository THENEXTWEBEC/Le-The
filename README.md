# Le Thé Ecuador

Sitio inicial de Le Thé Ecuador, creado con Next.js, TypeScript y Tailwind CSS. Incluye una portada editorial, catálogo exploratorio, fichas de té, recetas, presentación de marca, consultas para empresas y contacto.

**Web pública:** https://le-the-ecuador.robustlyric4.chatgpt.site/

**GitHub Pages:** https://thenextwebec.github.io/Le-The/

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
```

La compilación genera un sitio estático en `out/`, con todas las fichas y recetas incluidas. GitHub Actions publica automáticamente cada cambio en `main` en GitHub Pages, bajo `/Le-The/`. La web de Sites se actualiza por separado. GitHub Pages es la URL canónica e indexable; Sites declara `noindex` para evitar duplicados en buscadores.

## Configuración de contacto

El WhatsApp comercial confirmado es `+593 99 100 1033` y está configurado por defecto en `src/lib/contact.ts`. Puedes cambiarlo con `NEXT_PUBLIC_WHATSAPP_NUMBER` en `.env.local` usando solo dígitos y código de país. El botón abre un mensaje prellenado.

El enlace de Instagram `@lethe_ec` procede de la imagen de marca proporcionada y puede cambiarse con `NEXT_PUBLIC_INSTAGRAM_URL`. El correo y la URL pública del sitio se configuran con `NEXT_PUBLIC_CONTACT_EMAIL` y `NEXT_PUBLIC_SITE_URL`. No se publica una dirección física sin confirmación.

El formulario de Empresas prepara un mensaje para el WhatsApp confirmado. La persona debe pulsar «Enviar» en WhatsApp para completar su consulta; el sitio no guarda ni transmite el formulario por sí mismo. El aviso de privacidad y las condiciones de uso están enlazados en el pie de página.

## SEO, medición y avisos legales

El sitio genera títulos, descripciones, URL canónicas, tarjetas Open Graph/Twitter, favicon, `sitemap.xml` y `robots.txt`. La imagen social se encuentra en `public/images/social-preview.jpg`.

La medición está desactivada porque no se ha proporcionado un ID de GA4. Si el propietario lo decide, puede configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` con su ID real (`G-…`) antes de compilar. El script de medición solo se carga tras la aceptación opcional del visitante; el pie de página permite cambiar esa preferencia. No se envían datos del formulario a Analytics: únicamente se registra la apertura del enlace preparado.

Los avisos de `/privacidad` y `/terminos` son informativos y señalan los datos legales pendientes. El propietario debe confirmar identidad, domicilio legal, correo, base de tratamiento, conservación y detalles de proveedores antes de considerarlos definitivos.

## Contenido y estructura

| Ruta o carpeta | Contenido |
| --- | --- |
| `/` | Inicio editorial con tés y recetas destacados |
| `/catalogo` | Búsqueda y filtros de tés |
| `/catalogo/[slug]` | Ficha reutilizable de cada té |
| `/recetas` | Búsqueda y filtros de recetas |
| `/recetas/[slug]` | Preparación detallada |
| `/nosotros` | Presentación breve de la marca |
| `/empresas` | Consultas de equipos, eventos y regalos mediante WhatsApp |
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

Las fotografías se sirven desde archivos JPEG y WebP comprimidos con nombres descriptivos. El logotipo oficial proporcionado se muestra en el encabezado y el pie desde una copia WebP transparente, sin reconstruir la marca. La composición de bebida cítrica se presenta únicamente como inspiración de preparación, con un encuadre que evita usar la marca ajena de la imagen como identidad de Le Thé.

## Pendiente de confirmación

- Nombres comerciales, composición, notas de cata y parámetros de infusión de cada té.
- Precios, disponibilidad, correo y ubicación, si se publicarán más adelante.
- Identidad y domicilio legal del responsable, correo de privacidad y política definitiva de conservación.
- ID de Google Analytics 4 y propiedad de Search Console, si el propietario desea activar medición e indexación supervisada.

El contenido de catálogo es una muestra editorial editable. No incluye carrito ni pagos.
