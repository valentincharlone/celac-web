import type { CollectionConfig } from "payload";
import { normalizeFilename } from "./slug";

/* Mismos valores que `DOC_CATEGORIES` en `lib/documents.ts`, y los mismos labels
   que `repositorio.cat_*` en `messages/es.json`: si divergieran, el filtro del
   repositorio dejaría de matchear. */
export const DOC_CATEGORIES = [
  { label: "Declaraciones", value: "declaraciones" },
  { label: "Planes de trabajo", value: "planesDeTrabajo" },
  { label: "CELAC – UE", value: "celacUe" },
  { label: "Mensajes presidenciales", value: "mensajesPresidenciales" },
  { label: "Documentos públicos", value: "documentosPublicos" },
];

export const Documents: CollectionConfig = {
  slug: "documents",
  labels: { singular: "Documento", plural: "Documentos" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "year", "category", "filesize"],
    group: "Contenido",
  },
  access: { read: () => true },

  /* Colección de tipo upload: Payload guarda el archivo y completa solo
     `filename`, `filesize`, `mimeType` y `url`. Eso reemplaza los campos `size`,
     `format` y `href` que hoy están tipeados a mano en las 45 filas de
     `lib/documents.ts` — y que por estar a mano pueden mentir. */
  hooks: { beforeOperation: [normalizeFilename] },

  upload: {
    staticDir: "uploads/documentos",
    mimeTypes: ["application/pdf"],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título",
      /* NO localizado a propósito: son documentos oficiales que existen en un solo
         idioma, el de su firma. Traducir el título sugeriría que hay una versión
         traducida del PDF, y no la hay. */
      admin: { description: "En el idioma del documento. No se traduce." },
    },
    {
      name: "year",
      type: "number",
      label: "Año",
      /* Opcional: hay documentos del repositorio cuyo año no consta en el archivo.
         En `lib/documents.ts` esos tienen `year: null`. */
      admin: {
        description: "Dejar vacío si el documento no indica año.",
        step: 1,
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      label: "Categoría",
      options: DOC_CATEGORIES,
    },
  ],
};
