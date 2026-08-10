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
  /**
   * Los PDFs siguen alojados en el WordPress original. Cuando se migren a
   * este sitio, reemplazar por rutas propias (ej. /documentos/xxx.pdf).
   */
  href: string;
};

const legacy = (id: number, sig: string) =>
  `https://celac.cloud/?celac_nc_download=${id}&sig=${sig}`;

export const DOCUMENTS: CelacDocument[] = [
  // — Declaraciones —
  { title: "Declaración de la Cumbre de la Unidad", year: 2010, category: "declaraciones", size: "36.8 KB", format: "PDF", href: legacy(2285, "25333e78b5634f4c2a4133a56f585fc3") },
  { title: "Declaración de Caracas", year: 2011, category: "declaraciones", size: "856 KB", format: "PDF", href: legacy(2286, "52310596f1feacc6f645ddd98c8cf76f") },
  { title: "Declaración MMAAPLC Bolivia", year: 2013, category: "declaraciones", size: "274 KB", format: "PDF", href: legacy(2287, "365727f6692e1280ebb96fd10fcf8eaf") },
  { title: "Declaración de Santiago", year: 2013, category: "declaraciones", size: "263 KB", format: "PDF", href: legacy(2288, "fc6586179fcb949e68e70db8f3f93ae1") },
  { title: "Declaración II MMAAPLC Ecuador", year: 2014, category: "declaraciones", size: "188 KB", format: "PDF", href: legacy(2289, "30cf2b38ed4369e3dde3143c330234ae") },
  { title: "Declaración de La Habana", year: 2014, category: "declaraciones", size: "454 KB", format: "PDF", href: legacy(2290, "bc1b5c88b24aa5822f6044b09c499394") },
  { title: "Declaración de Belén, Costa Rica", year: 2015, category: "declaraciones", size: "402 KB", format: "PDF", href: legacy(2291, "57c299f1de6cb1a9e2475035549d48c6") },
  { title: "Declaración de Quito", year: 2016, category: "declaraciones", size: "460 KB", format: "PDF", href: legacy(2292, "f3290b8e24894ceee0624af247e2f313") },
  { title: "Declaración de Punta Cana", year: 2017, category: "declaraciones", size: "267 KB", format: "PDF", href: legacy(2293, "ac1a2306e0a34dfb9d2be58f6ccb1400") },
  { title: "Declaración política de Punta Cana", year: 2017, category: "declaraciones", size: "255 KB", format: "PDF", href: legacy(2401, "0f1bdbab15320771eeb2259e12ce78a1") },
  { title: "Declaración ante la Comisión de Operaciones de Mantenimiento de la Paz — El Salvador", year: 2017, category: "declaraciones", size: "249 KB", format: "PDF", href: legacy(2294, "c96ef78799e79f521de8593c98aa29dc") },
  { title: "Statement of El Salvador — UN Peacekeeping Operations (EN)", year: 2017, category: "declaraciones", size: "298 KB", format: "PDF", href: legacy(2295, "4a56f029eb2181c583b91700754a4e6e") },
  { title: "Declaración política de la Ciudad de México", year: 2021, category: "declaraciones", size: "554 KB", format: "PDF", href: legacy(2297, "5c02fecba6d731e9ceaa2001d05c1c7f") },
  { title: "VII Cumbre CELAC — Declaración de Buenos Aires", year: 2023, category: "declaraciones", size: "171 KB", format: "PDF", href: legacy(2298, "68164ad11678c2ba4a9bcaeca3c662ed") },

  // — Planes de trabajo —
  { title: "Plan de acción de Caracas", year: 2012, category: "planesDeTrabajo", size: "1.01 MB", format: "PDF", href: legacy(2302, "81f968048c2695273d4ee08c7fc8462d") },
  { title: "Plan de acción de la CELAC", year: 2013, category: "planesDeTrabajo", size: "286 KB", format: "PDF", href: legacy(2303, "ae24257e19b4cdcd84c503a1072245d3") },
  { title: "Plan de acción CELAC (español)", year: 2014, category: "planesDeTrabajo", size: "233 KB", format: "PDF", href: legacy(2304, "67b104117fa05b182e43fbb9e24ddc3b") },
  { title: "CELAC Action Plan (EN)", year: 2015, category: "planesDeTrabajo", size: "340 KB", format: "PDF", href: legacy(2305, "28fc198809cc46992562ee3b92d6b16f") },
  { title: "Plan de acción de la CELAC", year: 2015, category: "planesDeTrabajo", size: "102 KB", format: "PDF", href: legacy(2306, "39def9e5db17a1cf29c6269718425440") },
  { title: "Plan de acción de la CELAC", year: 2017, category: "planesDeTrabajo", size: "327 KB", format: "PDF", href: legacy(2308, "2052c4f394b6090c9062ad5d9f6a46f3") },
  { title: "Plan de trabajo CELAC", year: 2020, category: "planesDeTrabajo", size: "106 KB", format: "PDF", href: legacy(2309, "88e22ccc85ea571cbbc51fc2b3a1f479") },
  { title: "Propuesta de áreas de trabajo para la PPT 2020 de la CELAC", year: 2020, category: "planesDeTrabajo", size: "702 KB", format: "PDF", href: legacy(2310, "95aae06e746e1774e1ac54137d323f25") },
  { title: "Plan de trabajo CELAC — PPT México", year: 2021, category: "planesDeTrabajo", size: "336 KB", format: "PDF", href: legacy(2312, "3a3521e774fd294f9647808ae9184789") },
  { title: "CELAC PPT México — actividades enero a septiembre", year: 2021, category: "planesDeTrabajo", size: "61.4 KB", format: "PDF", href: legacy(2313, "db91d2967f09865c89581205964f8796") },
  { title: "Nota conceptual sobre la conclusión del proceso de reflexión — CELAC México", year: 2021, category: "planesDeTrabajo", size: "285 KB", format: "PDF", href: legacy(2314, "0b4a29688d94521aa9575b5e114eb857") },
  { title: "Plan de acción China — CELAC", year: 2022, category: "planesDeTrabajo", size: "64.5 KB", format: "PDF", href: legacy(2315, "625ca5dcae99b8e2e86df44f3880e01b") },
  { title: "Plan de trabajo CELAC (español)", year: 2022, category: "planesDeTrabajo", size: "452 KB", format: "PDF", href: legacy(2316, "7b148bf1ec6f1fa3263d53eb6448445b") },
  { title: "Plan SAN CELAC", year: 2025, category: "planesDeTrabajo", size: "1.11 MB", format: "PDF", href: legacy(2317, "7832d6d3905ab252389bf179ecd45023") },
  { title: "Plan de Salud CEPAL — CELAC (ES)", year: null, category: "planesDeTrabajo", size: "4.99 MB", format: "PDF", href: legacy(2319, "db5e77fa3ee42b8d481e7b98aa71ef64") },
  { title: "Plan de Salud CEPAL — CELAC (EN)", year: null, category: "planesDeTrabajo", size: "4.84 MB", format: "PDF", href: legacy(2318, "d8d64eb044035b5870fb313c3c12bdef") },
  { title: "Agenda IV Reunión de Mecanismos de Integración (ES)", year: null, category: "planesDeTrabajo", size: "240 KB", format: "PDF", href: legacy(2320, "18cf88e1949a5cb2ce91d587f2983789") },

  // — CELAC – UE —
  { title: "Declaración de Santiago de Chile", year: 2013, category: "celacUe", size: "263 KB", format: "PDF", href: legacy(2277, "416210fc91a2f79155115790e048e7da") },
  { title: "Plan de acción CELAC–UE 2013-2015", year: 2013, category: "celacUe", size: "169 KB", format: "PDF", href: legacy(2276, "eec82ac41165882ef0e3d3848ba73e68") },
  { title: "Declaración de Bruselas CELAC–UE", year: 2015, category: "celacUe", size: "140 KB", format: "PDF", href: legacy(2278, "c587efbc999c43ab3ff5f4c21fd6cb56") },
  { title: "EU–CELAC Plan de acción", year: 2015, category: "celacUe", size: "146 KB", format: "PDF", href: legacy(2280, "f39a871647ec00e268151cd0eb98702a") },
  { title: "Reunión ministerial UE–CELAC — Declaración de Santo Domingo (octubre)", year: 2016, category: "celacUe", size: "34.4 KB", format: "PDF", href: legacy(2281, "1336afe4a15a404e2943c57ada14b0e1") },
  { title: "Construyendo puentes — II Reunión UE–CELAC, Bruselas", year: 2017, category: "celacUe", size: "67.3 KB", format: "PDF", href: legacy(2282, "4db8392ec63131a21b8c8f58ac251bf3") },
  { title: "Declaración final conjunta IV Cumbre CELAC–UE, Colombia", year: 2025, category: "celacUe", size: "176 KB", format: "PDF", href: legacy(2283, "4686d012d9a28d9d1c97e4eeecb04a3e") },
  { title: "Ayuda de memoria — III Reunión de mecanismos CELAC", year: null, category: "celacUe", size: "317 KB", format: "PDF", href: legacy(2284, "175884ae0443544563165c53053c2466") },

  // — Mensajes presidenciales —
  { title: "Presidente Danilo Medina — IV Cumbre CELAC, Ecuador", year: 2016, category: "mensajesPresidenciales", size: "99.4 KB", format: "PDF", href: legacy(2301, "a0999c67ec1dee43b174925a63adbda6") },
  { title: "Mensaje de Andrés Manuel López Obrador — VI Cumbre CELAC", year: 2021, category: "mensajesPresidenciales", size: "66.5 KB", format: "PDF", href: legacy(2300, "c7e8e47147f8d50db337be8c17ab9b01") },
  { title: "Memorias de la CELAC", year: null, category: "mensajesPresidenciales", size: "1.31 MB", format: "PDF", href: legacy(2299, "63435afae6b6b797de4bbe14a1f66121") },

  // — Documentos públicos —
  { title: "Procedimientos para el funcionamiento de la CELAC", year: null, category: "documentosPublicos", size: "147 KB", format: "PDF", href: legacy(2321, "bcd1319cb2364f485db1de59b75cda7e") },
];

/** Años presentes en el repositorio, de más reciente a más antiguo. */
export const DOC_YEARS = [
  ...new Set(DOCUMENTS.map((d) => d.year).filter((y): y is number => y !== null)),
].sort((a, b) => b - a);
