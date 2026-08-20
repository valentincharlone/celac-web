import { getTranslations } from "next-intl/server";
import PageHero from "@/components/common/PageHero";
import NewsListSection from "@/components/news/NewsListSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "noticias" });
  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function NoticiasPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "noticias" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

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
      <NewsListSection />
    </>
  );
}
