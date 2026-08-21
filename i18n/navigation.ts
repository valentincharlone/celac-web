import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/* Navegación consciente del locale: `usePathname` devuelve la ruta sin el
   prefijo de idioma y `<Link locale="en">` reescribe ese prefijo conservando
   la página actual. */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
