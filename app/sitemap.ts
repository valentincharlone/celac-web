import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import { getNewsPosts } from "@/lib/cms/news";

/* Rutas estáticas con su prioridad relativa. El slug de noticia se agrega
   aparte, más abajo. */
const ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/que-es-celac", priority: 0.8, changeFrequency: "monthly" },
  { path: "/paises-miembros", priority: 0.8, changeFrequency: "monthly" },
  { path: "/noticias", priority: 0.9, changeFrequency: "weekly" },
  { path: "/repositorio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.5, changeFrequency: "yearly" },
];

/** Cada URL declara sus tres idiomas como alternates, igual que los hreflang. */
function languageAlternates(path: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const pages = ROUTES.flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    }))
  );

  const news = (await getNewsPosts()).flatMap((post) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/noticias/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: languageAlternates(`/noticias/${post.slug}`) },
    }))
  );

  return [...pages, ...news];
}
