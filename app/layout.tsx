import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/* El `<html>` vive en `app/[locale]/layout.tsx`, que es el único que conoce el
   idioma y puede escribir `lang`. Este layout sólo aporta la metadata global. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CELAC — Comunidad de Estados Latinoamericanos y Caribeños",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "La Comunidad de Estados Latinoamericanos y Caribeños reúne a 33 naciones en un espacio de diálogo, cooperación y desarrollo.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
