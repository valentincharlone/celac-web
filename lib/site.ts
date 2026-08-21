import { routing } from "@/i18n/routing";

/**
 * Dominio público del sitio. Se usa para `metadataBase`, los canonical, los
 * hreflang y el sitemap, así que **tiene que ser el dominio definitivo**: si el
 * sitio se muda a celac.cloud hay que setear `NEXT_PUBLIC_SITE_URL` en Vercel,
 * o los buscadores van a seguir indexando la URL de preview.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://celac-web.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "CELAC";

/** Imagen de preview al compartir en redes. */
export const OG_IMAGE = "/images/celac-2011-scaled.jpg";

export type Locale = (typeof routing.locales)[number];

/**
 * Canonical + hreflang de una ruta. `path` va sin prefijo de idioma y sin
 * barra final ("" para la home, "/noticias" para el resto).
 */
export function localizedAlternates(locale: string, path = "") {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
  );
  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages: {
      ...languages,
      "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
    },
  };
}

/** Bloque de OpenGraph/Twitter compartido por todas las páginas. */
export function socialMetadata({
  locale,
  path = "",
  title,
  description,
  image = OG_IMAGE,
  type = "website",
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}) {
  const url = `${SITE_URL}/${locale}${path}`;
  return {
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale,
      /* Sin width/height: las fotos no son 1200x630 y declarar medidas
         falsas hace que los previews recorten mal. Los crawlers las miden. */
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}
