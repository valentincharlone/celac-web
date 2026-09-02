import { getPayload } from "payload";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import config from "@payload-config";
import type { Media } from "@/payload-types";
import type { Locale, NewsCategory } from "@/lib/news";

const LOCALES: Locale[] = ["es", "en", "pt"];

type L<T = string> = Record<Locale, T>;

/* Mismo shape que `NewsPost` de `lib/news.ts` salvo el cuerpo, que ahora es un
   árbol de Lexical en vez de un array de párrafos. Mantenerlo idéntico es
   deliberado: los componentes que lo consumen no tuvieron que cambiar su forma de
   leer los datos, sólo de dónde los reciben. */
export type CmsNewsPost = {
  slug: string;
  category: NewsCategory;
  image: string;
  tag: L;
  date?: L;
  /** La fecha cruda, para `datePublished` del structured data. */
  dateISO?: string;
  title: L;
  excerpt: L;
  body: L<SerializedEditorState>;
  signature?: string;
};

/* Las notas viejas tenían la fecha como texto ya escrito ("Junio 2026"). Ahora es
   una fecha real y el formato se deriva por idioma. `timeZone: "UTC"` no es un
   detalle: sin eso, una fecha guardada al mediodía UTC se corre de mes en algunas
   zonas horarias. Mes y año, sin día, porque las fuentes originales no lo indican. */
function formatDate(iso: string): L {
  const d = new Date(iso);
  return Object.fromEntries(
    LOCALES.map((locale) => {
      const formatted = new Intl.DateTimeFormat(locale, {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(d);
      return [locale, formatted.charAt(0).toUpperCase() + formatted.slice(1)];
    }),
  ) as L;
}

/* `locale: "all"` devuelve los campos localizados como `{ es, en, pt }`, que es
   exactamente el tipo `L<T>` que ya usaban los componentes. Sin esto habría que
   pedir la misma nota tres veces o rehacer el shape entero. */
function toPost(doc: Record<string, unknown>): CmsNewsPost {
  const image = doc.image as Media | null;
  const date = doc.date as string | null;

  return {
    slug: doc.slug as string,
    category: doc.category as NewsCategory,
    image: image?.url ?? "",
    tag: doc.tag as L,
    date: date ? formatDate(date) : undefined,
    dateISO: date ?? undefined,
    title: doc.title as L,
    excerpt: doc.excerpt as L,
    body: doc.body as L<SerializedEditorState>,
    signature: (doc.signature as string) ?? undefined,
  };
}

export async function getNewsPosts(): Promise<CmsNewsPost[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "news",
    locale: "all",
    depth: 1,
    limit: 100,
    pagination: false,
    /* Descendente por fecha de creación: reproduce el orden editorial del array
       original y hace que una nota nueva aparezca primera sin reordenar nada. */
    sort: "-createdAt",
  });
  return docs.map((doc) => toPost(doc as unknown as Record<string, unknown>));
}

export async function getNewsPost(slug: string): Promise<CmsNewsPost | null> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "news",
    locale: "all",
    depth: 1,
    limit: 1,
    where: { slug: { equals: slug } },
  });
  return docs[0] ? toPost(docs[0] as unknown as Record<string, unknown>) : null;
}
