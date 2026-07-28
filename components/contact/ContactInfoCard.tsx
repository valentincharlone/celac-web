"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/components/ui/SocialLinks";

export default function ContactInfoCard() {
  const t = useTranslations("contacto");

  return (
    <div className="rounded-md border border-gray-200 bg-celac-gray p-8 h-fit">
      <p className="text-gray-600 leading-relaxed">{t("sidebarText")}</p>

      <div className="border-t border-gray-200 my-6" />

      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-celac-navy text-sm font-medium">
          <Mail size={15} className="shrink-0 text-celac-green" />
          <a href="mailto:info@celac.cloud" className="hover:text-celac-green transition-colors">
            info@celac.cloud
          </a>
        </li>
        <li className="flex items-center gap-2 text-celac-navy text-sm font-medium">
          <MapPin size={15} className="shrink-0 text-celac-green" />
          <span>{t("location")}</span>
        </li>
      </ul>

      <div className="border-t border-gray-200 my-6" />

      <div className="flex gap-3">
        {SOCIAL_LINKS.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:bg-celac-green hover:border-celac-green hover:text-white text-celac-navy flex items-center justify-center transition-colors"
          >
            <Icon width={14} height={14} />
          </a>
        ))}
      </div>
    </div>
  );
}
