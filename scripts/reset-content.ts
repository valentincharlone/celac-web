/* Vacía las colecciones de contenido — news, documents y media — dejando intactos
   los usuarios. Sirve para volver a correr la migración desde cero sin duplicar.
   Se corre con `node --env-file=.env.local --import tsx scripts/reset-content.ts`.

   Es destructivo y no pide confirmación: no apuntarlo nunca a la base de producción. */
import { getPayload } from "payload";
import config from "../payload.config";

const payload = await getPayload({ config });

for (const collection of ["news", "documents", "media"] as const) {
  const { docs } = await payload.find({ collection, limit: 1000, depth: 0, pagination: false });
  for (const doc of docs) {
    await payload.delete({ collection, id: doc.id });
  }
  console.log(`${collection}: ${docs.length} borrados`);
}

process.exit(0);
