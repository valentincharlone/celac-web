/* Cuerpos repuestos a partir del original de celac.cloud (auditoría del 2026-09-02).

   Lo que había en `lib/news.ts` estaba parafraseado y condensado, y las estructuras
   que el tipo viejo no admitía —subtítulos, listas numeradas y citas en bloque— se
   habían aplanado o perdido. Lexical sí las admite, así que acá se reponen.

   El español es transcripción del original. EN y PT son traducción nuestra, igual
   que el resto del contenido del sitio.

   Sólo están las notas con diferencias: las demás se migran desde `lib/news.ts`. */
import type { Block } from "../lexical";
import type { Locale } from "../../lib/news";

export type NewsFix = {
  body?: Record<Locale, Block[]>;
  signature?: string;
};

export const NEWS_FIXES: Record<string, NewsFix> = {
  "celac-liga-de-estados-arabes": {
    signature: "Luca Galea Scannura — Copresidente",
    body: {
      es: [
        { type: "p", text: "El canciller mexicano Marcelo Ebrard anunció que la decisión se tomó por consenso durante la XXII Reunión de Ministros de Relaciones Exteriores celebrada en Buenos Aires. Dado que México ostentaba la presidencia de la CELAC durante 2021, transfirió el mando al canciller argentino Santiago Cafiero. En su discurso de investidura, el canciller argentino expresó que su país ejercerá la presidencia de este mecanismo de integración con orgullo y compromiso, fomentando la participación y el consenso entre sus miembros." },
        { type: "quote", text: "CELAC es la mejor herramienta para la integración de América Latina y el Caribe" },
        { type: "p", text: "afirmó el ministro de Relaciones Exteriores argentino, subrayando que su intención es avanzar hacia la superación de las injusticias sociales." },
        { type: "p", text: "Indicó que su agenda de trabajo busca abordar los problemas más apremiantes que enfrentan actualmente los países latinoamericanos. Por lo tanto, desde la presidencia de la CELAC, Argentina promoverá la cooperación en áreas relacionadas con el cambio climático, las emergencias epidemiológicas, la gestión integral del riesgo de desastres, el intercambio educativo, la lucha contra la corrupción, la seguridad alimentaria, la conectividad regional en transporte y comunicaciones, los Objetivos de Desarrollo Sostenible de la Agenda 2030, la equidad de género y el fortalecimiento institucional de la CELAC." },
        { type: "p", text: "En lo que respecta a las relaciones internacionales de este mecanismo de integración, anunció que promoverá el diálogo con la Unión Europea (UE) y países como China, Rusia e India." },
        { type: "h2", text: "¿Cuáles son las prioridades de la CELAC?" },
        { type: "p", text: "Durante la reunión de ministros de Relaciones Exteriores en la Cancillería, Santiago Cafiero delineó quince áreas de acción propuestas por el gobierno para ser discutidas durante la presidencia pro tempore de Argentina:" },
        { type: "ol", items: [
          "Recuperación económica post-COVID",
          "Cooperación regional en salud",
          "Cooperación espacial",
          "Ciencia, tecnología e innovación para la inclusión social",
          "Gestión integral de desastres",
          "Educación",
          "Fortalecimiento institucional y la agenda anticorrupción de la CELAC",
          "Seguridad alimentaria",
          "Diálogo con socios fuera de la región",
          "La integración de la infraestructura de América Latina y el Caribe",
          "Cooperación ambiental",
          "El desarrollo y perfeccionamiento de las operaciones de la CELAC",
          "Mejorar la situación de las mujeres en los países miembros",
          "Transformación digital y cooperación",
          "Cultura",
        ] },
        { type: "p", text: "**La CELAC es la tercera economía más grande del mundo, con un PIB de alrededor de 7 billones de dólares, y el mayor productor de alimentos y el tercer mayor productor de electricidad.**" },
        { type: "p", text: "En los últimos años se han registrado importantes avances en los ámbitos político, económico y social, lo que ha impulsado un rápido crecimiento en prácticamente todos los países. La mayor economía de América Latina es Brasil, con un PIB (PPA) de 2.293 millones de dólares (2011). Brasil ocupa el sexto lugar a nivel mundial en cuanto a economías, y su éxito es una gran inspiración para los Estados miembros de la CELAC." },
        { type: "p", text: "¡Viva la Comunidad de Estados Latinoamericanos y Caribeños!" },
      ],
      en: [
        { type: "p", text: "Mexican Foreign Minister Marcelo Ebrard announced that the decision was taken by consensus during the 22nd Meeting of Ministers of Foreign Affairs held in Buenos Aires. As Mexico held the CELAC presidency during 2021, it handed over to Argentine Foreign Minister Santiago Cafiero. In his inaugural address, the Argentine minister said his country would hold the presidency of this integration mechanism with pride and commitment, fostering participation and consensus among its members." },
        { type: "quote", text: "CELAC is the best tool for the integration of Latin America and the Caribbean" },
        { type: "p", text: "said the Argentine Minister of Foreign Affairs, stressing that his intention is to move towards overcoming social injustice." },
        { type: "p", text: "He noted that his work agenda seeks to address the most pressing problems currently facing Latin American countries. From the CELAC presidency, therefore, Argentina will promote cooperation in areas related to climate change, epidemiological emergencies, comprehensive disaster risk management, educational exchange, the fight against corruption, food security, regional connectivity in transport and communications, the Sustainable Development Goals of the 2030 Agenda, gender equality and CELAC institutional strengthening." },
        { type: "p", text: "As regards this integration mechanism international relations, he announced that he will promote dialogue with the European Union (EU) and countries such as China, Russia and India." },
        { type: "h2", text: "What are CELAC priorities?" },
        { type: "p", text: "During the meeting of foreign ministers at the Foreign Ministry, Santiago Cafiero outlined fifteen areas of action proposed by the government to be discussed during Argentina pro tempore presidency:" },
        { type: "ol", items: [
          "Post-COVID economic recovery",
          "Regional cooperation on health",
          "Space cooperation",
          "Science, technology and innovation for social inclusion",
          "Comprehensive disaster management",
          "Education",
          "Institutional strengthening and the CELAC anti-corruption agenda",
          "Food security",
          "Dialogue with partners outside the region",
          "The integration of Latin American and Caribbean infrastructure",
          "Environmental cooperation",
          "The development and improvement of CELAC operations",
          "Improving the situation of women in member countries",
          "Digital transformation and cooperation",
          "Culture",
        ] },
        { type: "p", text: "**CELAC is the third largest economy in the world, with a GDP of around 7 trillion dollars, and the largest food producer and third largest electricity producer.**" },
        { type: "p", text: "In recent years there have been significant advances in the political, economic and social spheres, driving rapid growth in practically every country. The largest economy in Latin America is Brazil, with a GDP (PPP) of 2,293 million dollars (2011). Brazil ranks sixth worldwide among economies, and its success is a great inspiration for CELAC member states." },
        { type: "p", text: "Long live the Community of Latin American and Caribbean States!" },
      ],
      pt: [
        { type: "p", text: "O chanceler mexicano Marcelo Ebrard anunciou que a decisão foi tomada por consenso durante a XXII Reunião de Ministros das Relações Exteriores realizada em Buenos Aires. Como o México ocupava a presidência da CELAC em 2021, transferiu o comando ao chanceler argentino Santiago Cafiero. Em seu discurso de posse, o chanceler argentino expressou que seu país exercerá a presidência deste mecanismo de integração com orgulho e compromisso, promovendo a participação e o consenso entre seus membros." },
        { type: "quote", text: "A CELAC é a melhor ferramenta para a integração da América Latina e do Caribe" },
        { type: "p", text: "afirmou o ministro das Relações Exteriores argentino, sublinhando que sua intenção é avançar rumo à superação das injustiças sociais." },
        { type: "p", text: "Indicou que sua agenda de trabalho busca abordar os problemas mais urgentes que os países latino-americanos enfrentam atualmente. Portanto, a partir da presidência da CELAC, a Argentina promoverá a cooperação em áreas relacionadas às mudanças climáticas, às emergências epidemiológicas, à gestão integral do risco de desastres, ao intercâmbio educacional, ao combate à corrupção, à segurança alimentar, à conectividade regional em transporte e comunicações, aos Objetivos de Desenvolvimento Sustentável da Agenda 2030, à equidade de gênero e ao fortalecimento institucional da CELAC." },
        { type: "p", text: "No que diz respeito às relações internacionais deste mecanismo de integração, anunciou que promoverá o diálogo com a União Europeia (UE) e países como China, Rússia e Índia." },
        { type: "h2", text: "Quais são as prioridades da CELAC?" },
        { type: "p", text: "Durante a reunião de ministros das Relações Exteriores na Chancelaria, Santiago Cafiero delineou quinze áreas de ação propostas pelo governo para serem discutidas durante a presidência pro tempore da Argentina:" },
        { type: "ol", items: [
          "Recuperação econômica pós-COVID",
          "Cooperação regional em saúde",
          "Cooperação espacial",
          "Ciência, tecnologia e inovação para a inclusão social",
          "Gestão integral de desastres",
          "Educação",
          "Fortalecimento institucional e a agenda anticorrupção da CELAC",
          "Segurança alimentar",
          "Diálogo com parceiros fora da região",
          "A integração da infraestrutura da América Latina e do Caribe",
          "Cooperação ambiental",
          "O desenvolvimento e aperfeiçoamento das operações da CELAC",
          "Melhorar a situação das mulheres nos países membros",
          "Transformação digital e cooperação",
          "Cultura",
        ] },
        { type: "p", text: "**A CELAC é a terceira maior economia do mundo, com um PIB de cerca de 7 trilhões de dólares, sendo o maior produtor de alimentos e o terceiro maior produtor de eletricidade.**" },
        { type: "p", text: "Nos últimos anos registraram-se importantes avanços nos âmbitos político, econômico e social, o que impulsionou um rápido crescimento em praticamente todos os países. A maior economia da América Latina é o Brasil, com um PIB (PPC) de 2.293 milhões de dólares (2011). O Brasil ocupa o sexto lugar mundial entre as economias, e seu êxito é uma grande inspiração para os Estados membros da CELAC." },
        { type: "p", text: "Viva a Comunidade de Estados Latino-Americanos e Caribenhos!" },
      ],
    },
  },

  "mision-celac": {
    body: {
      es: [
        { type: "p", text: "Tras la creación de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC) en diciembre de 2011 en Caracas, Venezuela, por los jefes de Estado de América Latina y el Caribe, la ONG de Estados Latinoamericanos y Caribeños se constituyó el 11 de abril de 2012 en Canadá con el nombre de Misión CELAC." },
        { type: "p", text: "La organización se registró ante la Dirección General de ONG del Departamento de Asuntos Económicos y Sociales de las Naciones Unidas en febrero de 2013. Fundaron esta organización con el lema del líder Fidel Castro:" },
        { type: "quote", text: "En la vida hay dos cosas importantes: las ideas y las personas." },
        { type: "p", text: "El objetivo es construir una Comunidad de Estados Latinoamericanos y Caribeños robusta, integrada y progresista después de dos siglos de independencia, siguiendo la visión de Simón Bolívar. La misión representa los intereses de los Estados miembros y protege a los ciudadanos, brindándoles asistencia durante los procesos de integración en Canadá, Estados Unidos y el mundo, en colaboración con las embajadas." },
        { type: "p", text: "La organización sirve también a los ciudadanos estadounidenses de origen latinoamericano y caribeño, que representan aproximadamente un tercio de la población de Estados Unidos, y actúa como puente entre los Estados miembros de la CELAC y el mundo." },
      ],
      en: [
        { type: "p", text: "Following the creation of the Community of Latin American and Caribbean States (CELAC) in December 2011 in Caracas, Venezuela, by the heads of state of Latin America and the Caribbean, the Latin American and Caribbean States NGO was constituted on 11 April 2012 in Canada under the name CELAC Mission." },
        { type: "p", text: "The organisation registered with the NGO Branch of the United Nations Department of Economic and Social Affairs in February 2013. They founded this organisation with the motto of the leader Fidel Castro:" },
        { type: "quote", text: "In life there are two important things: ideas and people." },
        { type: "p", text: "The aim is to build a strong, united, prosperous and advanced Community of Latin American and Caribbean States after two centuries of independence, following the vision of Simón Bolívar. The mission represents the interests of member states and protects citizens, providing them with assistance during integration processes in Canada, the United States and around the world, in collaboration with embassies." },
        { type: "p", text: "The organisation also serves US citizens of Latin American and Caribbean origin, who make up approximately one third of the population of the United States, and acts as a bridge between CELAC member states and the world." },
      ],
      pt: [
        { type: "p", text: "Após a criação da Comunidade de Estados Latino-Americanos e Caribenhos (CELAC) em dezembro de 2011 em Caracas, Venezuela, pelos chefes de Estado da América Latina e do Caribe, a ONG de Estados Latino-Americanos e Caribenhos constituiu-se em 11 de abril de 2012 no Canadá com o nome de Missão CELAC." },
        { type: "p", text: "A organização registrou-se junto à Direção-Geral de ONGs do Departamento de Assuntos Econômicos e Sociais das Nações Unidas em fevereiro de 2013. Fundaram esta organização com o lema do líder Fidel Castro:" },
        { type: "quote", text: "Na vida há duas coisas importantes: as ideias e as pessoas." },
        { type: "p", text: "O objetivo é construir uma Comunidade de Estados Latino-Americanos e Caribenhos robusta, integrada e progressista após dois séculos de independência, seguindo a visão de Simón Bolívar. A missão representa os interesses dos Estados membros e protege os cidadãos, prestando-lhes assistência durante os processos de integração no Canadá, nos Estados Unidos e no mundo, em colaboração com as embaixadas." },
        { type: "p", text: "A organização atende também os cidadãos estadunidenses de origem latino-americana e caribenha, que representam aproximadamente um terço da população dos Estados Unidos, e atua como ponte entre os Estados membros da CELAC e o mundo." },
      ],
    },
  },

  "vision-celac-2035": {
    body: {
      es: [
        { type: "p", text: "Esta visión, que se materializará mediante la implementación de los proyectos que se detallan a continuación, elaborados por nuestro equipo de expertos, académicos y especialistas en sus respectivos campos, impulsará a los Estados miembros de la CELAC al nivel de los países desarrollados. Recordemos siempre que, por primera vez en 200 años, estamos escribiendo nuestra historia. Algunos de nuestros proyectos son:" },
        { type: "h3", text: "Una línea de tren de alta velocidad" },
        { type: "p", text: "Esto conectará nuestra frontera norte, México, con nuestra frontera sur, Argentina, y modernizará el transporte ferroviario. Planeamos implementar servicios similares en nuestras islas del Caribe, conectando el este con el oeste y el sur con el norte." },
        { type: "h3", text: "Bolívar el Conquistador: modernización del sistema educativo y equipos" },
        { type: "p", text: "Planeamos implementar un sistema educativo avanzado equipado con tecnología de punta. Cada estudiante, desde primaria hasta la universidad, contará con una tableta y una computadora portátil con todos los libros y materiales necesarios, y estará conectado con sus profesores las 24 horas. De esta manera, garantizaremos que nuestra futura juventud tenga igualdad de oportunidades educativas dondequiera que las necesite y dondequiera que se encuentre. Nuestros estudiantes merecen lo mejor y nuestra misión es brindarles las mejores herramientas." },
      ],
      en: [
        { type: "p", text: "This vision, which will materialise through the implementation of the projects detailed below, developed by our team of experts, academics and specialists in their respective fields, will propel CELAC member states to the level of developed countries. Let us always remember that, for the first time in 200 years, we are writing our own history. Some of our projects are:" },
        { type: "h3", text: "A high-speed rail line" },
        { type: "p", text: "This will connect our northern border, Mexico, with our southern border, Argentina, and will modernise rail transport. We plan to implement similar services in our Caribbean islands, connecting east with west and south with north." },
        { type: "h3", text: "Bolívar the Conqueror: modernisation of the education system and equipment" },
        { type: "p", text: "We plan to implement an advanced education system equipped with cutting-edge technology. Every student, from primary school to university, will have a tablet and a laptop with all the necessary books and materials, and will be connected with their teachers 24 hours a day. In this way we will ensure that our future youth have equal educational opportunities wherever they need them and wherever they are. Our students deserve the best and our mission is to give them the best tools." },
      ],
      pt: [
        { type: "p", text: "Esta visão, que se materializará mediante a implementação dos projetos detalhados a seguir, elaborados por nossa equipe de especialistas, acadêmicos e profissionais em seus respectivos campos, impulsionará os Estados membros da CELAC ao nível dos países desenvolvidos. Lembremos sempre que, pela primeira vez em 200 anos, estamos escrevendo nossa história. Alguns de nossos projetos são:" },
        { type: "h3", text: "Uma linha de trem de alta velocidade" },
        { type: "p", text: "Isso conectará nossa fronteira norte, o México, com nossa fronteira sul, a Argentina, e modernizará o transporte ferroviário. Planejamos implementar serviços semelhantes em nossas ilhas do Caribe, conectando o leste com o oeste e o sul com o norte." },
        { type: "h3", text: "Bolívar o Conquistador: modernização do sistema educacional e equipamentos" },
        { type: "p", text: "Planejamos implementar um sistema educacional avançado equipado com tecnologia de ponta. Cada estudante, do ensino fundamental à universidade, contará com um tablet e um computador portátil com todos os livros e materiais necessários, e estará conectado com seus professores 24 horas por dia. Dessa maneira, garantiremos que nossa futura juventude tenha igualdade de oportunidades educacionais onde quer que precise e onde quer que se encontre. Nossos estudantes merecem o melhor e nossa missão é oferecer-lhes as melhores ferramentas." },
      ],
    },
  },

  "iv-cumbre-celac-ue": {
    body: {
      es: [
        { type: "p", text: "Fue copresidida por el presidente del Consejo Europeo, António Costa, y el presidente de Colombia, Gustavo Petro, en su actual función de presidente pro tempore de la CELAC. Los líderes y representantes de ambas regiones reafirmaron la importancia estratégica de una relación birregional basada en valores e intereses compartidos; sociedades resilientes, inclusivas y democráticas; la promoción, protección y respeto de los derechos humanos y las libertades fundamentales; el Estado de derecho; elecciones libres y transparentes; el multilateralismo y la cooperación internacional." },
        { type: "p", text: "Durante la cumbre, los líderes debatieron una amplia gama de temas, entre ellos: la defensa del multilateralismo, el comercio y la inversión, las transiciones ecológica y digital, la cohesión social, la cooperación en materia de seguridad ciudadana, la justicia y la lucha contra la delincuencia organizada transnacional. Al término de la Cumbre se adoptó una declaración conjunta." },
        { type: "p", text: "La Fundación EU-LAC ha apoyado el proceso de la Cumbre mediante el desarrollo de una estrategia centrada en armonizar las agendas, aportar contribuciones sustantivas y promover el diálogo entre las distintas partes interesadas." },
        { type: "p", text: "A lo largo de este año, la organización ha implementado una hoja de ruta robusta, articulando una veintena de actividades alrededor de cinco líneas temáticas que abarcan los principales ámbitos de interés birregional: comercio, inversiones y economías justas; democracia, derechos humanos y estado de derecho; igualdad de género; cambio climático, medio ambiente y financiamiento; y seguridad y economías ilícitas." },
      ],
      en: [
        { type: "p", text: "It was co-chaired by the President of the European Council, António Costa, and the President of Colombia, Gustavo Petro, in his current role as pro tempore president of CELAC. Leaders and representatives of both regions reaffirmed the strategic importance of a bi-regional relationship based on shared values and interests; resilient, inclusive and democratic societies; the promotion, protection and respect of human rights and fundamental freedoms; the rule of law; free and transparent elections; multilateralism and international cooperation." },
        { type: "p", text: "During the summit, leaders discussed a wide range of topics, including: the defence of multilateralism, trade and investment, the green and digital transitions, social cohesion, cooperation on citizen security, justice and the fight against transnational organised crime. A joint declaration was adopted at the end of the Summit." },
        { type: "p", text: "The EU-LAC Foundation supported the Summit process by developing a strategy focused on harmonising agendas, making substantive contributions and promoting dialogue among the different stakeholders." },
        { type: "p", text: "Throughout this year, the organisation implemented a robust roadmap, articulating some twenty activities around five thematic lines covering the main areas of bi-regional interest: trade, investment and fair economies; democracy, human rights and the rule of law; gender equality; climate change, environment and financing; and security and illicit economies." },
      ],
      pt: [
        { type: "p", text: "Foi copresidida pelo presidente do Conselho Europeu, António Costa, e pelo presidente da Colômbia, Gustavo Petro, em sua atual função de presidente pro tempore da CELAC. Os líderes e representantes de ambas as regiões reafirmaram a importância estratégica de uma relação birregional baseada em valores e interesses compartilhados; sociedades resilientes, inclusivas e democráticas; a promoção, proteção e respeito dos direitos humanos e das liberdades fundamentais; o Estado de direito; eleições livres e transparentes; o multilateralismo e a cooperação internacional." },
        { type: "p", text: "Durante a cúpula, os líderes debateram uma ampla gama de temas, entre eles: a defesa do multilateralismo, o comércio e o investimento, as transições ecológica e digital, a coesão social, a cooperação em matéria de segurança cidadã, a justiça e o combate à criminalidade organizada transnacional. Ao término da Cúpula foi adotada uma declaração conjunta." },
        { type: "p", text: "A Fundação EU-LAC apoiou o processo da Cúpula mediante o desenvolvimento de uma estratégia centrada em harmonizar as agendas, oferecer contribuições substantivas e promover o diálogo entre as distintas partes interessadas." },
        { type: "p", text: "Ao longo deste ano, a organização implementou um roteiro robusto, articulando uma vintena de atividades em torno de cinco linhas temáticas que abrangem os principais âmbitos de interesse birregional: comércio, investimentos e economias justas; democracia, direitos humanos e estado de direito; igualdade de gênero; mudanças climáticas, meio ambiente e financiamento; e segurança e economias ilícitas." },
      ],
    },
  },

  "celac-international-trading-consulting": {
    signature: "Zeınab Kaalaf — Copresidenta",
    body: {
      es: [
        { type: "p", text: "El 5 de noviembre de 2013 se constituyó la primera empresa de la CELAC, denominada CELAC International Trading, Project Management and Consulting, con el objetivo de promover y proteger los intereses económicos de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC)." },
        { type: "p", text: "Nuestra empresa organizará misiones comerciales y exposiciones para que las empresas de los Estados miembros de la CELAC puedan identificar oportunidades de comercio internacional y promover sus productos y servicios, atrayendo así inversión a las industrias de los sectores económicos estratégicos de la CELAC." },
        { type: "p", text: "Nuestro objetivo es presentar a nuestras empresas la estructura productiva y otras iniciativas selectas de la CELAC, diseñadas para fortalecer su gran logro económico. El éxito económico de Brasil es una inspiración para los demás miembros de la comunidad." },
        { type: "p", text: "Buscamos atraer inversión extranjera directa a la CELAC y destinar recursos a las industrias de relevancia estratégica para su desarrollo y para la competitividad de las empresas y de la propia comunidad." },
        { type: "p", text: "El siguiente paso es establecer ferias y espacios de exposición permanentes, abiertos todo el año, en Estambul, Mascate, Medina, Los Ángeles, Nueva York, Miami, Montreal, Toronto, Astaná, Taskent, Seúl, Moscú, El Cairo, Islamabad, Taipéi, Urumchi, Pekín, Kuala Lumpur, Tokio, Adís Abeba, Berlín, Roma y La Valeta." },
      ],
      en: [
        { type: "p", text: "On 5 November 2013 the first CELAC company was incorporated, named CELAC International Trading, Project Management and Consulting, with the aim of promoting and protecting the economic interests of the Community of Latin American and Caribbean States (CELAC)." },
        { type: "p", text: "Our company will organise trade missions and exhibitions so that companies from CELAC member states can identify international trade opportunities and promote their products and services, thereby attracting investment to industries in CELAC strategic economic sectors." },
        { type: "p", text: "Our aim is to present to our companies the productive structure and other select CELAC initiatives, designed to strengthen its great economic achievement. Brazil economic success is an inspiration for the other members of the community." },
        { type: "p", text: "We seek to attract foreign direct investment to CELAC and to allocate resources to industries of strategic relevance for its development and for the competitiveness of companies and of the community itself." },
        { type: "p", text: "The next step is to establish permanent fairs and exhibition spaces, open all year round, in Istanbul, Muscat, Medina, Los Angeles, New York, Miami, Montreal, Toronto, Astana, Tashkent, Seoul, Moscow, Cairo, Islamabad, Taipei, Urumqi, Beijing, Kuala Lumpur, Tokyo, Addis Ababa, Berlin, Rome and Valletta." },
      ],
      pt: [
        { type: "p", text: "Em 5 de novembro de 2013 constituiu-se a primeira empresa da CELAC, denominada CELAC International Trading, Project Management and Consulting, com o objetivo de promover e proteger os interesses econômicos da Comunidade de Estados Latino-Americanos e Caribenhos (CELAC)." },
        { type: "p", text: "Nossa empresa organizará missões comerciais e exposições para que as empresas dos Estados membros da CELAC possam identificar oportunidades de comércio internacional e promover seus produtos e serviços, atraindo assim investimento para as indústrias dos setores econômicos estratégicos da CELAC." },
        { type: "p", text: "Nosso objetivo é apresentar às nossas empresas a estrutura produtiva e outras iniciativas selecionadas da CELAC, concebidas para fortalecer sua grande conquista econômica. O êxito econômico do Brasil é uma inspiração para os demais membros da comunidade." },
        { type: "p", text: "Buscamos atrair investimento estrangeiro direto para a CELAC e destinar recursos às indústrias de relevância estratégica para seu desenvolvimento e para a competitividade das empresas e da própria comunidade." },
        { type: "p", text: "O passo seguinte é estabelecer feiras e espaços de exposição permanentes, abertos o ano todo, em Istambul, Mascate, Medina, Los Angeles, Nova York, Miami, Montreal, Toronto, Astana, Tashkent, Seul, Moscou, Cairo, Islamabad, Taipé, Urumqi, Pequim, Kuala Lumpur, Tóquio, Adis Abeba, Berlim, Roma e Valeta." },
      ],
    },
  },

  "comunidad-siglo-xxi": {
    body: {
      es: [
        { type: "p", text: "Nuestra organización es un mecanismo creado para representar, promover y proteger los intereses de los miembros de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC) y sus ciudadanos." },
        { type: "p", text: "Este mecanismo y el proyecto se inspiran en el noble comandante Hugo Chávez Frías de Venezuela, quien dedicó su vida a la prosperidad y el bienestar de los pueblos de América Latina y el Caribe, y en Fidel Castro Ruz, uno de los más grandes humanistas que el mundo ha visto." },
        { type: "p", text: "Creemos que la CELAC trasciende las ideas políticas convencionales de izquierda y derecha. Representa la justicia social y la igualdad deseadas por y para los pueblos de esta comunidad de naciones, y esperamos que sirva de modelo para los pueblos de otras regiones. Podemos seguir descubriendo vida en otros planetas, pero no tenemos por qué destruir la vida en nuestra Madre Tierra. No queremos ver a los habitantes de nuestras comunidades necesitados de ropa y alimentos básicos, cuando bajo sus tierras abundan los minerales y los recursos naturales. Nuestros proyectos se crean para contribuir a mejorar la vida de los ciudadanos de la CELAC, tanto dentro como fuera de la zona de la CELAC." },
        { type: "p", text: "El mecanismo de CELAC International reúne a la Misión CELAC, la ONG de la CELAC creada oficialmente en abril de 2012, y a CELAC International, empresa de comercio, gestión de proyectos y consultoría, creada en 2013 para representar, proteger y apoyar mejor los intereses de la Comunidad de Estados Latinoamericanos y Caribeños y sus ciudadanos, así como a Médicos por la Humanidad Internacional, creada por médicos egresados de la Escuela de Medicina de Cuba." },
        { type: "p", text: "Para promover y proteger los intereses de la CELAC, trabajaremos en conjunto con la administración oficial de la CELAC, incluyendo nuestras misiones diplomáticas en los países donde prestaremos nuestros servicios. Para concretar nuestra visión, estableceremos oficinas en diversos países, comenzando por Canadá, Estados Unidos, Turquía, Sultanato de Omán, Corea, Arabia Saudita, Irán, Federación Rusa, China y Etiopía. Nuestras sedes estarán ubicadas en La Habana (Cuba) y Caracas (Venezuela)." },
        { type: "p", text: "A través de nuestras oficinas, brindaremos información y asistencia a nuestros ciudadanos. Estaremos con y para nuestros ciudadanos dondequiera que estén. Nuestro plan consiste en llevar a la Comunidad de Estados Latinoamericanos y Caribeños al nivel de las naciones avanzadas mediante proyectos de desarrollo que están siendo preparados por nuestros expertos y especialistas en sus respectivos campos, como la salud y la infraestructura." },
        { type: "p", text: "Haremos del siglo XXI el «Siglo de la Comunidad de Estados Latinoamericanos y Caribeños». Aspiramos a ser un modelo de esperanza, inspiración y motivación para todas las naciones en desarrollo. Nuestra política es: ¡Si ganamos, ganan! Si ganan, ganamos. Estamos listos y encantados de compartir nuestros éxitos y experiencias con todas las naciones, con respeto, sin importar su origen étnico, religioso o social. Los esperamos con los brazos abiertos para que descubran nuestra comunidad. Bienvenidos a nuestra comunidad." },
      ],
      en: [
        { type: "p", text: "Our organisation is a mechanism created to represent, promote and protect the interests of the members of the Community of Latin American and Caribbean States (CELAC) and their citizens." },
        { type: "p", text: "This mechanism and the project are inspired by the noble commander Hugo Chávez Frías of Venezuela, who devoted his life to the prosperity and well-being of the peoples of Latin America and the Caribbean, and by Fidel Castro Ruz, one of the greatest humanists the world has seen." },
        { type: "p", text: "We believe that CELAC transcends conventional political ideas of left and right. It represents the social justice and equality desired by and for the peoples of this community of nations, and we hope it will serve as a model for the peoples of other regions. We may keep discovering life on other planets, but we have no reason to destroy life on our Mother Earth. We do not want to see the inhabitants of our communities in need of clothing and basic food, when beneath their lands minerals and natural resources abound. Our projects are created to help improve the lives of CELAC citizens, both inside and outside the CELAC area." },
        { type: "p", text: "The CELAC International mechanism brings together CELAC Mission, the CELAC NGO officially created in April 2012, and CELAC International, a trade, project management and consulting company created in 2013 to better represent, protect and support the interests of the Community of Latin American and Caribbean States and its citizens, as well as Doctors for Humanity International, created by doctors who graduated from the Cuban School of Medicine." },
        { type: "p", text: "To promote and protect CELAC interests, we will work together with the official CELAC administration, including our diplomatic missions in the countries where we will provide our services. To realise our vision, we will establish offices in various countries, starting with Canada, the United States, Turkey, the Sultanate of Oman, Korea, Saudi Arabia, Iran, the Russian Federation, China and Ethiopia. Our headquarters will be located in Havana (Cuba) and Caracas (Venezuela)." },
        { type: "p", text: "Through our offices, we will provide information and assistance to our citizens. We will be with and for our citizens wherever they are. Our plan is to bring the Community of Latin American and Caribbean States to the level of advanced nations through development projects being prepared by our experts and specialists in their respective fields, such as health and infrastructure." },
        { type: "p", text: "We will make the 21st century the “Century of the Community of Latin American and Caribbean States”. We aspire to be a model of hope, inspiration and motivation for all developing nations. Our policy is: if we win, you win! If you win, we win. We are ready and delighted to share our successes and experiences with all nations, with respect, regardless of their ethnic, religious or social origin. We await you with open arms so that you may discover our community. Welcome to our community." },
      ],
      pt: [
        { type: "p", text: "Nossa organização é um mecanismo criado para representar, promover e proteger os interesses dos membros da Comunidade de Estados Latino-Americanos e Caribenhos (CELAC) e seus cidadãos." },
        { type: "p", text: "Este mecanismo e o projeto inspiram-se no nobre comandante Hugo Chávez Frías da Venezuela, que dedicou sua vida à prosperidade e ao bem-estar dos povos da América Latina e do Caribe, e em Fidel Castro Ruz, um dos maiores humanistas que o mundo já viu." },
        { type: "p", text: "Acreditamos que a CELAC transcende as ideias políticas convencionais de esquerda e direita. Representa a justiça social e a igualdade desejadas pelos e para os povos desta comunidade de nações, e esperamos que sirva de modelo para os povos de outras regiões. Podemos seguir descobrindo vida em outros planetas, mas não temos por que destruir a vida em nossa Mãe Terra. Não queremos ver os habitantes de nossas comunidades necessitados de roupa e alimentos básicos, quando sob suas terras abundam os minerais e os recursos naturais. Nossos projetos são criados para contribuir a melhorar a vida dos cidadãos da CELAC, tanto dentro como fora da zona da CELAC." },
        { type: "p", text: "O mecanismo da CELAC International reúne a Missão CELAC, a ONG da CELAC criada oficialmente em abril de 2012, e a CELAC International, empresa de comércio, gestão de projetos e consultoria, criada em 2013 para representar, proteger e apoiar melhor os interesses da Comunidade de Estados Latino-Americanos e Caribenhos e seus cidadãos, assim como Médicos pela Humanidade Internacional, criada por médicos formados na Escola de Medicina de Cuba." },
        { type: "p", text: "Para promover e proteger os interesses da CELAC, trabalharemos em conjunto com a administração oficial da CELAC, incluindo nossas missões diplomáticas nos países onde prestaremos nossos serviços. Para concretizar nossa visão, estabeleceremos escritórios em diversos países, começando por Canadá, Estados Unidos, Turquia, Sultanato de Omã, Coreia, Arábia Saudita, Irã, Federação Russa, China e Etiópia. Nossas sedes estarão localizadas em Havana (Cuba) e Caracas (Venezuela)." },
        { type: "p", text: "Através de nossos escritórios, ofereceremos informação e assistência aos nossos cidadãos. Estaremos com e para nossos cidadãos onde quer que estejam. Nosso plano consiste em levar a Comunidade de Estados Latino-Americanos e Caribenhos ao nível das nações avançadas mediante projetos de desenvolvimento que estão sendo preparados por nossos especialistas em seus respectivos campos, como a saúde e a infraestrutura." },
        { type: "p", text: "Faremos do século XXI o «Século da Comunidade de Estados Latino-Americanos e Caribenhos». Aspiramos a ser um modelo de esperança, inspiração e motivação para todas as nações em desenvolvimento. Nossa política é: se ganhamos, ganham! Se ganham, ganhamos. Estamos prontos e encantados em compartilhar nossos êxitos e experiências com todas as nações, com respeito, sem importar sua origem étnica, religiosa ou social. Esperamos vocês de braços abertos para que descubram nossa comunidade. Bem-vindos à nossa comunidade." },
      ],
    },
  },

  /* En el original el cargo es "Presidente conjunto", no "Presidente". */
  "programa-hambre-cero": {
    signature: "Juana S. Jerena — Presidente conjunto",
  },
};
