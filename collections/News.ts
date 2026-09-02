import type { CollectionConfig } from "payload";
import { slugify } from "./slug";

/* Mismos valores que `NEWS_CATEGORIES` en `lib/news.ts`; los labels salen de
   `noticias.filter_*` en `messages/es.json`. */
export const NEWS_CATEGORIES = [
  { label: "Noticias", value: "noticias" },
  { label: "Boletines", value: "boletines" },
];

/* La URL de la nota es la misma en los tres idiomas (`/es|en|pt/noticias/<slug>`),
   así que el slug se deriva del título en español y no se localiza: si cambiara por
   idioma, un mismo contenido tendría tres URLs distintas y habría que mapearlas
   para el selector de idioma. */

export const News: CollectionConfig = {
  slug: "news",
  labels: { singular: "Nota", plural: "Noticias" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "date", "_status"],
    group: "Contenido",
  },
  access: { read: () => true },

  /* Borradores: el periodista guarda sin publicar y el editor decide cuándo sale.
     `versions` además deja el historial, que en un sitio institucional sirve para
     saber qué decía una nota antes de una corrección. */
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
      label: "Título",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      label: "Slug (URL)",
      admin: {
        position: "sidebar",
        description: "Se completa solo con el título. Cambiarlo rompe los links ya publicados.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (typeof value === "string" && value.length > 0) return value;
            /* Según cómo entre la request, `title` puede llegar como string (un
               locale) o como objeto con los tres. */
            const title = data?.title;
            const source = typeof title === "string" ? title : title?.es;
            return source ? slugify(source) : value;
          },
        ],
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "noticias",
      label: "Sección",
      options: NEWS_CATEGORIES,
      admin: { position: "sidebar" },
    },
    {
      name: "date",
      type: "date",
      label: "Fecha",
      /* Fecha real, no el texto localizado ("Junio 2026") que hay hoy en
         `lib/news.ts`. Con esto el render la formatea por idioma con
         `Intl.DateTimeFormat` y el JSON-LD de NewsArticle puede llevar
         `datePublished`, que hoy se omite por no tener un dato confiable.

         Opcional porque hay notas de archivo cuya fecha no consta en la fuente:
         si fuera obligatoria, esas notas no se podrían migrar. */
      admin: {
        position: "sidebar",
        description: "Dejar vacío si la fecha no consta en la fuente original.",
        date: { pickerAppearance: "dayOnly", displayFormat: "d MMM yyyy" },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Imagen",
    },
    {
      name: "tag",
      type: "text",
      required: true,
      localized: true,
      label: "Etiqueta",
      admin: { description: "Una o dos palabras para la card. Ej: Energía, Salud, Cumbre." },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      localized: true,
      label: "Bajada",
      admin: { description: "El resumen que se ve en el listado y en las redes." },
    },
    {
      name: "body",
      type: "richText",
      required: true,
      localized: true,
      label: "Cuerpo",
    },
    {
      name: "signature",
      type: "text",
      label: "Firma",
      /* No localizado: el nombre de quien firma es el mismo en los tres idiomas. */
      admin: {
        position: "sidebar",
        description: "Quién firma la nota, si corresponde.",
      },
    },
  ],
};
