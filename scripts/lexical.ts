/* Constructor de árboles de Lexical para los scripts de migración.

   El contenido original de celac.cloud tiene subtítulos, listas numeradas y citas
   en bloque que el tipo viejo (`body: string[]`, párrafos planos) no podía
   representar — por eso se habían aplanado o perdido. Acá se los describe con
   bloques tipados y se los convierte al formato que guarda Payload. */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] };

const BASE = { format: "" as const, indent: 0, version: 1, direction: "ltr" as const };

/* Lexical guarda el formato del texto como bitmask; 1 es negrita. Se escribe con
   `**...**` en el contenido para no tener que armar los nodos a mano. */
function textNodes(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/)
    .filter((part) => part.length > 0)
    .map((part) => {
      const bold = part.startsWith("**") && part.endsWith("**");
      return {
        type: "text",
        text: bold ? part.slice(2, -2) : part,
        format: bold ? 1 : 0,
        style: "",
        mode: "normal",
        detail: 0,
        version: 1,
      };
    });
}

function listNode(items: string[], ordered: boolean) {
  return {
    ...BASE,
    type: "list",
    tag: ordered ? "ol" : "ul",
    listType: ordered ? "number" : "bullet",
    start: 1,
    children: items.map((item, i) => ({
      ...BASE,
      type: "listitem",
      value: i + 1,
      children: textNodes(item),
    })),
  };
}

function blockNode(block: Block) {
  switch (block.type) {
    case "h2":
    case "h3":
      return { ...BASE, type: "heading", tag: block.type, children: textNodes(block.text) };
    case "quote":
      return { ...BASE, type: "quote", children: textNodes(block.text) };
    case "ol":
      return listNode(block.items, true);
    case "ul":
      return listNode(block.items, false);
    default:
      return { ...BASE, type: "paragraph", textFormat: 0, children: textNodes(block.text) };
  }
}

export function richText(blocks: Block[]) {
  return {
    root: { ...BASE, type: "root", children: blocks.map(blockNode) },
  };
}

/** Atajo para el contenido que sigue siendo sólo párrafos. */
export function paragraphs(texts: string[]) {
  return richText(texts.map((text) => ({ type: "p" as const, text })));
}
