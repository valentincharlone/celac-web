import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { es } from "@payloadcms/translations/languages/es";
import sharp from "sharp";
import { Documents } from "./collections/Documents";
import { Media } from "./collections/Media";
import { News } from "./collections/News";
import { Users } from "./collections/Users";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug,
    /* Sin `src/` en este proyecto, la raíz del repo es la base desde donde Payload
       resuelve `app/(payload)/admin/importMap.js`. */
    importMap: { baseDir: path.resolve(dirname) },
  },

  collections: [News, Documents, Media, Users],

  editor: lexicalEditor(),

  /* Los mismos tres locales que ya usa next-intl, con los mismos códigos: si acá
     divergieran, el fetch del front tendría que traducir claves entre un sistema y
     otro. `fallback` hace que un campo sin traducir muestre el español en vez de
     quedar vacío — preferible a una nota en blanco mientras se revisa la
     traducción. */
  localization: {
    locales: [
      { code: "es", label: "Español" },
      { code: "en", label: "English" },
      { code: "pt", label: "Português" },
    ],
    defaultLocale: "es",
    fallback: true,
  },

  /* Idioma de la interfaz del panel, distinto del idioma del contenido. Se declara
     sólo español a propósito: quienes cargan las notas son periodistas de la CELAC,
     y si se listaran más idiomas Payload elegiría según el navegador de cada uno.
     El contenido se sigue cargando en es/en/pt (ver `localization` arriba). */
  i18n: {
    supportedLanguages: { es },
    fallbackLanguage: "es",
  },

  secret: process.env.PAYLOAD_SECRET || "",

  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || "" },
  }),

  /* Genera los tipos de las colecciones. El front los va a importar cuando
     reemplacemos los arrays de `lib/` por consultas al CMS. */
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },

  /* Payload usa sharp para las miniaturas y los tamaños derivados de las imágenes
     que se suban desde el panel. */
  sharp,
});
