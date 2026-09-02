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
    image: "/images/news-cumbre-celac-ue.jpg",
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
    image: "/images/news-estados-arabes.jpg",
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
  {
    slug: "septiembre-2021-cumbre-jefes-de-estado-mexico",
    category: "noticias",
    image: "/images/news-cumbre-mexico-2021.jpg",
    tag: { es: "Cumbres", en: "Summits", pt: "Cúpulas" },
    date: { es: "Septiembre 2021", en: "September 2021", pt: "Setembro de 2021" },
    title: {
      es: "VI Cumbre de Jefes de Estado de la CELAC — Ciudad de México",
      en: "6th CELAC Summit of Heads of State — Mexico City",
      pt: "VI Cúpula de Chefes de Estado da CELAC — Cidade do México",
    },
    excerpt: {
      es: "Tras dos años de suspensión por la pandemia, la CELAC volvió a reunirse de forma presencial y aprobó por unanimidad un plan de autosuficiencia sanitaria para la región.",
      en: "After two years suspended by the pandemic, CELAC met in person again and unanimously approved a health self-sufficiency plan for the region.",
      pt: "Após dois anos de suspensão pela pandemia, a CELAC voltou a reunir-se presencialmente e aprovou por unanimidade um plano de autossuficiência sanitária para a região.",
    },
    body: {
      es: [
        "La VI Cumbre de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC) se llevó a cabo el 18 de este mes, con la particularidad de que, tras dos años de suspensión debido a la pandemia de COVID-19, se realizó de forma presencial.",
        "El presidente de México, Andrés Manuel López Obrador, planteó en la reunión el interés de que la CELAC promueva la unidad en el continente y fortalezca la capacidad de negociación de la región frente a otros bloques económicos, así como con Estados Unidos y Canadá.",
        "Los países miembros de la CELAC aprobaron por unanimidad las líneas de acción y propuestas para un plan de autosuficiencia en materia de salud en América Latina y el Caribe, una hoja de ruta programática presentada por la Comisión Económica para América Latina y el Caribe (CEPAL), para fortalecer la producción y distribución de medicamentos, especialmente vacunas, en los países de la región y reducir la dependencia externa. Asimismo, otorgaron a la comisión regional de las Naciones Unidas el mandato para impulsar acciones que garanticen su efectiva implementación.",
        "La mayoría de los Estados miembros están elaborando planes para lograr la autosuficiencia alimentaria mediante la modernización de la maquinaria y el equipo agrícola.",
        "El presidente de México exhortó a los países a “poner fin a la inacción y proponer una relación nueva y dinámica entre los pueblos de América”. Asimismo, instó a Estados Unidos y Canadá a proporcionar vacunas a los países de la región que no han podido proteger a su población de la COVID-19 por falta de recursos económicos, y solicitó a la CEPAL y a otras organizaciones multilaterales que elaboren un plan con el objetivo primordial de promover la comunidad económica de América Latina y el Caribe, aprovechando así la riqueza natural y cultural de la región.",
      ],
      en: [
        "The 6th Summit of the Community of Latin American and Caribbean States (CELAC) was held on the 18th of this month and, after two years suspended because of the COVID-19 pandemic, it took place in person.",
        "Mexico's president, Andrés Manuel López Obrador, put forward at the meeting the interest in CELAC promoting unity across the continent and strengthening the region's bargaining power vis-à-vis other economic blocs, as well as with the United States and Canada.",
        "CELAC member states unanimously approved the lines of action and proposals for a health self-sufficiency plan for Latin America and the Caribbean, a programmatic roadmap presented by the Economic Commission for Latin America and the Caribbean (ECLAC) to strengthen the production and distribution of medicines — vaccines above all — in the countries of the region and to reduce external dependence. They also gave the United Nations regional commission the mandate to drive the actions needed to ensure its effective implementation.",
        "Most member states are drawing up plans to achieve food self-sufficiency by modernising agricultural machinery and equipment.",
        "Mexico's president urged countries to “put an end to inaction and propose a new, dynamic relationship among the peoples of the Americas”. He also called on the United States and Canada to provide vaccines to countries in the region that have been unable to protect their population from COVID-19 for lack of financial resources, and asked ECLAC and other multilateral organisations to draw up a plan whose primary aim is to promote the economic community of Latin America and the Caribbean, drawing on the region's natural and cultural wealth.",
      ],
      pt: [
        "A VI Cúpula da Comunidade de Estados Latino-Americanos e Caribenhos (CELAC) foi realizada no dia 18 deste mês, com a particularidade de que, após dois anos de suspensão devido à pandemia de COVID-19, aconteceu de forma presencial.",
        "O presidente do México, Andrés Manuel López Obrador, apresentou na reunião o interesse de que a CELAC promova a unidade no continente e fortaleça a capacidade de negociação da região frente a outros blocos econômicos, assim como com os Estados Unidos e o Canadá.",
        "Os países membros da CELAC aprovaram por unanimidade as linhas de ação e propostas para um plano de autossuficiência em matéria de saúde na América Latina e no Caribe, um roteiro programático apresentado pela Comissão Econômica para a América Latina e o Caribe (CEPAL), para fortalecer a produção e a distribuição de medicamentos, especialmente vacinas, nos países da região e reduzir a dependência externa. Também outorgaram à comissão regional das Nações Unidas o mandato para impulsionar ações que garantam a sua efetiva implementação.",
        "A maioria dos Estados membros está elaborando planos para alcançar a autossuficiência alimentar por meio da modernização do maquinário e dos equipamentos agrícolas.",
        "O presidente do México exortou os países a “pôr fim à inação e propor uma relação nova e dinâmica entre os povos da América”. Também instou os Estados Unidos e o Canadá a fornecerem vacinas aos países da região que não puderam proteger a sua população da COVID-19 por falta de recursos econômicos, e solicitou à CEPAL e a outras organizações multilaterais que elaborem um plano com o objetivo primordial de promover a comunidade econômica da América Latina e do Caribe, aproveitando assim a riqueza natural e cultural da região.",
      ],
    },
    signature: "Orlando Sotolongo Santana — Presidente",
  },
  {
    slug: "vision-celac-2035",
    category: "boletines",
    image: "/images/hero-map.png",
    tag: { es: "Proyectos", en: "Projects", pt: "Projetos" },
    title: {
      es: "Visión CELAC 2035",
      en: "CELAC Vision 2035",
      pt: "Visão CELAC 2035",
    },
    excerpt: {
      es: "Una hoja de ruta de proyectos de infraestructura y educación pensada para llevar a los Estados miembros al nivel de los países desarrollados.",
      en: "A roadmap of infrastructure and education projects designed to bring member States up to the level of developed countries.",
      pt: "Um roteiro de projetos de infraestrutura e educação pensado para levar os Estados membros ao nível dos países desenvolvidos.",
    },
    body: {
      es: [
        "Esta visión, que se materializará mediante la implementación de los proyectos que se detallan a continuación, elaborados por nuestro equipo de expertos, académicos y especialistas en sus respectivos campos, impulsará a los Estados miembros de la CELAC al nivel de los países desarrollados. Recordemos siempre que, por primera vez en 200 años, estamos escribiendo nuestra historia.",
        "Una línea de tren de alta velocidad. Esto conectará nuestra frontera norte, México, con nuestra frontera sur, Argentina, y modernizará el transporte ferroviario. Planeamos implementar servicios similares en nuestras islas del Caribe, conectando el este con el oeste y el sur con el norte.",
        "Bolívar el Conquistador: modernización del sistema educativo y sus equipos. Planeamos implementar un sistema educativo avanzado equipado con tecnología de punta. Cada estudiante, desde primaria hasta la universidad, contará con una tableta y una computadora portátil con todos los libros y materiales necesarios, y estará conectado con sus profesores las 24 horas. De esta manera, garantizaremos que nuestra futura juventud tenga igualdad de oportunidades educativas dondequiera que las necesite y dondequiera que se encuentre. Nuestros estudiantes merecen lo mejor y nuestra misión es brindarles las mejores herramientas.",
      ],
      en: [
        "This vision, which will take shape through the projects set out below — drawn up by our team of experts, academics and specialists in their respective fields — will bring CELAC member States up to the level of developed countries. Let us always remember that, for the first time in 200 years, we are writing our own history.",
        "A high-speed rail line. It will connect our northern border, Mexico, with our southern border, Argentina, and modernise rail transport. We plan to roll out similar services across our Caribbean islands, connecting east with west and south with north.",
        "Bolívar the Conqueror: modernising the education system and its equipment. We plan to put in place an advanced education system equipped with cutting-edge technology. Every student, from primary school through university, will have a tablet and a laptop with all the books and materials they need, and will be connected to their teachers around the clock. This is how we will ensure that our future young people have equal educational opportunities wherever they need them and wherever they are. Our students deserve the best, and our mission is to give them the best tools.",
      ],
      pt: [
        "Esta visão, que se materializará por meio da implementação dos projetos detalhados a seguir, elaborados pela nossa equipe de especialistas, acadêmicos e profissionais em seus respectivos campos, levará os Estados membros da CELAC ao nível dos países desenvolvidos. Lembremos sempre que, pela primeira vez em 200 anos, estamos escrevendo a nossa história.",
        "Uma linha de trem de alta velocidade. Conectará a nossa fronteira norte, o México, com a nossa fronteira sul, a Argentina, e modernizará o transporte ferroviário. Planejamos implementar serviços semelhantes nas nossas ilhas do Caribe, conectando o leste com o oeste e o sul com o norte.",
        "Bolívar o Conquistador: modernização do sistema educativo e dos seus equipamentos. Planejamos implementar um sistema educativo avançado equipado com tecnologia de ponta. Cada estudante, do ensino fundamental à universidade, contará com um tablet e um computador portátil com todos os livros e materiais necessários, e estará conectado com os seus professores 24 horas por dia. Dessa maneira, garantiremos que a nossa futura juventude tenha igualdade de oportunidades educativas onde quer que precise delas e onde quer que esteja. Os nossos estudantes merecem o melhor e a nossa missão é oferecer-lhes as melhores ferramentas.",
      ],
    },
    signature: "Necdet Hincal — Vicepresidente",
  },
  {
    slug: "programa-hambre-cero",
    category: "boletines",
    image: "/images/bg-2.jpg",
    tag: { es: "Desarrollo social", en: "Social development", pt: "Desenvolvimento social" },
    title: {
      es: "El programa brasileño “Hambre Cero” como modelo para reducir la pobreza en la comunidad",
      en: "Brazil's “Zero Hunger” programme as a model for reducing poverty in the community",
      pt: "O programa brasileiro “Fome Zero” como modelo para reduzir a pobreza na comunidade",
    },
    excerpt: {
      es: "El plan que sacó a más de 35 millones de brasileños de la pobreza extrema inspira un proyecto regional de alimentación, empleo agrícola e ingresos.",
      en: "The plan that lifted more than 35 million Brazilians out of extreme poverty inspires a regional project on food, farm employment and incomes.",
      pt: "O plano que tirou mais de 35 milhões de brasileiros da pobreza extrema inspira um projeto regional de alimentação, emprego agrícola e renda.",
    },
    body: {
      es: [
        "Cuando el expresidente brasileño Lula fue elegido, presentó un plan llamado «Hambre Cero» que, en muy poco tiempo, logró que más de 35 millones de brasileños salieran de la pobreza extrema y ascendieran a la clase media. Este plan sirvió de gran inspiración para muchos otros Estados miembros de la CELAC.",
        "Estamos planeando presentar un proyecto inspirado en el programa Hambre Cero de Brasil, con la esperanza de que no solo nos ayude a proporcionar la alimentación necesaria, sino también a aumentar los ingresos de nuestra población y a crear empleos en el sector agrícola. Ayudaremos a nuestras pequeñas y medianas empresas agrícolas y a nuestros agricultores a obtener maquinaria y herramientas agrícolas a precios asequibles, reduciendo así los costos de producción tanto para ellos como para los consumidores.",
      ],
      en: [
        "When former Brazilian president Lula was elected, he introduced a plan called “Zero Hunger” which, in a very short time, lifted more than 35 million Brazilians out of extreme poverty and into the middle class. That plan was a great source of inspiration for many other CELAC member States.",
        "We are planning to put forward a project inspired by Brazil's Zero Hunger programme, in the hope that it will not only help us provide the food that is needed, but also raise our population's incomes and create jobs in the agricultural sector. We will help our small and medium-sized farming businesses and our farmers to obtain agricultural machinery and tools at affordable prices, thereby lowering production costs both for them and for consumers.",
      ],
      pt: [
        "Quando o ex-presidente brasileiro Lula foi eleito, apresentou um plano chamado «Fome Zero» que, em muito pouco tempo, conseguiu que mais de 35 milhões de brasileiros saíssem da pobreza extrema e ascendessem à classe média. Esse plano serviu de grande inspiração para muitos outros Estados membros da CELAC.",
        "Estamos planejando apresentar um projeto inspirado no programa Fome Zero do Brasil, na esperança de que não apenas nos ajude a fornecer a alimentação necessária, mas também a aumentar a renda da nossa população e a criar empregos no setor agrícola. Ajudaremos as nossas pequenas e médias empresas agrícolas e os nossos agricultores a obter maquinário e ferramentas agrícolas a preços acessíveis, reduzindo assim os custos de produção tanto para eles quanto para os consumidores.",
      ],
    },
    signature: "Juana S. Jerena — Presidente",
  },
  {
    slug: "comunidad-siglo-xxi",
    category: "boletines",
    image: "/images/action-politica.png",
    tag: { es: "Institucional", en: "Institutional", pt: "Institucional" },
    title: {
      es: "La Comunidad de Estados Latinoamericanos y Caribeños en el siglo XXI",
      en: "The Community of Latin American and Caribbean States in the 21st century",
      pt: "A Comunidade de Estados Latino-Americanos e Caribenhos no século XXI",
    },
    excerpt: {
      es: "Un mecanismo creado para representar, promover y proteger los intereses de los Estados miembros de la CELAC y de sus ciudadanos, dentro y fuera de la región.",
      en: "A mechanism created to represent, promote and protect the interests of CELAC member States and their citizens, inside and outside the region.",
      pt: "Um mecanismo criado para representar, promover e proteger os interesses dos Estados membros da CELAC e dos seus cidadãos, dentro e fora da região.",
    },
    body: {
      es: [
        "Nuestra organización es un mecanismo creado para representar, promover y proteger los intereses de los miembros de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC) y sus ciudadanos. Este mecanismo y el proyecto se inspiran en el comandante Hugo Chávez Frías de Venezuela, quien dedicó su vida a la prosperidad y el bienestar de los pueblos de América Latina y el Caribe, y en Fidel Castro Ruz.",
        "Creemos que la CELAC trasciende las ideas políticas convencionales de izquierda y derecha. Representa la justicia social y la igualdad deseadas por y para los pueblos de esta comunidad de naciones, y esperamos que sirva de modelo para los pueblos de otras regiones. No queremos ver a los habitantes de nuestras comunidades necesitados de ropa y alimentos básicos, cuando bajo sus tierras abundan los minerales y los recursos naturales. Nuestros proyectos se crean para contribuir a mejorar la vida de los ciudadanos de la CELAC, tanto dentro como fuera de la zona de la CELAC.",
        "El mecanismo de CELAC International reúne a la Misión CELAC, la ONG de la CELAC creada oficialmente en abril de 2012, y a CELAC International, empresa de comercio, gestión de proyectos y consultoría creada en 2013 para representar, proteger y apoyar mejor los intereses de la Comunidad de Estados Latinoamericanos y Caribeños y sus ciudadanos, así como a Médicos por la Humanidad Internacional, creada por médicos egresados de la Escuela de Medicina de Cuba.",
        "Para promover y proteger los intereses de la CELAC, trabajaremos en conjunto con la administración oficial de la CELAC, incluyendo nuestras misiones en los países donde prestaremos nuestros servicios. Para concretar nuestra visión, estableceremos oficinas en diversos países, comenzando por Canadá, Estados Unidos, Turquía, Sultanato de Omán, Corea, Arabia Saudita, Irán, Federación Rusa, China y Etiopía. Nuestras sedes estarán ubicadas en La Habana (Cuba) y Caracas (Venezuela).",
        "A través de nuestras oficinas, brindaremos información y asistencia a nuestros ciudadanos. Estaremos con y para nuestros ciudadanos dondequiera que estén. Nuestro plan consiste en llevar a la Comunidad de Estados Latinoamericanos y Caribeños al nivel de las naciones avanzadas mediante proyectos de desarrollo que están siendo preparados por nuestros expertos y especialistas en sus respectivos campos, como la salud y la infraestructura.",
        "Haremos del siglo XXI el «Siglo de la Comunidad de Estados Latinoamericanos y Caribeños». Aspiramos a ser un modelo de esperanza, inspiración y motivación para todas las naciones en desarrollo. Estamos listos y encantados de compartir nuestros éxitos y experiencias con todas las naciones, con respeto, sin importar su origen étnico, religioso o social.",
      ],
      en: [
        "Our organisation is a mechanism created to represent, promote and protect the interests of the members of the Community of Latin American and Caribbean States (CELAC) and their citizens. This mechanism and the project are inspired by Commander Hugo Chávez Frías of Venezuela, who devoted his life to the prosperity and well-being of the peoples of Latin America and the Caribbean, and by Fidel Castro Ruz.",
        "We believe that CELAC goes beyond the conventional political ideas of left and right. It stands for the social justice and equality sought by and for the peoples of this community of nations, and we hope it will serve as a model for peoples in other regions. We do not want to see the inhabitants of our communities in need of clothing and basic food when minerals and natural resources abound beneath their land. Our projects are created to help improve the lives of CELAC citizens, both inside and outside the CELAC area.",
        "The CELAC International mechanism brings together the CELAC Mission — the CELAC NGO officially created in April 2012 — and CELAC International, a trade, project management and consultancy company created in 2013 to better represent, protect and support the interests of the Community of Latin American and Caribbean States and its citizens, as well as Doctors for Humanity International, created by doctors who graduated from Cuba's School of Medicine.",
        "To promote and protect CELAC's interests, we will work together with CELAC's official administration, including our missions in the countries where we will provide our services. To realise our vision, we will set up offices in a number of countries, starting with Canada, the United States, Türkiye, the Sultanate of Oman, Korea, Saudi Arabia, Iran, the Russian Federation, China and Ethiopia. Our headquarters will be located in Havana (Cuba) and Caracas (Venezuela).",
        "Through our offices, we will provide information and assistance to our citizens. We will be with and for our citizens wherever they are. Our plan is to bring the Community of Latin American and Caribbean States up to the level of advanced nations through development projects being prepared by our experts and specialists in their respective fields, such as health and infrastructure.",
        "We will make the 21st century the “Century of the Community of Latin American and Caribbean States”. We aspire to be a model of hope, inspiration and motivation for all developing nations. We are ready and glad to share our successes and experiences with all nations, with respect, regardless of their ethnic, religious or social background.",
      ],
      pt: [
        "A nossa organização é um mecanismo criado para representar, promover e proteger os interesses dos membros da Comunidade de Estados Latino-Americanos e Caribenhos (CELAC) e dos seus cidadãos. Este mecanismo e o projeto inspiram-se no comandante Hugo Chávez Frías, da Venezuela, que dedicou a sua vida à prosperidade e ao bem-estar dos povos da América Latina e do Caribe, e em Fidel Castro Ruz.",
        "Acreditamos que a CELAC transcende as ideias políticas convencionais de esquerda e direita. Representa a justiça social e a igualdade desejadas pelos e para os povos desta comunidade de nações, e esperamos que sirva de modelo para os povos de outras regiões. Não queremos ver os habitantes das nossas comunidades necessitados de roupa e alimentos básicos, quando sob as suas terras abundam os minerais e os recursos naturais. Os nossos projetos são criados para contribuir para melhorar a vida dos cidadãos da CELAC, tanto dentro quanto fora da zona da CELAC.",
        "O mecanismo da CELAC International reúne a Missão CELAC, a ONG da CELAC criada oficialmente em abril de 2012, e a CELAC International, empresa de comércio, gestão de projetos e consultoria criada em 2013 para representar, proteger e apoiar melhor os interesses da Comunidade de Estados Latino-Americanos e Caribenhos e dos seus cidadãos, bem como os Médicos pela Humanidade Internacional, criada por médicos formados pela Escola de Medicina de Cuba.",
        "Para promover e proteger os interesses da CELAC, trabalharemos em conjunto com a administração oficial da CELAC, incluindo as nossas missões nos países onde prestaremos os nossos serviços. Para concretizar a nossa visão, estabeleceremos escritórios em diversos países, começando pelo Canadá, Estados Unidos, Turquia, Sultanato de Omã, Coreia, Arábia Saudita, Irã, Federação Russa, China e Etiópia. As nossas sedes estarão localizadas em Havana (Cuba) e Caracas (Venezuela).",
        "Por meio dos nossos escritórios, forneceremos informação e assistência aos nossos cidadãos. Estaremos com e para os nossos cidadãos onde quer que estejam. O nosso plano consiste em levar a Comunidade de Estados Latino-Americanos e Caribenhos ao nível das nações avançadas por meio de projetos de desenvolvimento que estão sendo preparados pelos nossos especialistas nos seus respectivos campos, como a saúde e a infraestrutura.",
        "Faremos do século XXI o «Século da Comunidade de Estados Latino-Americanos e Caribenhos». Aspiramos a ser um modelo de esperança, inspiração e motivação para todas as nações em desenvolvimento. Estamos prontos e felizes por compartilhar os nossos êxitos e experiências com todas as nações, com respeito, sem importar a sua origem étnica, religiosa ou social.",
      ],
    },
    signature: "Ricardo Cerda Bautista — Vicepresidente",
  },
];

export function getPost(slug: string) {
  return NEWS.find((p) => p.slug === slug);
}
