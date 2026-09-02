import type { CollectionBeforeOperationHook } from "payload";

/* Quita tildes, baja a minúsculas y deja sólo [a-z0-9-]. Lo usan tanto el slug de
   las notas como los nombres de archivo subidos. */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* Los archivos llegan con el nombre que tenían en la máquina de quien los sube —
   "WhatsApp Image 2026-08-19 at 09.04.50 (1).jpeg" y cosas así. Esos espacios y
   paréntesis terminan percent-encodeados en la URL pública, que queda frágil y
   ilegible para los buscadores. Este hook los normaliza al entrar, así nadie tiene
   que acordarse de renombrar antes de subir.

   Si el nombre colisiona con uno existente, Payload le agrega un sufijo solo. */
export const normalizeFilename: CollectionBeforeOperationHook = ({ req }) => {
  if (!req.file?.name) return;

  const original = req.file.name;
  const dot = original.lastIndexOf(".");
  const base = dot > 0 ? original.slice(0, dot) : original;
  const ext = dot > 0 ? original.slice(dot).toLowerCase() : "";

  /* Un nombre que fuera todo símbolos quedaría vacío tras slugificar. */
  req.file.name = `${slugify(base) || "archivo"}${ext}`;
};
