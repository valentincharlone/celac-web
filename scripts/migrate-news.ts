/* Migra las 12 notas de `lib/news.ts` al CMS, con sus imágenes.
   Se corre con `node --env-file=.env.local --import tsx scripts/migrate-news.ts`.
   Correr antes `reset-content.ts` si ya hay contenido, o se duplica.

   Los cuerpos salen de `lib/news.ts` salvo las notas listadas en
   `content/news-fixes.ts`, que se repusieron desde el original de celac.cloud
   porque estaban parafraseadas o les faltaban fragmentos. */
import path from "path";
import { fileURLToPath } from "url";
import { getPayload } from "payload";
import config from "../payload.config";
import { NEWS, type Locale, type NewsPost } from "../lib/news";
import { paragraphs, richText } from "./lexical";
import { NEWS_FIXES } from "./content/news-fixes";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCALES: Locale[] = ["es", "en", "pt"];

const MESES: Record<string, number> = {
  enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
  julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
};

/* Las fechas viejas son texto localizado con mes y año ("Junio 2026"), sin día.
   Se guardan como el día 1 **a las 12:00 UTC**: a medianoche UTC, en Argentina
   (UTC-3) la fecha se muestra corrida al mes anterior. */
function parseDate(date: NewsPost["date"]): string | undefined {
  if (!date) return undefined;
  const m = date.es.trim().toLowerCase().match(/^([a-záéíóú]+)\s+(\d{4})$/);
  if (!m) {
    console.warn(`  ! fecha no reconocida: "${date.es}" — se migra sin fecha`);
    return undefined;
  }
  const month = MESES[m[1]];
  if (month === undefined) {
    console.warn(`  ! mes desconocido: "${date.es}" — se migra sin fecha`);
    return undefined;
  }
  return new Date(Date.UTC(Number(m[2]), month, 1, 12, 0, 0)).toISOString();
}

function bodyFor(post: NewsPost, locale: Locale) {
  const fixed = NEWS_FIXES[post.slug]?.body?.[locale];
  return fixed ? richText(fixed) : paragraphs(post.body[locale]);
}

const payload = await getPayload({ config });

/* Se crean de la más vieja a la más nueva para que el orden por fecha de creación
   descendente reproduzca el orden del array — que es el orden editorial actual, de
   la más nueva arriba. Así una nota nueva cargada desde el panel también aparece
   primera, sin que nadie tenga que reordenar nada. */
for (const post of [...NEWS].reverse()) {
  const fix = NEWS_FIXES[post.slug];

  const image = await payload.create({
    collection: "media",
    filePath: path.resolve(dirname, "..", "public", post.image.replace(/^\//, "")),
    /* El alt arranca con el título de la nota: es información real y localizada,
       pero conviene revisarlo con criterio de accesibilidad (el alt debería
       describir la foto, no repetir el titular). */
    data: { alt: post.title.es },
    locale: "es",
  });
  for (const locale of ["en", "pt"] as const) {
    await payload.update({ collection: "media", id: image.id, data: { alt: post.title[locale] }, locale });
  }

  const created = await payload.create({
    collection: "news",
    locale: "es",
    data: {
      title: post.title.es,
      slug: post.slug,
      category: post.category,
      image: image.id,
      date: parseDate(post.date),
      tag: post.tag.es,
      excerpt: post.excerpt.es,
      body: bodyFor(post, "es"),
      signature: fix?.signature ?? post.signature,
      _status: "published",
    },
  });

  for (const locale of ["en", "pt"] as const) {
    await payload.update({
      collection: "news",
      id: created.id,
      locale,
      data: {
        title: post.title[locale],
        tag: post.tag[locale],
        excerpt: post.excerpt[locale],
        body: bodyFor(post, locale),
        _status: "published",
      },
    });
  }

  console.log(`✓ ${post.slug}${fix ? "  (repuesta del original)" : ""}`);
}

const { totalDocs } = await payload.find({ collection: "news", limit: 0, depth: 0 });
console.log(`\n${totalDocs} notas migradas (de ${NEWS.length} en lib/news.ts), locales: ${LOCALES.join("/")}`);
console.log(`${Object.keys(NEWS_FIXES).length} con cuerpo o firma repuestos desde celac.cloud`);
process.exit(0);
