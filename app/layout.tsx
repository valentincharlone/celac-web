import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/* Este layout NO importa `globals.css`: envuelve también a `app/(payload)`, y el
   preflight de Tailwind pisa los estilos del panel de Payload. El CSS del sitio se
   importa en las dos ramas que lo necesitan — `[locale]/layout.tsx` y `not-found.tsx`.

   El `<html>` vive en `app/[locale]/layout.tsx`, que es el único que conoce el
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
