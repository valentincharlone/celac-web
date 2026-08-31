export const DOC_CATEGORIES = [
  "declaraciones",
  "planesDeTrabajo",
  "celacUe",
  "mensajesPresidenciales",
  "documentosPublicos",
] as const;

export type DocCategory = (typeof DOC_CATEGORIES)[number];

export type CelacDocument = {
  /** Título tal como figura en el repositorio original. */
  title: string;
  /** Año del documento; null cuando el archivo no lo indica. */
  year: number | null;
  category: DocCategory;
  size: string;
  format: "PDF";
  /** Ruta local al PDF dentro de `public/documentos`. */
  href: string;
};

export const DOCUMENTS: CelacDocument[] = [
  // — Declaraciones —
  { title: "Declaración de la Cumbre de la Unidad", year: 2010, category: "declaraciones", size: "36.8 KB", format: "PDF", href: "/documentos/declaracion-de-la-cumbre-de-la-unidad-2010.pdf" },
  { title: "Declaración de Caracas", year: 2011, category: "declaraciones", size: "856 KB", format: "PDF", href: "/documentos/declaracion-de-caracas-2011.pdf" },
  { title: "Declaración MMAAPLC Bolivia", year: 2013, category: "declaraciones", size: "274 KB", format: "PDF", href: "/documentos/declaracion-mmaaplc-bolivia-2013.pdf" },
  { title: "Declaración de Santiago — I Cumbre CELAC", year: 2013, category: "declaraciones", size: "263 KB", format: "PDF", href: "/documentos/declaracion-de-santiago-2013.pdf" },
  { title: "Declaración II MMAAPLC Ecuador", year: 2014, category: "declaraciones", size: "188 KB", format: "PDF", href: "/documentos/declaracion-ii-mmaaplc-ecuador-2014.pdf" },
  { title: "Declaración de La Habana", year: 2014, category: "declaraciones", size: "454 KB", format: "PDF", href: "/documentos/declaracion-de-la-habana-2014.pdf" },
  { title: "Declaración de Belén, Costa Rica", year: 2015, category: "declaraciones", size: "402 KB", format: "PDF", href: "/documentos/declaracion-de-belen-costa-rica-2015.pdf" },
  { title: "Declaración de Quito", year: 2016, category: "declaraciones", size: "460 KB", format: "PDF", href: "/documentos/declaracion-de-quito-2016.pdf" },
  { title: "Declaración de Punta Cana", year: 2017, category: "declaraciones", size: "267 KB", format: "PDF", href: "/documentos/declaracion-de-punta-cana-2017.pdf" },
  { title: "Declaración política de Punta Cana", year: 2017, category: "declaraciones", size: "255 KB", format: "PDF", href: "/documentos/declaracion-politica-de-punta-cana-2017.pdf" },
  { title: "Declaración ante la Comisión de Operaciones de Mantenimiento de la Paz — El Salvador", year: 2017, category: "declaraciones", size: "249 KB", format: "PDF", href: "/documentos/declaracion-ante-la-comision-de-operaciones-de-mantenimiento-de-la-paz-el-salvad-2017.pdf" },
  { title: "Statement of El Salvador — UN Peacekeeping Operations (EN)", year: 2017, category: "declaraciones", size: "298 KB", format: "PDF", href: "/documentos/statement-of-el-salvador-un-peacekeeping-operations-en-2017.pdf" },
  { title: "Declaración política de la Ciudad de México", year: 2021, category: "declaraciones", size: "554 KB", format: "PDF", href: "/documentos/declaracion-politica-de-la-ciudad-de-mexico-2021.pdf" },
  { title: "VII Cumbre CELAC — Declaración de Buenos Aires", year: 2023, category: "declaraciones", size: "171 KB", format: "PDF", href: "/documentos/vii-cumbre-celac-declaracion-de-buenos-aires-2023.pdf" },

  // — Planes de trabajo —
  { title: "Plan de acción de Caracas", year: 2012, category: "planesDeTrabajo", size: "1.01 MB", format: "PDF", href: "/documentos/plan-de-accion-de-caracas-2012.pdf" },
  { title: "Plan de acción de la CELAC", year: 2013, category: "planesDeTrabajo", size: "286 KB", format: "PDF", href: "/documentos/plan-de-accion-de-la-celac-2013.pdf" },
  { title: "Plan de acción CELAC (español)", year: 2014, category: "planesDeTrabajo", size: "233 KB", format: "PDF", href: "/documentos/plan-de-accion-celac-espanol-2014.pdf" },
  { title: "CELAC Action Plan (EN)", year: 2015, category: "planesDeTrabajo", size: "340 KB", format: "PDF", href: "/documentos/celac-action-plan-en-2015.pdf" },
  { title: "Plan de acción de la CELAC", year: 2015, category: "planesDeTrabajo", size: "102 KB", format: "PDF", href: "/documentos/plan-de-accion-de-la-celac-2015.pdf" },
  { title: "Plan de acción de la CELAC", year: 2016, category: "planesDeTrabajo", size: "325 KB", format: "PDF", href: "/documentos/plan-de-accion-de-la-celac-2016.pdf" },
  { title: "Plan de acción de la CELAC", year: 2017, category: "planesDeTrabajo", size: "327 KB", format: "PDF", href: "/documentos/plan-de-accion-de-la-celac-2017.pdf" },
  { title: "Plan de trabajo CELAC", year: 2020, category: "planesDeTrabajo", size: "106 KB", format: "PDF", href: "/documentos/plan-de-trabajo-celac-2020.pdf" },
  { title: "Propuesta de áreas de trabajo para la PPT 2020 de la CELAC", year: 2020, category: "planesDeTrabajo", size: "702 KB", format: "PDF", href: "/documentos/propuesta-de-areas-de-trabajo-para-la-ppt-2020-de-la-celac-2020.pdf" },
  { title: "Agenda CELAC", year: 2020, category: "planesDeTrabajo", size: "733 KB", format: "PDF", href: "/documentos/agenda-celac-2020.pdf" },
  { title: "Plan de trabajo CELAC — PPT México", year: 2021, category: "planesDeTrabajo", size: "336 KB", format: "PDF", href: "/documentos/plan-de-trabajo-celac-ppt-mexico-2021.pdf" },
  { title: "CELAC PPT México — actividades enero a septiembre", year: 2021, category: "planesDeTrabajo", size: "61.4 KB", format: "PDF", href: "/documentos/celac-ppt-mexico-actividades-enero-a-septiembre-2021.pdf" },
  { title: "Nota conceptual sobre la conclusión del proceso de reflexión — CELAC México", year: 2021, category: "planesDeTrabajo", size: "285 KB", format: "PDF", href: "/documentos/nota-conceptual-sobre-la-conclusion-del-proceso-de-reflexion-celac-mexico-2021.pdf" },
  { title: "Plan de acción China — CELAC", year: 2022, category: "planesDeTrabajo", size: "64.5 KB", format: "PDF", href: "/documentos/plan-de-accion-china-celac-2022.pdf" },
  { title: "Plan de trabajo CELAC (español)", year: 2022, category: "planesDeTrabajo", size: "452 KB", format: "PDF", href: "/documentos/plan-de-trabajo-celac-espanol-2022.pdf" },
  { title: "Plan SAN CELAC", year: 2025, category: "planesDeTrabajo", size: "1.11 MB", format: "PDF", href: "/documentos/plan-san-celac-2025.pdf" },
  { title: "Plan de Salud CEPAL — CELAC (ES)", year: null, category: "planesDeTrabajo", size: "4.99 MB", format: "PDF", href: "/documentos/plan-de-salud-cepal-celac-es.pdf" },
  { title: "Plan de Salud CEPAL — CELAC (EN)", year: null, category: "planesDeTrabajo", size: "4.84 MB", format: "PDF", href: "/documentos/plan-de-salud-cepal-celac-en.pdf" },
  { title: "Agenda IV Reunión de Mecanismos de Integración (ES)", year: null, category: "planesDeTrabajo", size: "240 KB", format: "PDF", href: "/documentos/agenda-iv-reunion-de-mecanismos-de-integracion-es.pdf" },

  // — CELAC – UE —
  { title: "Plan de acción CELAC–UE 2013-2015", year: 2013, category: "celacUe", size: "169 KB", format: "PDF", href: "/documentos/plan-de-accion-celac-ue-2013-2015-2013.pdf" },
  { title: "Declaración de Bruselas CELAC–UE", year: 2015, category: "celacUe", size: "140 KB", format: "PDF", href: "/documentos/declaracion-de-bruselas-celac-ue-2015.pdf" },
  { title: "Datos y cifras sobre las relaciones entre la UE y la CELAC — Cumbre de Bruselas", year: 2015, category: "celacUe", size: "1.67 MB", format: "PDF", href: "/documentos/eu-celac-cumbre-bruselas-datos-y-cifras-2015.pdf" },
  { title: "EU–CELAC Plan de acción", year: 2015, category: "celacUe", size: "146 KB", format: "PDF", href: "/documentos/eu-celac-plan-de-accion-2015.pdf" },
  { title: "Reunión ministerial UE–CELAC — Declaración de Santo Domingo (octubre)", year: 2016, category: "celacUe", size: "34.4 KB", format: "PDF", href: "/documentos/reunion-ministerial-ue-celac-declaracion-de-santo-domingo-octubre-2016.pdf" },
  { title: "Construyendo puentes — II Reunión UE–CELAC, Bruselas", year: 2017, category: "celacUe", size: "67.3 KB", format: "PDF", href: "/documentos/construyendo-puentes-ii-reunion-ue-celac-bruselas-2017.pdf" },
  { title: "Declaración final conjunta IV Cumbre CELAC–UE, Colombia", year: 2025, category: "celacUe", size: "176 KB", format: "PDF", href: "/documentos/declaracion-final-conjunta-iv-cumbre-celac-ue-colombia-2025.pdf" },
  { title: "Ayuda de memoria — III Reunión de mecanismos CELAC", year: null, category: "celacUe", size: "317 KB", format: "PDF", href: "/documentos/ayuda-de-memoria-iii-reunion-de-mecanismos-celac.pdf" },

  // — Mensajes presidenciales —
  { title: "Presidente Danilo Medina — IV Cumbre CELAC, Ecuador", year: 2016, category: "mensajesPresidenciales", size: "99.4 KB", format: "PDF", href: "/documentos/presidente-danilo-medina-iv-cumbre-celac-ecuador-2016.pdf" },
  { title: "Mensaje de Andrés Manuel López Obrador — VI Cumbre CELAC", year: 2021, category: "mensajesPresidenciales", size: "66.5 KB", format: "PDF", href: "/documentos/mensaje-de-andres-manuel-lopez-obrador-vi-cumbre-celac-2021.pdf" },
  { title: "Memorias de la CELAC", year: null, category: "mensajesPresidenciales", size: "1.31 MB", format: "PDF", href: "/documentos/memorias-de-la-celac.pdf" },

  // — Documentos públicos —
  { title: "Procedimientos para el funcionamiento de la CELAC", year: null, category: "documentosPublicos", size: "147 KB", format: "PDF", href: "/documentos/procedimientos-para-el-funcionamiento-de-la-celac.pdf" },
];

/** Años presentes en el repositorio, de más reciente a más antiguo. */
export const DOC_YEARS = [
  ...new Set(DOCUMENTS.map((d) => d.year).filter((y): y is number => y !== null)),
].sort((a, b) => b - a);
