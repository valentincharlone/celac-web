import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

/* `admin` queda fuera del matcher porque next-intl le antepone el locale a todo lo
   que intercepta: sin esta exclusión, `/admin` se redirige a `/es/admin` y el panel
   de Payload no carga nunca. Lo mismo vale para `api`, que cubre `/api/[...slug]`
   y `/api/graphql` de Payload además de nuestro `/api/contact`. */
export const config = {
  matcher: ["/((?!api|_next|_vercel|admin|.*\..*).*)"],
};
