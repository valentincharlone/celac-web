export type Locale = "es" | "en" | "pt";

type L<T = string> = Record<Locale, T>;

export const NEWS_CATEGORIES = ["noticias", "boletines"] as const;
export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export type NewsPost = {
  slug: string;
  category: NewsCategory;
  image: string;
  /** Etiqueta corta de la card. */
  tag: L;
  /** Se omite en las notas de archivo cuya fecha no consta en la fuente. */
  date?: L;
  title: L;
  excerpt: L;
  body: L<string[]>;
  /** Firma al pie, cuando el texto original la lleva. */
  signature?: string;
};

export const NEWS: NewsPost[] = [
  {
    slug: "viii-reunion-ministerial-energia",
    category: "noticias",
    image: "/images/lqh-grupal.jpg",
    tag: { es: "Energía", en: "Energy", pt: "Energia" },
    date: { es: "Junio 2026", en: "June 2026", pt: "Junho de 2026" },
    title: {
      es: "VIII Reunión Ministerial de Energía de la CELAC",
      en: "8th CELAC Ministerial Meeting on Energy",
      pt: "VIII Reunião Ministerial de Energia da CELAC",
    },
    excerpt: {
      es: "Delegaciones de los 33 países miembros se reunieron en Montevideo para avanzar hacia un tratado regional de integración energética.",
      en: "Delegations from all 33 member states met in Montevideo to advance towards a regional energy integration treaty.",
      pt: "Delegações dos 33 países membros reuniram-se em Montevidéu para avançar rumo a um tratado regional de integração energética.",
    },
    body: {
      es: [
        "Delegaciones de los 33 países miembros se reunieron en Montevideo para avanzar hacia un tratado regional de integración energética.",
        "El encuentro reunió a las carteras de energía de los Estados miembros en torno a la interconexión de redes, la transición hacia fuentes renovables y el acceso equitativo a la energía en toda América Latina y el Caribe.",
      ],
      en: [
        "Delegations from all 33 member states met in Montevideo to advance towards a regional energy integration treaty.",
        "The meeting brought together the energy ministries of the member states around grid interconnection, the transition to renewable sources and equitable access to energy across Latin America and the Caribbean.",
      ],
      pt: [
        "Delegações dos 33 países membros reuniram-se em Montevidéu para avançar rumo a um tratado regional de integração energética.",
        "O encontro reuniu as pastas de energia dos Estados membros em torno da interconexão de redes, da transição para fontes renováveis e do acesso equitativo à energia em toda a América Latina e o Caribe.",
      ],
    },
  },
  {
    slug: "dialogo-regional-union-europea-olacde",
    category: "noticias",
    image: "/images/news-voceria.jpg",
    tag: { es: "Cooperación", en: "Cooperation", pt: "Cooperação" },
    date: { es: "Junio 2026", en: "June 2026", pt: "Junho de 2026" },
    title: {
      es: "Diálogo Regional con la Unión Europea y OLACDE",
      en: "Regional Dialogue with the European Union and OLACDE",
      pt: "Diálogo Regional com a União Europeia e a OLACDE",
    },
    excerpt: {
      es: "Representantes de América Latina, el Caribe y Europa profundizaron una agenda conjunta de cooperación energética e innovación.",
      en: "Representatives from Latin America, the Caribbean and Europe deepened a joint agenda on energy cooperation and innovation.",
      pt: "Representantes da América Latina, do Caribe e da Europa aprofundaram uma agenda conjunta de cooperação energética e inovação.",
    },
    body: {
      es: [
        "Representantes de América Latina, el Caribe y Europa profundizaron una agenda conjunta de cooperación energética e innovación.",
        "El diálogo birregional dio continuidad al trabajo sostenido entre la CELAC y la Unión Europea, con foco en el intercambio técnico y en el financiamiento de proyectos de transición energética.",
      ],
      en: [
        "Representatives from Latin America, the Caribbean and Europe deepened a joint agenda on energy cooperation and innovation.",
        "The bi-regional dialogue continued the sustained work between CELAC and the European Union, focusing on technical exchange and on financing energy transition projects.",
      ],
      pt: [
        "Representantes da América Latina, do Caribe e da Europa aprofundaram uma agenda conjunta de cooperação energética e inovação.",
        "O diálogo bi-regional deu continuidade ao trabalho sustentado entre a CELAC e a União Europeia, com foco no intercâmbio técnico e no financiamento de projetos de transição energética.",
      ],
    },
  },
  {
    slug: "encuentro-delegaciones-torre-antel",
    category: "noticias",
    image: "/images/news-networking.jpg",
    tag: { es: "Integración", en: "Integration", pt: "Integração" },
    date: { es: "Junio 2026", en: "June 2026", pt: "Junho de 2026" },
    title: {
      es: "Encuentro de delegaciones en Torre Antel",
      en: "Meeting of delegations at Torre Antel",
      pt: "Encontro de delegações na Torre Antel",
    },
    excerpt: {
      es: "Delegados de los Estados miembros compartieron avances sobre las líneas de acción prioritarias de la comunidad.",
      en: "Delegates from the member states shared progress on the community's priority lines of action.",
      pt: "Delegados dos Estados membros compartilharam avanços sobre as linhas de ação prioritárias da comunidade.",
    },
    body: {
      es: [
        "Delegados de los Estados miembros compartieron avances sobre las líneas de acción prioritarias de la comunidad.",
        "La jornada permitió coordinar los trabajos técnicos previos a las próximas reuniones de coordinadores nacionales.",
      ],
      en: [
        "Delegates from the member states shared progress on the community's priority lines of action.",
        "The session made it possible to coordinate the technical work ahead of the upcoming meetings of national coordinators.",
      ],
      pt: [
        "Delegados dos Estados membros compartilharam avanços sobre as linhas de ação prioritárias da comunidade.",
        "A jornada permitiu coordenar os trabalhos técnicos prévios às próximas reuniões de coordenadores nacionais.",
      ],
    },
  },
  {
    slug: "iv-cumbre-celac-ue",
    category: "boletines",
    image: "/images/lqh-banderas.jpg",
    tag: { es: "CELAC – UE", en: "CELAC – EU", pt: "CELAC – UE" },
    date: { es: "Noviembre 2025", en: "November 2025", pt: "Novembro de 2025" },
    title: {
      es: "La IV Cumbre CELAC–UE",
      en: "The 4th CELAC–EU Summit",
      pt: "A IV Cúpula CELAC–UE",
    },
    excerpt: {
      es: "Ambas regiones reafirmaron una relación birregional basada en valores e intereses compartidos y adoptaron una declaración conjunta.",
      en: "Both regions reaffirmed a bi-regional relationship based on shared values and interests and adopted a joint declaration.",
      pt: "Ambas as regiões reafirmaram uma relação bi-regional baseada em valores e interesses compartilhados e adotaram uma declaração conjunta.",
    },
    body: {
      es: [
        "El encuentro fue conducido conjuntamente por António Costa, presidente del Consejo Europeo, y Gustavo Petro, presidente de Colombia y actual presidente pro tempore de la CELAC. Los representantes de ambas regiones subrayaron la importancia estratégica de una relación birregional basada en valores e intereses compartidos, y en sociedades resilientes, inclusivas y democráticas.",
        "Durante la reunión se abordaron múltiples aspectos: multilateralismo, comercio e inversión, transiciones ecológica y digital, inclusión social, cooperación en seguridad ciudadana, justicia y combate a la delincuencia organizada transnacional. La sesión concluyó con la adopción de una declaración conjunta.",
        "La Fundación EU–LAC contribuyó al proceso mediante una estrategia orientada a coordinar agendas, ofrecer aportes concretos y facilitar el diálogo entre los actores involucrados.",
        "Durante el año, la organización ejecutó una ruta de trabajo amplia con veinte actividades distribuidas en cinco áreas temáticas: comercio, inversiones y economías equitativas; democracia, derechos humanos y estado de derecho; equidad de género; clima, ambiente y financiamiento; y seguridad y economías ilícitas.",
      ],
      en: [
        "The meeting was jointly chaired by António Costa, President of the European Council, and Gustavo Petro, President of Colombia and current president pro tempore of CELAC. Representatives of both regions underlined the strategic importance of a bi-regional relationship based on shared values and interests, and on resilient, inclusive and democratic societies.",
        "The meeting addressed a wide range of issues: multilateralism, trade and investment, the green and digital transitions, social inclusion, cooperation on citizen security, justice and the fight against transnational organised crime. The session concluded with the adoption of a joint declaration.",
        "The EU–LAC Foundation contributed to the process through a strategy aimed at coordinating agendas, offering concrete input and facilitating dialogue among the actors involved.",
        "Over the year, the organisation carried out a broad work programme with twenty activities across five thematic areas: trade, investment and equitable economies; democracy, human rights and the rule of law; gender equality; climate, environment and financing; and security and illicit economies.",
      ],
      pt: [
        "O encontro foi conduzido conjuntamente por António Costa, presidente do Conselho Europeu, e Gustavo Petro, presidente da Colômbia e atual presidente pro tempore da CELAC. Os representantes de ambas as regiões destacaram a importância estratégica de uma relação bi-regional baseada em valores e interesses compartilhados, e em sociedades resilientes, inclusivas e democráticas.",
        "Durante a reunião foram abordados múltiplos aspectos: multilateralismo, comércio e investimento, transições ecológica e digital, inclusão social, cooperação em segurança cidadã, justiça e combate à criminalidade organizada transnacional. A sessão foi concluída com a adoção de uma declaração conjunta.",
        "A Fundação EU–LAC contribuiu para o processo por meio de uma estratégia orientada a coordenar agendas, oferecer contribuições concretas e facilitar o diálogo entre os atores envolvidos.",
        "Ao longo do ano, a organização executou um amplo programa de trabalho com vinte atividades distribuídas em cinco áreas temáticas: comércio, investimentos e economias equitativas; democracia, direitos humanos e estado de direito; equidade de gênero; clima, ambiente e financiamento; e segurança e economias ilícitas.",
      ],
    },
  },
  {
    slug: "celac-liga-de-estados-arabes",
    category: "boletines",
    image: "/images/hero-slider1.png",
    tag: { es: "Vocería", en: "Advocacy", pt: "Vocalização" },
    title: {
      es: "Próxima reunión: CELAC y Liga de Estados Árabes",
      en: "Upcoming meeting: CELAC and the League of Arab States",
      pt: "Próxima reunião: CELAC e Liga dos Estados Árabes",
    },
    excerpt: {
      es: "La decisión se adoptó por consenso durante la XXII Reunión de Ministros de Relaciones Exteriores realizada en Buenos Aires.",
      en: "The decision was adopted by consensus during the 22nd Meeting of Ministers of Foreign Affairs held in Buenos Aires.",
      pt: "A decisão foi adotada por consenso durante a XXII Reunião de Ministros das Relações Exteriores realizada em Buenos Aires.",
    },
    body: {
      es: [
        "El canciller mexicano Marcelo Ebrard comunicó que la decisión fue adoptada por consenso durante la XXII Reunión de Ministros de Relaciones Exteriores realizada en Buenos Aires. Siendo México presidente de la CELAC en 2021, transfirió la presidencia al canciller argentino Santiago Cafiero. Durante su discurso, el funcionario argentino expresó que su nación ejercería esta responsabilidad con orgullo y compromiso, fomentando la participación y el consenso entre sus miembros.",
        "El ministro argentino sostuvo que la CELAC es la mejor herramienta para la integración de América Latina y el Caribe, y enfatizó su objetivo de superar las injusticias sociales.",
        "La agenda de trabajo propuesta por Argentina aborda desafíos cruciales de la región: cambio climático, emergencias epidemiológicas, gestión de desastres, educación, anticorrupción, seguridad alimentaria, conectividad, objetivos de desarrollo sostenible, equidad de género y fortalecimiento institucional. También promueve el diálogo con la Unión Europea, China, Rusia e India.",
        "Santiago Cafiero presentó quince áreas de acción para la presidencia pro tempore argentina: recuperación económica pos-COVID, cooperación regional en salud, cooperación espacial, ciencia y tecnología, gestión de desastres, educación, fortalecimiento institucional, seguridad alimentaria, diálogo con socios externos, integración de infraestructura, cooperación ambiental, desarrollo operacional, equidad de género, transformación digital y cultura.",
        "La CELAC constituye la tercera economía mundial, con un PIB aproximado de 7 billones de dólares, siendo el mayor productor de alimentos y el tercer productor de electricidad del mundo.",
      ],
      en: [
        "Mexican Foreign Minister Marcelo Ebrard announced that the decision was adopted by consensus during the 22nd Meeting of Ministers of Foreign Affairs held in Buenos Aires. With Mexico holding the CELAC presidency in 2021, he handed it over to Argentine Foreign Minister Santiago Cafiero. In his address, the Argentine official said his country would carry out this responsibility with pride and commitment, fostering participation and consensus among its members.",
        "The Argentine minister argued that CELAC is the best instrument for the integration of Latin America and the Caribbean, and stressed its goal of overcoming social injustice.",
        "The work agenda proposed by Argentina addresses crucial regional challenges: climate change, epidemiological emergencies, disaster management, education, anti-corruption, food security, connectivity, sustainable development goals, gender equality and institutional strengthening. It also promotes dialogue with the European Union, China, Russia and India.",
        "Santiago Cafiero presented fifteen areas of action for the Argentine presidency pro tempore: post-COVID economic recovery, regional health cooperation, space cooperation, science and technology, disaster management, education, institutional strengthening, food security, dialogue with external partners, infrastructure integration, environmental cooperation, operational development, gender equality, digital transformation and culture.",
        "CELAC is the third largest economy in the world, with a GDP of approximately 7 trillion dollars, being the largest food producer and the third largest electricity producer globally.",
      ],
      pt: [
        "O chanceler mexicano Marcelo Ebrard comunicou que a decisão foi adotada por consenso durante a XXII Reunião de Ministros das Relações Exteriores realizada em Buenos Aires. Sendo o México presidente da CELAC em 2021, transferiu a presidência ao chanceler argentino Santiago Cafiero. Em seu discurso, o funcionário argentino expressou que sua nação exerceria essa responsabilidade com orgulho e compromisso, fomentando a participação e o consenso entre seus membros.",
        "O ministro argentino sustentou que a CELAC é a melhor ferramenta para a integração da América Latina e do Caribe, e enfatizou seu objetivo de superar as injustiças sociais.",
        "A agenda de trabalho proposta pela Argentina aborda desafios cruciais da região: mudança climática, emergências epidemiológicas, gestão de desastres, educação, anticorrupção, segurança alimentar, conectividade, objetivos de desenvolvimento sustentável, equidade de gênero e fortalecimento institucional. Também promove o diálogo com a União Europeia, China, Rússia e Índia.",
        "Santiago Cafiero apresentou quinze áreas de ação para a presidência pro tempore argentina: recuperação econômica pós-COVID, cooperação regional em saúde, cooperação espacial, ciência e tecnologia, gestão de desastres, educação, fortalecimento institucional, segurança alimentar, diálogo com parceiros externos, integração de infraestrutura, cooperação ambiental, desenvolvimento operacional, equidade de gênero, transformação digital e cultura.",
        "A CELAC constitui a terceira economia mundial, com um PIB aproximado de 7 trilhões de dólares, sendo a maior produtora de alimentos e a terceira produtora de eletricidade do mundo.",
      ],
    },
  },
  {
    slug: "mision-celac",
    category: "noticias",
    image: "/images/celac-2011-scaled.jpg",
    tag: { es: "Institucional", en: "Institutional", pt: "Institucional" },
    title: {
      es: "Misión de la Comunidad de Estados Latinoamericanos y Caribeños",
      en: "Mission of the Community of Latin American and Caribbean States",
      pt: "Missão da Comunidade de Estados Latino-Americanos e Caribenhos",
    },
    excerpt: {
      es: "La organización se constituyó en 2012 en Canadá bajo el nombre de Misión CELAC y quedó registrada ante Naciones Unidas en 2013.",
      en: "The organisation was established in Canada in 2012 under the name Misión CELAC and was registered with the United Nations in 2013.",
      pt: "A organização foi constituída em 2012 no Canadá sob o nome de Missão CELAC e foi registrada junto às Nações Unidas em 2013.",
    },
    body: {
      es: [
        "Tras la creación de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC) en diciembre de 2011 en Caracas, Venezuela, por los jefes de Estado de América Latina y el Caribe, la ONG de Estados Latinoamericanos y Caribeños se constituyó el 11 de abril de 2012 en Canadá con el nombre de Misión CELAC.",
        "La organización se registró ante la Dirección General de ONG del Departamento de Asuntos Económicos y Sociales de las Naciones Unidas en febrero de 2013.",
        "El objetivo es construir una Comunidad de Estados Latinoamericanos y Caribeños robusta, integrada y progresista después de dos siglos de independencia, inspirada en la visión de Simón Bolívar. La misión representa los intereses de los Estados y protege a los ciudadanos durante los procesos de integración en Canadá, Estados Unidos y otras regiones, en colaboración con las embajadas.",
        "La organización sirve también a los ciudadanos estadounidenses de origen latinoamericano y caribeño, que representan aproximadamente un tercio de la población de ese país, y funciona como puente entre los Estados miembros de la CELAC y la comunidad internacional.",
      ],
      en: [
        "Following the creation of the Community of Latin American and Caribbean States (CELAC) in December 2011 in Caracas, Venezuela, by the heads of state of Latin America and the Caribbean, the NGO of Latin American and Caribbean States was established on 11 April 2012 in Canada under the name Misión CELAC.",
        "The organisation was registered with the NGO Branch of the United Nations Department of Economic and Social Affairs in February 2013.",
        "Its goal is to build a robust, integrated and progressive Community of Latin American and Caribbean States two centuries after independence, inspired by the vision of Simón Bolívar. The mission represents the interests of the states and protects citizens during integration processes in Canada, the United States and other regions, working alongside embassies.",
        "The organisation also serves US citizens of Latin American and Caribbean origin, who represent roughly a third of that country's population, and acts as a bridge between CELAC member states and the international community.",
      ],
      pt: [
        "Após a criação da Comunidade de Estados Latino-Americanos e Caribenhos (CELAC) em dezembro de 2011 em Caracas, Venezuela, pelos chefes de Estado da América Latina e do Caribe, a ONG de Estados Latino-Americanos e Caribenhos foi constituída em 11 de abril de 2012 no Canadá com o nome de Missão CELAC.",
        "A organização foi registrada junto à Direção-Geral de ONGs do Departamento de Assuntos Econômicos e Sociais das Nações Unidas em fevereiro de 2013.",
        "O objetivo é construir uma Comunidade de Estados Latino-Americanos e Caribenhos robusta, integrada e progressista depois de dois séculos de independência, inspirada na visão de Simón Bolívar. A missão representa os interesses dos Estados e protege os cidadãos durante os processos de integração no Canadá, nos Estados Unidos e em outras regiões, em colaboração com as embaixadas.",
        "A organização atende também os cidadãos estadunidenses de origem latino-americana e caribenha, que representam aproximadamente um terço da população daquele país, e funciona como ponte entre os Estados membros da CELAC e a comunidade internacional.",
      ],
    },
    signature: "Silvia Marcella Jiménez — Presidente conjunto",
  },
  {
    slug: "celac-international-trading-consulting",
    category: "noticias",
    image: "/images/action-desarrollo.png",
    tag: { es: "Comercio", en: "Trade", pt: "Comércio" },
    date: { es: "Noviembre 2013", en: "November 2013", pt: "Novembro de 2013" },
    title: {
      es: "CELAC International Trading & Consulting — Comercio internacional",
      en: "CELAC International Trading & Consulting — International trade",
      pt: "CELAC International Trading & Consulting — Comércio internacional",
    },
    excerpt: {
      es: "La primera empresa de la CELAC se constituyó para promover y proteger los intereses económicos de la comunidad.",
      en: "CELAC's first company was set up to promote and protect the community's economic interests.",
      pt: "A primeira empresa da CELAC foi constituída para promover e proteger os interesses econômicos da comunidade.",
    },
    body: {
      es: [
        "El 5 de noviembre de 2013 se constituyó la primera empresa de la CELAC, denominada CELAC International Trading, Project Management and Consulting, con el objetivo de promover y proteger los intereses económicos de la Comunidad de Estados Latinoamericanos y Caribeños. La empresa organiza misiones comerciales y exposiciones para que las empresas de los Estados miembros puedan identificar oportunidades de comercio internacional y promover sus productos y servicios, atrayendo inversión a las industrias de los sectores económicos estratégicos de la CELAC.",
        "El objetivo es presentar a las empresas la estructura productiva y otras iniciativas de la CELAC, diseñadas para fortalecer su desarrollo económico. Se busca atraer inversión extranjera directa y destinar recursos a las industrias de relevancia estratégica para el desarrollo de la comunidad y la competitividad de sus empresas.",
        "El siguiente paso es establecer ferias y espacios de exposición permanentes, abiertos todo el año, en ciudades como Estambul, Mascate, Medina, Los Ángeles, Nueva York, Miami, Montreal, Toronto, Astaná, Taskent, Seúl, Moscú, El Cairo, Islamabad, Taipéi, Urumchi, Pekín, Kuala Lumpur, Tokio, Adís Abeba, Berlín, Roma y La Valeta.",
      ],
      en: [
        "On 5 November 2013 CELAC's first company was established, named CELAC International Trading, Project Management and Consulting, with the aim of promoting and protecting the economic interests of the Community of Latin American and Caribbean States. The company organises trade missions and exhibitions so that companies from member states can identify international trade opportunities and promote their products and services, attracting investment to the industries of CELAC's strategic economic sectors.",
        "The goal is to present companies with CELAC's productive structure and other initiatives, designed to strengthen its economic development. The aim is to attract foreign direct investment and channel resources into industries of strategic relevance for the community's development and the competitiveness of its companies.",
        "The next step is to establish permanent fairs and exhibition spaces, open year-round, in cities such as Istanbul, Muscat, Medina, Los Angeles, New York, Miami, Montreal, Toronto, Astana, Tashkent, Seoul, Moscow, Cairo, Islamabad, Taipei, Ürümqi, Beijing, Kuala Lumpur, Tokyo, Addis Ababa, Berlin, Rome and Valletta.",
      ],
      pt: [
        "Em 5 de novembro de 2013 foi constituída a primeira empresa da CELAC, denominada CELAC International Trading, Project Management and Consulting, com o objetivo de promover e proteger os interesses econômicos da Comunidade de Estados Latino-Americanos e Caribenhos. A empresa organiza missões comerciais e exposições para que as empresas dos Estados membros possam identificar oportunidades de comércio internacional e promover seus produtos e serviços, atraindo investimento para as indústrias dos setores econômicos estratégicos da CELAC.",
        "O objetivo é apresentar às empresas a estrutura produtiva e outras iniciativas da CELAC, desenhadas para fortalecer seu desenvolvimento econômico. Busca-se atrair investimento estrangeiro direto e destinar recursos às indústrias de relevância estratégica para o desenvolvimento da comunidade e a competitividade de suas empresas.",
        "O próximo passo é estabelecer feiras e espaços de exposição permanentes, abertos o ano todo, em cidades como Istambul, Mascate, Medina, Los Angeles, Nova York, Miami, Montreal, Toronto, Astana, Tasquente, Seul, Moscou, Cairo, Islamabade, Taipé, Urumqi, Pequim, Kuala Lumpur, Tóquio, Adis Abeba, Berlim, Roma e Valeta.",
      ],
    },
  },
  {
    slug: "modernizacion-sistemas-servicios-salud",
    category: "noticias",
    image: "/images/action-voceria.png",
    tag: { es: "Salud", en: "Health", pt: "Saúde" },
    title: {
      es: "Modernización de los sistemas y servicios de salud",
      en: "Modernising health systems and services",
      pt: "Modernização dos sistemas e serviços de saúde",
    },
    excerpt: {
      es: "Un proyecto de medicina preventiva y construcción de centros de atención en toda la región, siguiendo el modelo cubano.",
      en: "A preventive medicine project and the construction of care centres across the region, following the Cuban model.",
      pt: "Um projeto de medicina preventiva e construção de centros de atenção em toda a região, seguindo o modelo cubano.",
    },
    body: {
      es: [
        "Introduciremos la medicina preventiva con medidas preventivas que se han implementado con éxito en Cuba. Asimismo, planeamos iniciar un proyecto que facilitará la modernización de los sistemas de salud mediante la construcción de instituciones de servicios de salud —clínicas, policlínicas y hospitales— en países en desarrollo, con el apoyo de la entidad estatal cubana Servicios Médicos Cubanos.",
        "CSM brindará a médicos, especialistas y personal médico su experiencia y conocimientos reconocidos internacionalmente en el campo de los servicios de salud preventiva a través de nuestro socio DHI, una ONG internacional constituida en Canadá por médicos egresados de facultades de medicina cubanas e inscrita en la base de datos oficial del Departamento de Asuntos Económicos y Sociales de las Naciones Unidas como ONG desde 2014.",
        "Nuestra visión es construir un centro de atención médica, ya sea un hospital o una clínica, en cada rincón de la Comunidad de Estados Latinoamericanos y Caribeños y del mundo, siguiendo el ejemplo cubano.",
        "Esperamos salvar vidas y ahorrar recursos mediante la implementación de la medicina preventiva. Nuestro lema es: medicina preventiva con medidas preventivas. Creemos que, al implementar estas medidas, podemos proteger a las personas antes de que su salud requiera atención médica.",
        "Nuestro proyecto piloto se implementará este año en América Latina y el Caribe con 1.000 médicos listos para servir a la humanidad, en colaboración con los Estados de la región. Nuestra misión es garantizar que no haya pueblo ni aldea sin un médico.",
        "Los maestros cubanos enseñaron a nuestros médicos tanto a tratar a los pacientes como que todo ser humano merece atención médica independientemente de su origen étnico, religioso y socioeconómico. Estamos en proceso de conectarnos con más de 25.000 médicos de más de 110 países que se graduaron en escuelas de medicina cubanas.",
      ],
      en: [
        "We will introduce preventive medicine with preventive measures that have been successfully implemented in Cuba. We also plan to launch a project that will facilitate the modernisation of health systems through the construction of health service institutions — clinics, polyclinics and hospitals — in developing countries, with the support of the Cuban state entity Servicios Médicos Cubanos.",
        "CSM will provide doctors, specialists and medical staff with its internationally recognised experience and knowledge in the field of preventive health services through our partner DHI, an international NGO established in Canada by doctors who graduated from Cuban medical schools and registered in the official database of the United Nations Department of Economic and Social Affairs as an NGO since 2014.",
        "Our vision is to build a healthcare centre, whether a hospital or a clinic, in every corner of the Community of Latin American and Caribbean States and of the world, following the Cuban example.",
        "We hope to save lives and resources by implementing preventive medicine. Our motto is: preventive medicine with preventive measures. We believe that by implementing these measures we can protect people before their health requires medical attention.",
        "Our pilot project will be implemented this year in Latin America and the Caribbean with 1,000 doctors ready to serve humanity, in collaboration with the states of the region. Our mission is to ensure that no town or village is left without a doctor.",
        "Cuban teachers taught our doctors both how to treat patients and that every human being deserves medical care regardless of ethnic, religious and socioeconomic background. We are in the process of connecting with more than 25,000 doctors from over 110 countries who graduated from Cuban medical schools.",
      ],
      pt: [
        "Introduziremos a medicina preventiva com medidas preventivas que foram implementadas com sucesso em Cuba. Além disso, planejamos iniciar um projeto que facilitará a modernização dos sistemas de saúde mediante a construção de instituições de serviços de saúde — clínicas, policlínicas e hospitais — em países em desenvolvimento, com o apoio da entidade estatal cubana Servicios Médicos Cubanos.",
        "A CSM oferecerá a médicos, especialistas e pessoal médico sua experiência e conhecimentos reconhecidos internacionalmente no campo dos serviços de saúde preventiva por meio de nosso parceiro DHI, uma ONG internacional constituída no Canadá por médicos formados em faculdades de medicina cubanas e inscrita na base de dados oficial do Departamento de Assuntos Econômicos e Sociais das Nações Unidas como ONG desde 2014.",
        "Nossa visão é construir um centro de atenção médica, seja um hospital ou uma clínica, em cada canto da Comunidade de Estados Latino-Americanos e Caribenhos e do mundo, seguindo o exemplo cubano.",
        "Esperamos salvar vidas e economizar recursos mediante a implementação da medicina preventiva. Nosso lema é: medicina preventiva com medidas preventivas. Acreditamos que, ao implementar essas medidas, podemos proteger as pessoas antes que sua saúde exija atenção médica.",
        "Nosso projeto piloto será implementado este ano na América Latina e no Caribe com 1.000 médicos prontos para servir à humanidade, em colaboração com os Estados da região. Nossa missão é garantir que não haja povoado nem aldeia sem um médico.",
        "Os professores cubanos ensinaram aos nossos médicos tanto a tratar os pacientes quanto que todo ser humano merece atenção médica independentemente de sua origem étnica, religiosa e socioeconômica. Estamos em processo de conexão com mais de 25.000 médicos de mais de 110 países formados em escolas de medicina cubanas.",
      ],
    },
    signature: "Dr. Shoaib Haider — Vicepresidente Internacional de CELAC",
  },
];

export function getPost(slug: string) {
  return NEWS.find((p) => p.slug === slug);
}
