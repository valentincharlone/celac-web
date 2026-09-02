import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { localizedAlternates, socialMetadata } from "@/lib/site";
import PageHero from "@/components/common/PageHero";
import NewsListSection from "@/components/news/NewsListSection";
import { getNewsPosts } from "@/lib/cms/news";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "noticias" });
  const title = t("title");
  const description = t("lead");

  return {
    title,
    description,
    alternates: localizedAlternates(locale, "/noticias"),
    ...socialMetadata({ locale, path: "/noticias", title, description }),
  };
}

export default async function NoticiasPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "noticias" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const posts = await getNewsPosts();

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        backgroundImage="/images/bg-2.jpg"
        backgroundTone="photo"
        breadcrumbs={[
          { label: tNav("home"), href: `/${locale}` },
          { label: t("title") },
        ]}
      />
      <NewsListSection posts={posts} />
    </>
  );
}
