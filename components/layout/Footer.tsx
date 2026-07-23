import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Mail, MapPin } from "lucide-react";

/* lucide-react ya no incluye logos de marca (Facebook/Instagram/X) —
   se recrean acá como trazos simples en el mismo estilo del resto de íconos. */
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "X (Twitter)", Icon: XIcon, href: "#" },
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
] as const;

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-celac-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-celac-white.png"
                alt="CELAC"
                width={140}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-white">
              {t("footer.navTitle")}
            </h3>
            <ul className="space-y-2">
              {[
                { label: t("nav.whatIsCelac"), href: "/que-es-celac" },
                { label: t("nav.countries"), href: "/paises-miembros" },
                { label: t("nav.news"), href: "/noticias" },
                { label: t("nav.events"), href: "/eventos" },
                { label: t("nav.repository"), href: "/repositorio" },
                { label: t("nav.contact"), href: "/contacto" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={`/${locale}${href}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-white">
              {t("footer.contactTitle")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={14} className="shrink-0" />
                <a
                  href="mailto:info@celac.cloud"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.email")}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} className="shrink-0" />
                <span>{t("footer.address")}</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-celac-green flex items-center justify-center transition-colors"
                >
                  <Icon width={14} height={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-xs">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
