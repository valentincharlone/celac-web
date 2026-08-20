import { getTranslations } from "next-intl/server";
import { ExternalLink } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import DocumentTableSection from "@/components/repository/DocumentTableSection";

const EXTERNAL_REPOSITORY = "https://documentos.celac.cloud/";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "repositorio" });
  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function RepositorioPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "repositorio" });
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
      <DocumentTableSection />

      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-celac-green bg-celac-gray rounded-r-md px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <div>
              <h2 className="font-heading text-lg font-bold text-celac-navy mb-1">
                {t("externalTitle")}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                {t("externalBody")}
              </p>
            </div>
            <a
              href={EXTERNAL_REPOSITORY}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-celac-green text-white text-sm font-semibold hover:bg-celac-green-hover transition-colors"
            >
              {t("externalCta")}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
