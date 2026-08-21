import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { routing } from "@/i18n/routing";
import PageHero from "@/components/common/PageHero";
import { NEWS, getPost, type Locale } from "@/lib/news";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    NEWS.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title[locale as Locale],
    description: post.excerpt[locale as Locale],
  };
}

export default async function NoticiaPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: "noticias" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const related = NEWS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.tag[l]}
        title={post.title[l]}
        lead={post.excerpt[l]}
        backgroundImage={post.image}
        backgroundTone="photoBright"
        breadcrumbs={[
          { label: tNav("home"), href: `/${locale}` },
          { label: t("title"), href: `/${locale}/noticias` },
          { label: post.title[l] },
        ]}
      />

      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-16/9 rounded-sm overflow-hidden bg-celac-gray mb-10">
            <Image
              src={post.image}
              alt=""
              fill
              preload
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {post.date && (
            <p className="text-gray-400 text-sm mb-8 pb-8 border-b border-gray-200">
              {post.date[l]}
            </p>
          )}

          <div className="space-y-6">
            {post.body[l].map((paragraph, i) => (
              <p
                key={i}
                className={`text-gray-600 leading-relaxed ${
                  i === 0 ? "text-lg text-celac-navy/80" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {post.signature && (
            <p className="mt-10 pt-6 border-t border-gray-200 font-heading font-bold text-celac-navy">
              {post.signature}
            </p>
          )}

          <Link
            href={`/${locale}/noticias`}
            className="group mt-12 inline-flex items-center gap-2 text-celac-navy font-semibold text-sm border-b-2 border-celac-green pb-0.5 hover:gap-3 transition-all"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            {t("backToList")}
          </Link>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-celac-gray border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-celac-navy mb-10">
            {t("relatedTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/noticias/${item.slug}`}
                className="group"
              >
                <div className="relative aspect-16/10 rounded-sm overflow-hidden bg-white mb-4">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-celac-green text-xs font-semibold uppercase tracking-widest">
                  {item.tag[l]}
                </span>
                <h3 className="font-heading font-bold text-celac-navy leading-snug mt-2 group-hover:text-celac-green transition-colors">
                  {item.title[l]}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-gray-400 text-sm group-hover:text-celac-navy transition-colors">
                  {t("readMore")}
                  <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
