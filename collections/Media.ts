import type { CollectionConfig } from "payload";
import { normalizeFilename } from "./slug";

/* Imágenes de las notas. Separada de `Documents` porque son cosas distintas: acá
   importa el `alt` (accesibilidad) y las miniaturas; allá importa el año, la
   categoría y que el archivo sea un PDF. */
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Imagen", plural: "Imágenes" },
  access: { read: () => true },
  hooks: { beforeOperation: [normalizeFilename] },

  upload: {
    staticDir: "uploads/media",
    mimeTypes: ["image/*"],
    /* Sólo la miniatura del panel: el sitio sirve las imágenes con `next/image`,
       que ya genera los tamaños que necesita cada breakpoint. */
    imageSizes: [{ name: "thumbnail", width: 400, height: 300, position: "centre" }],
    adminThumbnail: "thumbnail",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      localized: true,
      label: "Texto alternativo",
      admin: {
        description:
          "Qué se ve en la foto, para quien usa lector de pantalla. No repetir el título de la nota.",
      },
    },
  ],
};
