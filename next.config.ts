import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    qualities: [75, 90],
  },
};

/* `withPayload` va por fuera: necesita ver la config ya procesada por next-intl
   para agregarle sus propias externals y transpilaciones. */
export default withPayload(withNextIntl(nextConfig));
