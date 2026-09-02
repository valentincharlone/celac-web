/* Nota de prueba para verificar el modelo de datos end-to-end: campos localizados,
   richText de Lexical, upload de imagen y el hook que autogenera el slug.
   Se corre con `npx tsx scripts/seed-test.ts`. Es la base del script de migración
   real de las 12 notas y los 45 PDFs (paso 3). */
import path from "path";
import { fileURLToPath } from "url";
import { getPayload } from "payload";
import config from "../payload.config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/* Lexical guarda un árbol de nodos, no texto plano. Este helper arma el mínimo
   viable —párrafos sueltos— que es exactamente lo que hoy tiene `body: L<string[]>`
   en `lib/news.ts`. El editor del panel puede después agregarle negritas y links. */
function paragraphs(texts: string[]) {
  return {
    root: {
      type: "root",
      format: "" as const,
      indent: 0,
      version: 1,
      direction: "ltr" as const,
      children: texts.map((text) => ({
        type: "paragraph",
        format: "" as const,
        indent: 0,
        version: 1,
        direction: "ltr" as const,
        textFormat: 0,
        children: [
          { type: "text", text, format: 0, style: "", mode: "normal", detail: 0, version: 1 },
        ],
      })),
    },
  };
}

const payload = await getPayload({ config });

const image = await payload.create({
  collection: "media",
  filePath: path.resolve(dirname, "../public/images/news-cumbre-mexico-2021.jpg"),
  data: { alt: "Foto de prueba" },
  locale: "es",
});
for (const [locale, alt] of [["en", "Test photo"], ["pt", "Foto de teste"]] as const) {
  await payload.update({ collection: "media", id: image.id, data: { alt }, locale });
}

const post = await payload.create({
  collection: "news",
  locale: "es",
  data: {
    title: "Nota de prueba — borrar antes de publicar",
    category: "noticias",
    image: image.id,
    date: new Date("2026-09-01").toISOString(),
    tag: "Prueba",
    excerpt: "Bajada de prueba para verificar que el modelo funciona.",
    body: paragraphs(["Primer párrafo de prueba.", "Segundo párrafo de prueba."]),
    signature: "Equipo de desarrollo",
    _status: "draft",
  },
});
for (const [locale, tag, title] of [
  ["en", "Test", "Test post — delete before publishing"],
  ["pt", "Teste", "Nota de teste — apagar antes de publicar"],
] as const) {
  await payload.update({
    collection: "news",
    id: post.id,
    locale,
    data: {
      title,
      tag,
      excerpt: "Test excerpt.",
      body: paragraphs(["First test paragraph.", "Second test paragraph."]),
    },
  });
}

const check = await payload.findByID({ collection: "news", id: post.id, locale: "all", depth: 0 });
console.log(JSON.stringify({ id: check.id, slug: check.slug, status: check._status, title: check.title, tag: check.tag }, null, 2));
process.exit(0);
