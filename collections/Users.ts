import type { CollectionConfig } from "payload";

/* Los tres roles salen de cómo trabaja la organización, no de una jerarquía técnica:
   el periodista redacta pero no publica, el editor publica, y el admin además da de
   alta y de baja gente. Las reglas de acceso que hacen valer esa separación se
   escriben más adelante, cuando existan las colecciones de contenido; acá el rol
   sólo queda registrado. */
export const ROLES = ["periodista", "editor", "admin"] as const;

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Usuario", plural: "Usuarios" },
  auth: true,
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "role"],
  },
  access: {
    /* Por ahora alcanza con exigir sesión: quien entra al panel es alguien que
       ya fue dado de alta a mano. El control por rol llega junto con News y
       Documents, que es donde la distinción entre borrador y publicado importa. */
    admin: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nombre y apellido",
      /* Nominal, nunca una cuenta compartida tipo "prensa@": la presidencia pro
         tempore de la CELAC rota y hay que poder rastrear quién publicó qué. */
      admin: { description: "Nombre de la persona, no de un área o cargo." },
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "periodista",
      label: "Rol",
      options: [
        { label: "Periodista — redacta borradores", value: "periodista" },
        { label: "Editor — redacta y publica", value: "editor" },
        { label: "Administrador — además gestiona usuarios", value: "admin" },
      ],
    },
  ],
};
