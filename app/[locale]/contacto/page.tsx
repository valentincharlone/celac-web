import { getTranslations } from "next-intl/server";
import PageHero from "@/components/common/PageHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MapSection from "@/components/contact/MapSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contacto" });
  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function ContactoPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contacto" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        breadcrumbs={[
          { label: tNav("home"), href: `/${locale}` },
          { label: t("title") },
        ]}
        backgroundImage="/images/hero-slider1.png"
      />
      <ContactFormSection />
      <MapSection />
    </>
  );
}
