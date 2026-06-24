/**
 * Gedeelde content voor de /new design-varianten.
 * Copy komt uit de oude site (frontend/src/locales/nl.json) — niets verzonnen.
 */

export const VIDEOS = {
  /** Veo 3.1 — macro spaan → badkamer-reveal. Dense (-g 1), voor scrub (atelier). */
  hero: '/videos/new-hero.mp4',
  /** Lichte loop-versie van de hero (normale GOP + faststart) — voor afspelen, niet scrubben. */
  heroLoop: '/videos/new-hero-web.mp4',
  /** Seedance 2 — ambient licht-drift over afgewerkte wand. Naadloze loop. */
  loop: '/videos/new-loop.mp4',
  /** Seedance 2 — documentaire spaanslag-vignette, dunne laag. */
  craft: '/videos/new-craft.mp4',
  /** Take III — gouden-uur troffel → badkuip-reveal. Dense (-g 1) voor desktop-scrub. */
  vakwerk: '/videos/movie-3.mp4',
  /** Lichte loop-versie van take III — voor de mobiele afspeel-fallback. */
  vakwerkLoop: '/videos/movie-3-web.mp4',
  /** Take I — documentaire ambacht. Dense versie (scrub op /movie-1). */
  ambacht: '/videos/movie-1.mp4',
  /** Lichte loop-versie van take I — voor de slot-loop. */
  ambachtLoop: '/videos/movie-1-web.mp4',
};

export const DIENSTEN = [
  {
    nr: '01',
    naam: 'Vloeren',
    kop: 'Naadloze vloeren die generaties meegaan',
    tekst:
      'Geen voegen die verkleuren, geen naden die opkomen. Geschikt voor vloerverwarming, 2–3 mm laagdikte, 20+ jaar levensduur.',
    img: '/images/services/floors/floors-1.webp',
    thumb: '/images/services/floors/floors-1-thumb.webp',
  },
  {
    nr: '02',
    naam: 'Wanden',
    kop: 'Wanden die een ruimte transformeren',
    tekst:
      'Een warm, texturig statement zonder voegen. Het materiaal absorbeert licht op een manier die de ruimte diepte geeft.',
    img: '/images/services/walls/walls-1.webp',
    thumb: '/images/services/walls/walls-1-thumb.webp',
  },
  {
    nr: '03',
    naam: 'Trappen',
    kop: 'De trap als eyecatcher van je interieur',
    tekst:
      'Naadloos aansluitend op vloer en wand. Antislip standaard inbegrepen, bestand tegen intensief gebruik.',
    img: '/images/services/stairs/stairs-1.webp',
    thumb: '/images/services/stairs/stairs-1-thumb.webp',
  },
  {
    nr: '04',
    naam: 'Badkamers',
    kop: 'De voegvrije badkamer die je altijd wilde',
    tekst:
      'Geen voegen, geen schimmel, geen onderhoud. 100% waterproof — vloer en wand in één doorlopend materiaal.',
    img: '/images/services/bathrooms/bathrooms-1.webp',
    thumb: '/images/services/bathrooms/bathrooms-1-thumb.webp',
  },
];

/**
 * Materialen-index voor de STUDIO-variant — vlak datasheet-formaat.
 * De korte velden (dikte/karakter/toepassing/img) voeden het datasheet op
 * de homepage; de rijke velden (intro/specs/pluspunten/opbouw/galerij)
 * voeden de detailpagina op /materialen/[slug].
 *
 * Bron: studiomicrobeton.nl + de systeembladen/brochures van onze vaste
 * Nederlandse producent. Productnamen van de fabrikant worden bewust niet
 * genoemd; de systemen zijn generiek (white-label) omschreven.
 */
export const MATERIALEN = [
  {
    slug: 'microbeton',
    nr: '01',
    naam: 'Microbeton',
    familie: 'Decoratief — wonen & interieur',
    dikte: '2–3 mm',
    karakter: 'Wolkige spaanslag, mat mineraal',
    toepassing: 'Vloer · wand · trap · meubel',
    img: '/images/services/walls/walls-1-thumb.webp',
    hero: { src: '/images/services/walls/walls-1.webp', alt: 'Handgespaande microbeton wand met wolkige spaanslag' },
    intro:
      'De signatuur van het huis: een doorlopende minerale huid, met de hand opgebouwd in dunne lagen van twee à drie millimeter. Elke spaanslag blijft zichtbaar — geen twee vlakken zijn gelijk.',
    specs: [
      { term: 'Laagdikte', waarde: '2–3 mm' },
      { term: 'Finish', waarde: 'Mat tot zijdemat, geseald' },
      { term: 'Ondergrond', waarde: 'Tegels · beton · hout · gips' },
      { term: 'Kleuren', waarde: '50+ tinten, op maat' },
      { term: 'Beloopbaar', waarde: 'Voorzichtig na 48 uur' },
    ],
    pluspunten: [
      { kop: 'Naadloos & voegvrij', tekst: 'Eén doorlopend oppervlak van vloer naar wand naar trap — zonder een enkele voeg.' },
      { kop: 'Slechts 2–3 mm', tekst: 'Minimale opbouw, dus ideaal bij renovatie. Geen sloop- of breekwerk nodig.' },
      { kop: 'Op vloerverwarming', tekst: 'Geleidt warmte uitstekend en blijft stabiel bij temperatuurwisselingen.' },
      { kop: 'Met de hand gespaand', tekst: 'De tekening ontstaat onder de spaan — een uniek origineel, nooit te kopiëren.' },
      { kop: '20+ jaar mee', tekst: 'Uitzonderlijk slijtvast bij correct onderhoud. Een investering voor generaties.' },
      { kop: '50+ kleuren', tekst: 'Van warme aardetinten tot koel industrieel grijs — altijd op maat gemengd.' },
    ],
    opbouw: [
      { naam: 'Hechtprimer', tekst: 'Bereidt de ondergrond voor en zorgt voor blijvende hechting.' },
      { naam: 'Minerale grondlaag', tekst: 'De basislaag die het reliëf en de vlakheid bepaalt.' },
      { naam: 'Twee afwerklagen', tekst: 'Met de hand gespaand — hier ontstaat de wolkige tekening.' },
      { naam: 'Beschermende sealer', tekst: 'Twee transparante lagen die het oppervlak afsluiten en beschermen.' },
    ],
    toepassingen: ['Woonvloeren', 'Wanden', 'Trappen', 'Meubel & bladen', 'Vensterbanken'],
    galerij: [
      { src: '/images/portfolio/project-8.webp', alt: 'Microbeton accentwand in een slaapkamer' },
      { src: '/images/collections/signature/signature-1.webp', alt: 'Detail van gespaand microbeton oppervlak' },
      { src: '/images/services/stairs/stairs-1.webp', alt: 'Naadloze microbeton trap' },
    ],
    seo: {
      title: 'Microbeton — naadloze, handgespaande betonlook | Studio Microbeton',
      beschrijving:
        'Microbeton: een naadloze, voegvrije minerale afwerking van 2–3 mm voor vloeren, wanden, trappen en meubel. Met de hand gespaand, op vloerverwarming, 50+ tinten.',
    },
  },
  {
    slug: 'microcement',
    nr: '02',
    naam: 'Microcement',
    familie: 'Decoratief — wonen & interieur',
    dikte: '± 2 mm',
    karakter: 'Zijdemat, 100% waterdicht te sealen',
    toepassing: 'Badkamer · direct over tegels',
    img: '/images/services/bathrooms/bathrooms-1-thumb.webp',
    hero: { src: '/images/services/bathrooms/bathrooms-1.webp', alt: 'Voegvrije microcement badkamer in greige' },
    intro:
      'Verfijnder dan beton, even robuust. Twee millimeter direct over je bestaande tegels of dekvloer — dé badkamerkeuze zonder hak- en breekwerk. Wand, vloer en wastafelblad in één doorlopende, waterdichte huid.',
    specs: [
      { term: 'Laagdikte', waarde: '± 2 mm' },
      { term: 'Finish', waarde: 'Zijdemat, waterdicht geseald' },
      { term: 'Ondergrond', waarde: 'Direct over tegels & dekvloer' },
      { term: 'Waterdicht', waarde: '100% — schimmelbestendig' },
      { term: 'Beloopbaar', waarde: 'Voorzichtig na 48 uur' },
    ],
    pluspunten: [
      { kop: '100% waterdicht', tekst: 'Voor douches, badkamers en natte ruimtes. Voegvrij, dus geen schimmel in de naden.' },
      { kop: 'Over bestaande tegels', tekst: 'Wordt rechtstreeks over je tegels aangebracht — geen sloop, geen puin, geen weken werk.' },
      { kop: 'Slechts ± 2 mm', tekst: 'Nauwelijks hoogteverschil bij deuren en aansluitingen.' },
      { kop: 'Hygiënisch & strak', tekst: 'Een poriënarm, doorlopend oppervlak dat eenvoudig schoon te houden is.' },
      { kop: 'Doorlopend beeld', tekst: 'Wand, vloer en blad in dezelfde kleur en textuur — rustig en tijdloos.' },
      { kop: 'Op vloerverwarming', tekst: 'Geleidt warmte en blijft stabiel — comfortabel warm onder de voet.' },
    ],
    opbouw: [
      { naam: 'Hechtbrug', tekst: 'Primer die op de bestaande tegels of dekvloer aangrijpt.' },
      { naam: 'Wapeningslaag', tekst: 'Met glasvlies ingebed, voor een scheurvrije ondergrond.' },
      { naam: 'Twee afwerklagen', tekst: 'De fijne microcement-lagen die kleur en textuur dragen.' },
      { naam: 'Waterdichte sealer', tekst: 'Tweecomponenten, in twee lagen — 100% waterbestendig.' },
    ],
    toepassingen: ['Badkamers', 'Inloopdouches', 'Keukens', 'Wastafelbladen', 'Toiletten'],
    galerij: [
      { src: '/images/portfolio/project-3.webp', alt: 'Microcement badkamer, wand en blad voegvrij' },
      { src: '/images/services/bathrooms/bathrooms-2.webp', alt: 'Detail van een waterdichte microcement douche' },
      { src: '/images/collections/pure/pure-1.webp', alt: 'Licht, zijdemat microcement oppervlak' },
    ],
    seo: {
      title: 'Microcement badkamer — 100% waterdicht, over tegels | Studio Microbeton',
      beschrijving:
        'Microcement: een waterdichte, voegvrije afwerking van ± 2 mm, rechtstreeks over bestaande tegels. Ideaal voor badkamers en douches — geen sloopwerk, geen schimmel.',
    },
  },
  {
    slug: 'microbeton-lava',
    nr: '03',
    naam: 'Microbeton Lava',
    familie: 'Decoratief — statement',
    dikte: '3–4 mm',
    karakter: 'Grof reliëf, oersterk & krasvast',
    toepassing: 'Accentwand · sterk belaste vloer',
    img: '/images/collections/signature/signature-1-thumb.webp',
    hero: { src: '/images/collections/signature/signature-1.webp', alt: 'Microbeton Lava wand met grof, vulkanisch reliëf' },
    intro:
      'Fijne minerale korrel, gebonden met een epoxyhars: het resultaat is een oersterke, uitzonderlijk krasbestendige laag met een voelbaar, vulkanisch reliëf. Voor vlakken die je niet alleen ziet, maar ook voelt.',
    specs: [
      { term: 'Laagdikte', waarde: '3–4 mm' },
      { term: 'Finish', waarde: 'Mat, krasbestendig (PU-toplaag)' },
      { term: 'Ondergrond', waarde: 'Beton · cement · anhydriet' },
      { term: 'Reliëf', waarde: 'Grof, voelbaar' },
      { term: 'Belasting', waarde: 'Zwaar — vloer & wand' },
    ],
    pluspunten: [
      { kop: 'Oersterk & krasbestendig', tekst: 'De epoxygebonden korrel maakt dit het robuustste systeem in het gamma.' },
      { kop: 'Voelbaar reliëf', tekst: 'Een ruwe, tactiele textuur die licht vangt en diepte aan een ruimte geeft.' },
      { kop: 'Matte PU-toplaag', tekst: 'Hoge slijtweerstand en een rustige, matte afwerking als sluitstuk.' },
      { kop: 'Vrijwel elke ondergrond', tekst: 'Met de juiste egalisatie geschikt op beton, cement én calciumsulfaat.' },
      { kop: 'Vloer én accentwand', tekst: 'Van zwaar belaste vloeren tot haardpartijen en statementwanden.' },
      { kop: 'Binnen én buiten', tekst: 'Ook geschikt voor gevels en buitenvlakken — weer- en slijtbestendig.' },
    ],
    opbouw: [
      { naam: 'Universele primer', tekst: 'Hechtlaag, afgestemd op de ondergrond.' },
      { naam: 'Egaliserende laag', tekst: 'Vlakke basis voor beton- of calciumsulfaatgebonden vloeren.' },
      { naam: 'Hechtprimer met korrel', tekst: 'De ingestrooide korrel verankert de Lava-basis.' },
      { naam: 'Grove basislaag', tekst: 'Bepaalt het karakteristieke, grove reliëf.' },
      { naam: 'Fijne toplaag', tekst: 'Verfijnt de textuur tot de definitieve tekening.' },
      { naam: 'Matte PU-coating', tekst: 'Beschermt met een hoge slijtweerstand en matte uitstraling.' },
    ],
    toepassingen: ['Accentwanden', 'Sterk belaste vloeren', 'Haardpartijen', 'Horeca', 'Gevels'],
    galerij: [
      { src: '/images/collections/signature/signature-2.webp', alt: 'Detail van het grove Lava-reliëf' },
      { src: '/images/portfolio/project-6.webp', alt: 'Minerale gevel met Lava-textuur' },
      { src: '/images/collections/signature/signature-3.webp', alt: 'Lava-wand bij strijklicht' },
    ],
    seo: {
      title: 'Microbeton Lava — oersterk, krasvast, grof reliëf | Studio Microbeton',
      beschrijving:
        'Microbeton Lava: epoxygebonden minerale korrel met een voelbaar, vulkanisch reliëf. Oersterk en krasbestendig met matte PU-toplaag — voor accentwanden en zwaar belaste vloeren.',
    },
  },
  {
    slug: 'gietvloer',
    nr: '04',
    naam: 'Gietvloer',
    familie: 'Decoratief — wonen & interieur',
    dikte: '3–4 mm',
    karakter: 'Elastisch, warm, geluiddempend (PU)',
    toepassing: 'Woonruimtes · keukens',
    img: '/images/services/floors/floors-1-thumb.webp',
    hero: { src: '/images/services/floors/floors-1.webp', alt: 'Naadloze PU-gietvloer in een woonkeuken' },
    intro:
      'Eén naadloos, vloeiend oppervlak van muur tot muur. Licht verend en warm onder blote voeten — een polyurethaan-gietvloer dempt geluid en geleidt vloerverwarming moeiteloos.',
    specs: [
      { term: 'Laagdikte', waarde: '3–4 mm' },
      { term: 'Finish', waarde: 'Naadloos, mat tot zijdeglans' },
      { term: 'Ondergrond', waarde: 'Vlakke dekvloer of beton' },
      { term: 'Comfort', waarde: 'Verend & geluiddempend' },
      { term: 'Vloerverwarming', waarde: 'Uitstekend geschikt' },
    ],
    pluspunten: [
      { kop: 'Naadloos van muur tot muur', tekst: 'Eén egaal, doorlopend vlak zonder voegen of overgangen.' },
      { kop: 'Elastisch & comfortabel', tekst: 'De PU-basis geeft licht mee — aangenaam om op te staan en te lopen.' },
      { kop: 'Geluiddempend', tekst: 'Demt contactgeluid, een merkbaar verschil in open woonruimtes.' },
      { kop: 'Warm op vloerverwarming', tekst: 'Geleidt warmte snel en gelijkmatig — comfortabel warm onder de voet.' },
      { kop: 'Strak en slijtvast', tekst: 'Een egaal beeld dat jarenlang intensief gebruik doorstaat.' },
      { kop: 'Op maat in kleur', tekst: 'Egaal in vrijwel elke RAL-tint, met een matte tot zijdeglans afwerking.' },
    ],
    opbouw: [
      { naam: 'Primer & uitvlakken', tekst: 'Hechtlaag en het egaliseren van de ondergrond.' },
      { naam: 'PU-grondlaag', tekst: 'De elastische basis die comfort en demping draagt.' },
      { naam: 'PU-gietlaag', tekst: 'De gekleurde, vloeiende toplaag — naadloos uitgevloeid.' },
      { naam: 'Transparante sealer', tekst: 'Beschermende PU-afwerking, mat of zijdeglans.' },
    ],
    toepassingen: ['Woonkamers', 'Keukens', 'Slaapkamers', 'Kantoren', 'Winkels'],
    galerij: [
      { src: '/images/portfolio/project-1.webp', alt: 'Woonkeuken met naadloze gietvloer' },
      { src: '/images/services/floors/floors-2.webp', alt: 'Egale PU-gietvloer bij strijklicht' },
      { src: '/images/collections/balance/balance-1.webp', alt: 'Warme, rustige gietvloer-tint' },
    ],
    seo: {
      title: 'PU-gietvloer — naadloos, warm, geluiddempend | Studio Microbeton',
      beschrijving:
        'Gietvloer in polyurethaan: een naadloze, verende en geluiddempende vloer van 3–4 mm, ideaal op vloerverwarming. Voor woonkamers, keukens en kantoren.',
    },
  },
  {
    slug: 'epoxy',
    nr: '05',
    naam: 'Epoxy',
    familie: 'Technisch — zakelijk & industrie',
    dikte: '2–3 mm',
    karakter: 'Hard, vloeistofdicht, chemisch resistent',
    toepassing: 'Magazijn · werkplaats · horeca',
    img: '/images/portfolio/project-7-thumb.webp',
    hero: { src: '/images/portfolio/project-7.webp', alt: 'Naadloze epoxyvloer in een bedrijfshal' },
    intro:
      'Gebouwd voor zwaar gebruik en strak onder fel licht. Een naadloze, vloeistofdichte coating die jaren intensief verkeer doorstaat — desgewenst als snelhardend één-dag-systeem, zodat je bedrijf nauwelijks stilstaat.',
    specs: [
      { term: 'Laagdikte', waarde: '2–3 mm' },
      { term: 'Finish', waarde: 'Mat of zijdeglans · antislip optie' },
      { term: 'Ondergrond', waarde: 'Beton & cementdekvloer' },
      { term: 'Kleuren', waarde: 'Alle RAL/NCS · met of zonder vlokken' },
      { term: 'Beloopbaar', waarde: 'Snelhardend: zelfde dag (EDS)' },
    ],
    pluspunten: [
      { kop: 'Haast onverslijtbaar', tekst: 'Gemaakt voor heftrucks, machines en continu verkeer — jarenlang.' },
      { kop: 'Vloeistofdicht & naadloos', tekst: 'Een gesloten oppervlak zonder naden, eenvoudig te reinigen.' },
      { kop: 'Chemisch resistent', tekst: 'Bestand tegen oliën, zuren en de meeste bedrijfschemicaliën.' },
      { kop: 'Snel beloopbaar', tekst: 'Als één-dag-systeem in een halve dag gebruiksklaar — minimale stilstand.' },
      { kop: 'Antislip leverbaar', tekst: 'Stroefheid op maat, afgestemd op de werkomgeving.' },
      { kop: 'Reukloos & kleurvast', tekst: 'Oplosmiddelvrij aan te brengen en kleurvast onder UV.' },
    ],
    opbouw: [
      { naam: 'Hechtprimer', tekst: 'Sluit de betonondergrond af en borgt de hechting.' },
      { naam: 'Gekleurde basislaag', tekst: 'De dragende coating — met of zonder decoratieve vlokken.' },
      { naam: 'Transparante toplaag', tekst: 'Eerste beschermlaag over de kleur.' },
      { naam: 'Tweede toplaag', tekst: 'Sluitlaag in mat of zijdeglans, antislip naar wens.' },
    ],
    toepassingen: ['Magazijnen', 'Werkplaatsen', 'Garages', 'Horeca', 'Showrooms', 'Parkeerdekken'],
    galerij: [
      { src: '/images/collections/pro/pro-1.webp', alt: 'Strakke industriële epoxyvloer' },
      { src: '/images/collections/pro/pro-3.webp', alt: 'Epoxy coating met fijne vlokstructuur' },
      { src: '/images/services/floors/floors-3.webp', alt: 'Egale, vloeistofdichte bedrijfsvloer' },
    ],
    seo: {
      title: 'Epoxyvloer — vloeistofdicht, slijtvast, zakelijk | Studio Microbeton',
      beschrijving:
        'Epoxyvloer voor zakelijk en industrie: naadloos, vloeistofdicht en chemisch resistent. Leverbaar als snelhardend één-dag-systeem — magazijnen, werkplaatsen, horeca en showrooms.',
    },
  },
  {
    slug: 'pmma',
    nr: '06',
    naam: 'PMMA-snelvloer',
    familie: 'Technisch — zakelijk & industrie',
    dikte: '3–4 mm',
    karakter: 'Snelhardend, hygiënisch, zwaar belastbaar',
    toepassing: 'Keukens · labs · voeding',
    img: '/images/collections/pro/pro-2-thumb.webp',
    hero: { src: '/images/collections/pro/pro-2.webp', alt: 'Naadloze, hygiënische PMMA-vloer in een productieruimte' },
    intro:
      'Als stilstand geen optie is. Een PMMA-vloer hardt in uren uit — zelfs bij vrieskou — en gaat dezelfde dag weer onder zware belasting. Naadloos, hygiënisch en bestand tegen vet, zuur en chemicaliën: vandaar bijna de standaard in de voedingsindustrie.',
    specs: [
      { term: 'Laagdikte', waarde: '3–4 mm' },
      { term: 'Finish', waarde: 'Naadloos · antislip · mat' },
      { term: 'Ondergrond', waarde: 'Beton — ook bij lage temperatuur' },
      { term: 'Kleuren', waarde: '30 mixen, of op maat' },
      { term: 'Beloopbaar', waarde: 'Zelfde dag (één-dag-systeem)' },
    ],
    pluspunten: [
      { kop: 'Korte uithardingstijd', tekst: 'Meerdere lagen op één dag — in korte tijd een complete nieuwe vloer.' },
      { kop: 'Ook bij vrieskou', tekst: 'Aan te brengen bij extreem lage temperaturen, waar andere systemen stoppen.' },
      { kop: 'Hygiënisch & poriënvrij', tekst: 'Naadloos en glad — eenvoudig te reinigen, ideaal voor voeding en labs.' },
      { kop: 'Vet-, zuur- & chemiebestendig', tekst: 'Bestand tegen chemische vervuiling, vet en zuur.' },
      { kop: 'Snel & zwaar belastbaar', tekst: 'Doorstaat heftrucks en intensief verkeer, vrijwel direct na uitharding.' },
      { kop: 'Slijtvast & UV-bestendig', tekst: 'Antislip leverbaar en kleurvast, ook bij daglicht.' },
    ],
    opbouw: [
      { naam: 'PMMA-primer', tekst: 'Hecht ook bij lage temperatuur op de betonondergrond.' },
      { naam: 'Basislaag', tekst: 'PMMA-hars, optioneel met scheuroverbruggend membraan.' },
      { naam: 'Instrooilaag', tekst: 'Gekleurde kwartsen bepalen kleur, dessin en stroefheid.' },
      { naam: 'Transparante toplaag', tekst: 'PMMA-sluitlaag, naadloos en antislip naar wens.' },
    ],
    toepassingen: ['Bedrijfskeukens', 'Voedingsindustrie', 'Laboratoria', 'Wasstraten', 'Productieruimtes', 'Agrarisch'],
    galerij: [
      { src: '/images/portfolio/project-7.webp', alt: 'Zware industrievloer in PMMA' },
      { src: '/images/collections/pro/pro-1.webp', alt: 'Hygiënische, naadloze PMMA-vloer' },
      { src: '/images/collections/balance/balance-3.webp', alt: 'Antislip PMMA-afwerking' },
    ],
    seo: {
      title: 'PMMA-vloer — snelhardend, hygiënisch, food-grade | Studio Microbeton',
      beschrijving:
        'PMMA-snelvloer: hardt in uren uit, zelfs bij vrieskou. Naadloos, hygiënisch en bestand tegen vet, zuur en chemicaliën — de standaard voor keukens, voeding, labs en wasstraten.',
    },
  },
];

/**
 * Materiaalbron — onze vaste Nederlandse producent (niet bij naam genoemd).
 * Marketing-framing rond ~50 jaar bestaan, eigen labs, batch-keuring,
 * jaarlijkse vaktrainingen en hoogwaardige grondstoffen.
 */
export const MATERIAALBRON = {
  label: 'De herkomst',
  lede:
    'Wij leggen niets aan dat we niet door en door vertrouwen. Daarom werken we met één vaste Nederlandse producent — een familiebedrijf dat al bijna een halve eeuw minerale vloer- en wandsystemen ontwikkelt in eigen laboratoria. Elke laag die wij gieten, begint bij hun receptuur.',
  punten: [
    {
      kop: 'Bijna 50 jaar',
      tekst: 'Een halve eeuw productontwikkeling in eigen laboratoria — continu verfijnd, nooit stilstaand.',
    },
    {
      kop: 'Elke batch gekeurd',
      tekst: 'De receptuur ligt vast en iedere charge wordt gecontroleerd. Zo blijft de kwaliteit van laag tot laag constant.',
    },
    {
      kop: 'Jaarlijks getraind',
      tekst: 'Onze applicateurs blijven bijgeschoold op de nieuwste technieken en afwerkingen van de fabrikant.',
    },
    {
      kop: 'In Nederland gemaakt',
      tekst: 'Minerale systemen op hoogwaardige grondstoffen, getoetst aan strenge kwaliteits- en milieu-eisen.',
    },
  ],
};

/** Het register — echte cijfers van studiomicrobeton.nl */
export const STUDIO_STATS = [
  { waarde: 10, suffix: '+', label: 'jaar ervaring' },
  { waarde: 500, suffix: '+', label: 'projecten voltooid' },
  { waarde: 3, suffix: '', label: 'landen — NL · BE · DE' },
  { waarde: 50, suffix: '+', label: 'kleuren & tinten' },
];

/** De zes kern-USP's van microbeton (bron: studiomicrobeton.nl) */
export const MATERIAAL_USPS = [
  { kop: 'Naadloos & voegvrij', tekst: 'Eén doorlopend oppervlak zonder naden — hygiënisch, strak en tijdloos.' },
  { kop: '100% waterdicht', tekst: 'Voor badkamers, keukens en natte ruimtes. Schimmelbestendig.' },
  { kop: 'Slechts 2–3 mm', tekst: 'Minimale laagdikte — ideaal bij renovatie, geen sloopwerk nodig.' },
  { kop: 'Op vloerverwarming', tekst: 'Geleidt warmte uitstekend — comfortabel warm op elke ondergrond.' },
  { kop: '20+ jaar mee', tekst: 'Uitzonderlijk duurzaam en slijtvast — een investering voor generaties.' },
  { kop: '50+ kleuren', tekst: 'Van warme aardetinten tot koel industrieel grijs — altijd op maat.' },
];

/** Klant-quote van de site */
export const STUDIO_QUOTE = {
  tekst: 'Een oppervlak dat 20+ jaar prachtig blijft — zonder onderhoud.',
  bron: 'Opdrachtgever · privéwoning',
};

export const WERKWIJZE = [
  {
    nr: '01',
    titel: 'Offerte aanvragen',
    tekst: 'Vul het formulier in of bel direct. Gratis en vrijblijvend.',
    timing: 'Vandaag nog',
  },
  {
    nr: '02',
    titel: 'Locatiebezoek',
    tekst: 'We meten op, beoordelen de ondergrond en adviseren de juiste collectie.',
    timing: 'Binnen 3 werkdagen',
  },
  {
    nr: '03',
    titel: 'Ondergrond beoordeling',
    tekst: 'Module A, B of C — transparant opgenomen in de offerte, geen verborgen kosten.',
    timing: 'Tijdens bezoek',
  },
  {
    nr: '04',
    titel: 'Offerte op maat',
    tekst: 'Gedetailleerd, gespecificeerd en met vaste prijs. Geen kleine lettertjes.',
    timing: 'Binnen 48 uur',
  },
  {
    nr: '05',
    titel: 'Planning & uitvoering',
    tekst: 'Gecertificeerde specialisten, bescherming van je interieur, dagelijkse communicatie.',
    timing: '1 tot 6 weken',
  },
  {
    nr: '06',
    titel: 'Oplevering & nazorg',
    tekst: 'Samen doorlopen we het werk. Pas als jij tevreden bent, zijn wij klaar.',
    timing: 'Na voltooiing',
  },
];

export const PROJECTEN = [
  {
    img: '/images/portfolio/project-3.webp',
    thumb: '/images/portfolio/project-3-thumb.webp',
    titel: 'Badkamer — greige, voegvrij',
    sub: 'Wanden, blad en wastafel in één doorlopende huid',
    span: 'groot',
  },
  {
    img: '/images/portfolio/project-8.webp',
    thumb: '/images/portfolio/project-8-thumb.webp',
    titel: 'Slaapkamer — accentwand',
    sub: 'Ruw beton naast zacht textiel',
    span: 'hoog',
  },
  {
    img: '/images/portfolio/project-1.webp',
    thumb: '/images/portfolio/project-1-thumb.webp',
    titel: 'Woonkeuken — gietvloer & trap',
    sub: 'Begane grond zonder één naad',
    span: 'breed',
  },
  {
    img: '/images/portfolio/project-5.webp',
    thumb: '/images/portfolio/project-5-thumb.webp',
    titel: 'Trappenhuis — beton ciré',
    sub: 'Doorleefd materiaal, strak detail',
    span: 'hoog',
  },
  {
    img: '/images/portfolio/project-7.webp',
    thumb: '/images/portfolio/project-7-thumb.webp',
    titel: 'Bedrijfshal — PU-gietvloer',
    sub: 'Slijtvast en strak onder licht',
    span: 'breed',
  },
  {
    img: '/images/portfolio/project-6.webp',
    thumb: '/images/portfolio/project-6-thumb.webp',
    titel: 'Villa — minerale gevel',
    sub: 'Naadloos van binnen naar buiten',
    span: 'normaal',
  },
];

export const BELOFTEN = [
  { kop: 'Vaste prijs', tekst: 'De offerte is de eindprijs. Geen meerwerk tenzij jij de scope aanpast.' },
  { kop: 'Gratis locatiebezoek', tekst: 'Onze specialist komt kosteloos langs voor advies en opname.' },
  { kop: '2 + 10 jaar garantie', tekst: '2 jaar op de applicatie, 10 jaar op materiaalfouten.' },
  { kop: 'Gecertificeerd', tekst: 'Alle uitvoerders zijn gecertificeerd en jarenlang ervaren.' },
];

export const FAQ = [
  {
    q: 'Is microbeton geschikt voor vloerverwarming?',
    a: 'Ja, alle collecties zijn compatibel met elektrische en waterdragende vloerverwarming. Wij houden rekening met uitzettingscoëfficiënten en adviseren het juiste systeem voor jouw situatie.',
  },
  {
    q: 'Kan microbeton over bestaande tegels worden aangebracht?',
    a: 'Bij goed vastzittende, vlakke tegels is dat vaak mogelijk. We beoordelen dit altijd gratis bij de inmeting.',
  },
  {
    q: 'Kan de prijs na de offerte nog stijgen?',
    a: 'Nee. Onze offertes zijn gebaseerd op vaste prijs. Er is geen meerwerk tenzij je zelf de scope uitbreidt — dat bespreken we altijd vooraf.',
  },
  {
    q: 'Hoe lang duurt een gemiddeld project?',
    a: 'Een vloer van 30 tot 50 m² duurt 2 tot 4 werkdagen inclusief drogen. Badkamers of complexe trappen kunnen langer duren; de exacte planning staat in de offerte.',
  },
  {
    q: 'Geeft Studio Microbeton garantie?',
    a: 'Ja. 2 jaar garantie op de applicatie en 10 jaar op materiaalfouten bij correct gebruik en onderhoud.',
  },
];

export const CONTACT = {
  mail: 'info@studiomicrobeton.nl',
  tel: '+32474816182',
  telLabel: '+32 474 81 61 82',
  gebied: 'Nederland, België & Duitsland',
  straat: 'Achtseweg Zuid 221',
  postcode: '5651 GW',
  stad: 'Eindhoven',
};
