# CELAC — Integración de Payload CMS

> Documento de traspaso y bitácora. Abrí Claude Code **parado en
> `E:\Usuario\Desktop\CELAC\celac-web`** (no en la carpeta padre `CELAC` — ver §9).
>
> **Estado al 2026-09-02**: pasos 1 y 2 completos; 3 y 4 completos **sólo para
> noticias**. Falta documentos/PDFs, revalidación y traducción asistida.
> Todo vive en la branch **`feat/payload-cms`**, en 5 commits temáticos.

## 0. ⚠️ LEER PRIMERO — regla del repo

El proyecto tiene un `CLAUDE.md` que importa `AGENTS.md`, y dice:

> **This is NOT the Next.js you know.** This version has breaking changes — APIs,
> conventions, and file structure may all differ from your training data. Read the
> relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed
> deprecation notices.

**No es decorativo.** Next 16 renombró `middleware.ts` a `proxy.ts` en este mismo repo.
Antes de escribir código de routing, config o data fetching, leer la guía en
`node_modules/next/dist/docs/01-app/...`.

Vale igual para Payload: verificar contra los tipos y converters reales de
`node_modules/@payloadcms/...`, no contra la memoria. Durante esta etapa eso evitó al
menos tres errores (nombres de nodo de Lexical, firma de `RootLayout`, hook de upload).

---

## 1. Qué es el proyecto

Sitio institucional de la CELAC. Reemplaza a `celac.cloud` (WordPress).
Producción: `celac-web.vercel.app`.

**Stack:**
- Next.js **16.2.9** (App Router) · React 19.2.4 · TypeScript strict
- Tailwind CSS v4 · next-intl 4.13.1 (`es`/`en`/`pt`, default `es`)
- framer-motion · lucide-react · react-leaflet · country-flag-icons
- **Payload CMS 3.88.0** + `@payloadcms/db-postgres` (Neon) + `richtext-lexical`
- Resend (formulario de contacto) · Deploy en Vercel

**Objetivo de la etapa:** que periodistas y referentes políticos carguen **noticias** y
**documentos (PDF)** sin tocar código.

**Dónde está parado:** las noticias ya se cargan y se publican desde `/admin`, y el
sitio las lee del CMS. Los documentos del repositorio siguen hardcodeados.

---

## 2. La decisión: Payload CMS 3

Evaluado contra Strapi, Sanity y un backoffice a medida. Gana porque corre dentro de la
misma app Next (un repo, un deploy, sin CORS), tiene localización nativa por campo, y
trae drafts, versiones y access control de fábrica.

**Compatibilidad verificada**: `@payloadcms/next@3.88.0` pide `next >=16.2.6 <17`; el
proyecto está en 16.2.9. ✅

> ⚠️ **`payload` y todos los `@payloadcms/*` deben estar en la MISMA versión exacta.**
> Están fijados sin caret en `package.json` a propósito: con `^`, un `npm install`
> futuro los desalinea y rompe el panel.

---

## 3. Mapa del repo

```
celac-web/
├── proxy.ts                    matcher excluye api|_next|_vercel|admin  (§5.1 ✅)
├── next.config.ts              withPayload(withNextIntl(cfg))
├── payload.config.ts           colecciones, locales es/en/pt, panel en español
├── tsconfig.json               alias @payload-config
├── package.json                "type": "module"  ⚠️ obligatorio, ver §5.9
├── collections/
│   ├── News.ts                 notas — localizada, drafts, slug autogenerado
│   ├── Documents.ts            PDFs — upload
│   ├── Media.ts                imágenes — upload
│   ├── Users.ts                roles periodista / editor / admin
│   └── slug.ts                 slugify() + normalizeFilename() (§5.11)
├── lib/
│   ├── cms/news.ts             ⭐ adaptador CMS → shape de los componentes
│   ├── news.ts                 fuente de la migración (ya no lo consume el sitio)
│   ├── documents.ts            45 PDFs  ← TODAVÍA HARDCODEADO
│   └── site.ts                 SITE_URL, localizedAlternates(), socialMetadata()
├── scripts/
│   ├── lexical.ts              constructor de bloques → árbol de Lexical
│   ├── migrate-news.ts         migra las 12 notas + imágenes
│   ├── reset-content.ts        vacía news/documents/media (destructivo)
│   ├── seed-test.ts            nota de prueba end-to-end
│   └── content/news-fixes.ts   cuerpos repuestos del original (§11)
├── app/
│   ├── (payload)/              layout, admin/[[...segments]], api/[...slug], graphql
│   ├── layout.tsx              ⚠️ NO importa globals.css — ver §5.10
│   ├── [locale]/…              páginas del sitio
│   └── api/contact/route.ts    Resend
└── public/
    ├── documentos/   45 PDFs   ← MIGRAR a blob storage
    └── images/       19 imágenes
```

**Variables de entorno** (`.env.local`, gitignored): `RESEND_API_KEY` (vacía),
`PAYLOAD_SECRET`, `DATABASE_URI`.

> En Vercel hay que cargar `PAYLOAD_SECRET` y `DATABASE_URI` a mano. Si `PAYLOAD_SECRET`
> cambia, se invalidan todas las sesiones abiertas del panel.

---

## 4. Modelo de datos — YA IMPLEMENTADO

**`News`** — `title`, `tag`, `excerpt`, `body` localizados. `slug` único e indexado, con
hook `beforeValidate` que lo deriva del título en español (**no** se localiza: si el slug
cambiara por idioma, un mismo contenido tendría tres URLs). `date` es fecha real y
**opcional** (hay notas de archivo sin fecha). `image` es upload a `media`. `signature`
sin localizar. `versions: { drafts: true, maxPerDoc: 20 }`.

**`Documents`** — colección de upload, sólo `application/pdf`. Payload completa solo
`filename`/`filesize`/`mimeType`/`url`, lo que **reemplaza los `size: "36.8 KB"` tipeados
a mano** en las 45 filas de `lib/documents.ts`. `title` **no** localizado (son documentos
oficiales en su idioma; traducir el título sugeriría que existe un PDF traducido).
`year` opcional.

**`Media`** — `alt` localizado y obligatorio, un solo `imageSize` (thumbnail 400×300)
porque el sitio usa `next/image`.

**`Users`** — `name`, `role` (`periodista` / `editor` / `admin`). Las reglas de acceso por
rol **todavía no están escritas** (paso 5): hoy sólo se exige sesión.

---

## 5. Fricciones — resueltas y nuevas

### ✅ 5.1 `proxy.ts` secuestraba `/admin` — RESUELTO
`admin` agregado al matcher; se sacó `studio` (rastro de cuando se evaluó Sanity).
Verificado: `/admin` responde sin redirigir, `/` sigue yendo a `/es`.

### ✅ 5.2 Los consumidores eran client components — RESUELTO (noticias)
`NewsListSection` y `home/NewsSection` reciben las notas por props; el fetch lo hacen las
páginas. Conservan su estado de filtros y la lógica de nota destacada.
**Pendiente el mismo refactor en `DocumentTableSection`.**

### ✅ 5.3 `locale: 'all'` — CONFIRMADO EMPÍRICAMENTE
Devuelve `{ es, en, pt }`, el tipo `L<T>` exacto que ya usaban los componentes. Es lo que
hizo que el paso 4 fuera barato. **Mantener ese shape.**

### 🔲 5.4 Los PDFs no pueden seguir en `public/` — PENDIENTE
Vercel no escribe en disco en runtime. Hoy los uploads locales caen en `uploads/`
(gitignored) y eso **sólo sirve para desarrollo**. Falta activar Vercel Blob e instalar
`@payloadcms/storage-vercel-blob`.

### ✅ 5.5 `date` era texto — RESUELTO
Ahora es fecha real, formateada por idioma con `Intl.DateTimeFormat` y **`timeZone: "UTC"`**
(sin eso la fecha se corre de mes). El JSON-LD de `NewsArticle` ya emite `datePublished`.

### 🔲 5.6 `images.remotePatterns` vacío — SIN EFECTO TODAVÍA
Payload sirve los uploads desde `/api/media/file/...`, mismo origen, así que `next/image`
no se queja. **Cuando las imágenes pasen a blob storage habrá que agregar el host.**

### ✅ 5.7 `generateStaticParams` y `sitemap.ts` — RESUELTO
Ambos hacen fetch al CMS. El sitemap da 54 URLs (12 notas × 3 + 18 de páginas).

### 🔲 5.8 Carpetas vacías
`app/api/revalidate/` sigue vacía — ahí va el webhook del paso 5.
`app/[locale]/eventos/` sigue vacía; no es parte de este trabajo.

### ⚠️ 5.9 `"type": "module"` es obligatorio
Sin eso, `payload generate:importmap` muere con `ERR_REQUIRE_ASYNC_MODULE`: el CLI carga
la config como CommonJS y `richtext-lexical` tiene top-level await. Fue seguro de agregar
porque las configs de la raíz ya eran `.mjs` y no hay ningún `.js`/`.cjs` propio.

### ⚠️ 5.10 `globals.css` en el root layout ROMPE el panel
`app/layout.tsx` envuelve también a `app/(payload)`, y el preflight de Tailwind v4 dejaba
el panel sin estilos (campos negros, labels ilegibles). El import se movió a
`app/[locale]/layout.tsx` y `app/not-found.tsx`, que son las dos ramas que lo necesitan
(el 404 global vive fuera de `[locale]` y tiene su propio `<html>`).
**Si alguien lo devuelve al root layout, rompe el panel otra vez.**

### ⚠️ 5.11 Los archivos subidos llegaban con nombres imposibles
`WhatsApp Image 2026-08-19 at 09.04.50 (1).jpeg` → URL percent-encodeada, frágil y mala
para SEO. El hook `normalizeFilename` (`beforeOperation` en Media y Documents) los
normaliza a `whatsapp-image-2026-08-19-at-09-04-50-1.jpeg`. Payload agrega sufijo solo si
hay colisión.

### ⚠️ 5.12 `RichText` mete su propio wrapper
Renderiza `<div class="payload-richtext">`, así que las utilidades Tailwind puestas en el
contenedor **no llegan** a los `<p>` (`space-y-6` y `[&>p:first-child]` no aplican). Los
estilos del cuerpo viven en `globals.css` bajo `.payload-richtext`, e incluyen h2/h3,
listas, links, `strong` y `blockquote`.

### ⚠️ 5.13 Los scripts no heredan `.env.local`
Eso lo hace Next, no `tsx`. Correrlos así:
```
node --env-file=.env.local --import tsx scripts/<x>.ts
```
Con `npx tsx` solo, muere con `missing secret key`.

### ⚠️ 5.14 Lexical tipa `format` como unión de literales
Sin `as const`, TypeScript lo ensancha a `string` y **el build falla** aunque
`tsc --noEmit` haya pasado antes de crear el archivo.

### ⚠️ 5.15 Timezone
El date picker del panel guarda **al mediodía UTC**, así que cargando a mano no hay
corrimiento. El riesgo está en los scripts: `new Date("2026-09-01")` es medianoche UTC y
en Argentina (UTC-3) se muestra como 31 de agosto. `migrate-news.ts` fija las 12:00.

### ⚠️ 5.16 No escribir contenido en español con heredoc
`cat > file <<'EOF'` **falla** ("unexpected EOF") con textos largos con acentos, comillas
tipográficas y `¡`/`¿`. Usar las herramientas de escritura de archivos.

---

## 6. Plan de implementación

**✅ Paso 1 — Instalar y levantar** *(2026-09-01)*
Payload 3.88.0 instalado, `payload.config.ts`, `app/(payload)/`, matcher arreglado,
colección `Users` con roles. Neon conectado (`sa-east-1`, connection string con `-pooler`).
Primer usuario admin creado. `/admin` carga.

**✅ Paso 2 — Colecciones** *(2026-09-01)*
`News`, `Documents`, `Media` creadas y registradas; panel forzado a español. Verificado
end-to-end con `seed-test.ts`: slug autogenerado, drafts, upload con thumbnail, y
`locale: 'all'` devolviendo `{es,en,pt}`.

**◐ Paso 3 — Migrar el contenido existente** *(noticias hechas 2026-09-02)*
- ✅ Las **12 notas** con sus imágenes, en los tres idiomas, publicadas
- ✅ Cuerpos repuestos desde el original (§11)
- 🔲 **Los 45 documentos y sus PDFs** — bloqueado por el blob storage (§5.4)

**◐ Paso 4 — Conectar el front** *(noticias hechas 2026-09-02)*
- ✅ `lib/cms/news.ts` con `locale: 'all'`; listado, home, detalle y sitemap leen del CMS
- ✅ Render de Lexical con `<RichText>` y estilos propios
- 🔲 **`/repositorio`** sigue leyendo `lib/documents.ts`

**🔲 Paso 5 — Publicación y roles**
`app/api/revalidate/route.ts` + hook `afterChange`. Access control: periodista crea
borradores, editor publica, admin gestiona usuarios. Hoy sólo se exige sesión.

**🔲 Paso 6 — Traducción asistida** (§7c)

---

## 7. Decisiones

**✅ a) Base de datos — Neon Postgres.** Free tier: 0.5 GB/proyecto, 100 CU-hours, 5 GB
egress, scale-to-zero a los 5 min. **Ojo: si se toca cualquier límite mensual, Neon
suspende el compute hasta el mes siguiente.** Como el front será estático con
revalidación, el visitante no toca la base; sólo el panel y los builds.

**🔲 b) Storage — Vercel Blob, falta activarlo.** Hobby ≈ 1 GB de storage y 10 GB de
transferencia (no está en la tabla oficial; confirmar en el dashboard). El proyecto pesa
46 MB en `public/` (26 MB de 45 PDFs + 21 MB de imágenes), entra holgado. **Las imágenes
actuales no hace falta moverlas**: sólo los PDFs y las imágenes nuevas.

**🔲 c) Traducción — EL PUNTO CRÍTICO, sin resolver.**
Ya se comprobó en vivo: una nota cargada sólo en español devuelve castellano al pedirla
con `?locale=en`, por `fallback: true`. Las dos alternativas son malas — con fallback el
sitio en inglés muestra español, sin fallback muestra vacío.
Propuesta: botón **"Generar EN/PT"** en el admin (custom field component) que llama a la
API de Claude y rellena los otros dos idiomas como borrador marcado sin revisar. Un editor
confirma antes de publicar. Cuesta centavos por nota.

**✅ d) Alcance** — noticias y documentos. El texto institucional sigue en
`messages/*.json`; si algún día quieren editarlo desde el panel, es un `global` de Payload
y es otra etapa.

**✅ e) Cuerpo de las notas — richText de Lexical**, no párrafos planos. El periodista
necesita negritas, links y subtítulos. Costo asumido: un componente de render y convertir
el contenido al formato Lexical.

**✅ f) Idioma del panel — español forzado** (`supportedLanguages: { es }`). Si se listan
más idiomas, Payload elige según el navegador de cada persona.

**✅ g) Tags del WordPress — NO se replican.** Los del original son diez y están mal
usados: `Noticias` duplica la categoría, una nota tiene los diez puestos y otra tiene uno
solo. Darían páginas `/tag/` casi vacías. **No confundir** con el campo `tag` de nuestra
colección, que es la etiqueta editorial de la card ("Energía", "Cooperación").

---

## 8. Gobernanza (planteárselo al cliente, no es técnico)

La presidencia pro tempore de la CELAC **rota**. Definir por escrito antes de entregar:

- Cuentas **nominales** por persona — nunca una compartida tipo `prensa@`
- Quién es el dueño administrativo del sitio cuando cambia la presidencia
- Quién da de alta y de baja periodistas

**Dominio/hosting:** aplicar el SOP de traspaso — el team de Vercel va a nombre del
cliente, no del freelance.

---

## 9. ⚠️ Advertencia de entorno: el repo huérfano de `E:\`

Hay un `git init` accidental en la **raíz del disco `E:\`**, apuntado a
`github.com/valentincharlone/consignataria.git`. Trackea 970 archivos, incluidos
`$RECYCLE.BIN` y `SteamLibrary`. **18 carpetas del Desktop lo heredan**, entre ellas la
carpeta padre `CELAC`.

**`celac-web` NO está afectado**: tiene su propio `.git`. Por eso hay que abrir la sesión
parado en `celac-web`.

```bash
git rev-parse --git-dir     # debe devolver ".git", NO "E:/.git"
```

---

## 10. Convenciones del proyecto

- **Consultar `node_modules/next/dist/docs/` antes de escribir código** (§0).
- Comentarios en **español**, explicando el *porqué*, no el *qué*.
- TypeScript **strict**. Tipos explícitos y exportados desde `lib/`.
- Alias: `@/*` → raíz, `@payload-config` → `payload.config.ts`.
- Los textos de UI van a `messages/*.json`, **nunca hardcodeados**.
- **Valentín commitea y pushea él.** Dejar los cambios en el working tree.
- Regenerar `payload-types.ts` (`npm run generate:types`) cada vez que cambien las
  colecciones. Va commiteado: el front lo importa.

---

## 11. Paridad de contenido con celac.cloud (auditoría 2026-09-02)

`celac.cloud/noticias/` tiene **9 notas únicas** (la paginación de 3 páginas se solapa).
Las 9 están en el sitio. Las 3 nuestras con fecha "Junio 2026" no existen en el original:
tienen cuerpo breve derivado de su excerpt, no son transcripción de una fuente.

**Los cuerpos estaban parafraseados y condensados.** Se repusieron 7 notas desde el
original, en `scripts/content/news-fixes.ts` (español transcripto; EN/PT traducción
nuestra):

| nota | qué se repuso |
|---|---|
| `celac-liga-de-estados-arabes` | cita en bloque, H2, lista numerada de 15, párrafo de Brasil, "¡Viva la CELAC!", firma Luca Galea Scannura |
| `comunidad-siglo-xxi` | 4 fragmentos; de 6 a 7 párrafos |
| `mision-celac` | la cita de Fidel Castro, en bloque |
| `iv-cumbre-celac-ue` | enumeración de valores completa |
| `celac-international-trading-consulting` | de 3 a 5 párrafos + firma Zeınab Kaalaf |
| `vision-celac-2035` | los 2 nombres de proyecto ahora son H3 |
| `programa-hambre-cero` | firma: "Presidente conjunto" |

**Imágenes.** El original tiene foto propia en sólo 3 notas; en 2 usa el logo estirado
como placeholder y en 4 no tiene nada. Se bajaron las 2 que faltaban
(`news-estados-arabes.jpg` 86 KB, `news-cumbre-celac-ue.jpg` 127 KB, optimizadas con
sharp a 1280 px). En las otras 6 se mantienen nuestras fotos: replicar el logo o el hueco
sería paridad formal empeorando el sitio, y el diseño exige imagen en la card y en el hero.

> Para descargar del WP hacen falta `User-Agent` de navegador + `Referer:
> https://celac.cloud/repositorio/` (o `/noticias/`), si no devuelve 403.

**Criterio del cliente (2026-08-31): en esta etapa se replica el contenido del sitio
actual tal cual, sin editarlo.** Se le señaló que parte del contenido presenta a "CELAC
International" como empresa con oficinas y misiones propias, y respondió que queda como
está. **No volver a plantearlo** mientras el objetivo sea la paridad.

---

## 12. Cómo re-hacer la migración desde cero

```bash
node --env-file=.env.local --import tsx scripts/reset-content.ts    # vacía el contenido
node --env-file=.env.local --import tsx scripts/migrate-news.ts     # 12 notas + imágenes
```

`reset-content.ts` borra news/documents/media y deja los usuarios. **Es destructivo y no
pide confirmación: nunca apuntarlo a producción.**

El orden editorial se reproduce creando de la más vieja a la más nueva y ordenando por
`-createdAt`; así una nota nueva del panel aparece primera sin que nadie reordene nada.

`lib/news.ts` **no se borra**: sigue siendo la fuente de imágenes, títulos, bajadas, tags,
fechas y categorías, y de los cuerpos de las 5 notas sin diferencias.
