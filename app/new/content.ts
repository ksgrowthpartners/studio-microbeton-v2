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
 * Materialen-index voor de STUDIO-variant — vlak datasheet-formaat,
 * geen pakketten. Kolommen: dikte / karakter / toepassing.
 */
export const MATERIALEN = [
  {
    nr: '01',
    naam: 'Microbeton',
    dikte: '2–3 mm',
    karakter: 'Wolkige spaanslag, mat mineraal',
    toepassing: 'Vloer · wand · trap · meubel',
    tekst:
      'De signatuur van het huis. Met de hand gespaand in dunne minerale lagen — elke spaanslag blijft zichtbaar, nooit twee keer hetzelfde.',
    img: '/images/services/walls/walls-1-thumb.webp',
  },
  {
    nr: '02',
    naam: 'Microcement',
    dikte: '± 2 mm',
    karakter: 'Zijdemat, 100% waterdicht te sealen',
    toepassing: 'Badkamer · direct over tegels',
    tekst:
      'Verfijnder dan echt beton. Twee millimeter over je bestaande tegels of dekvloer — dé badkamerkeuze zonder hak- en breekwerk.',
    img: '/images/services/bathrooms/bathrooms-1-thumb.webp',
  },
  {
    nr: '03',
    naam: 'Microbeton Lava',
    dikte: '3–4 mm',
    karakter: 'Ruw vulkanisch reliëf, voelbaar',
    toepassing: 'Accentwand · haard · gevel',
    tekst:
      'Grover gekorreld, geïnspireerd op vulkanisch gesteente. Voor wanden die je niet alleen ziet, maar ook voelt.',
    img: '/images/collections/signature/signature-1-thumb.webp',
  },
  {
    nr: '04',
    naam: 'Gietvloer',
    dikte: '3–4 mm',
    karakter: 'Elastisch, warm en stil (PU)',
    toepassing: 'Woonruimtes · keukens',
    tekst:
      'Licht verend en warm onder blote voeten. Eén vloeiend oppervlak van muur tot muur, ideaal boven vloerverwarming.',
    img: '/images/services/floors/floors-1-thumb.webp',
  },
  {
    nr: '05',
    naam: 'Epoxy',
    dikte: '2–3 mm',
    karakter: 'Extreem hard, chemisch resistent',
    toepassing: 'Zakelijk · industrie',
    tekst:
      'Strak onder licht en gebouwd voor zwaar gebruik: showrooms, horeca, praktijken en werkplaatsen.',
    img: '/images/portfolio/project-7-thumb.webp',
  },
];

/** Het register — bewijsvoering voor de STUDIO-variant (feiten, geen superlatieven) */
export const STUDIO_STATS = [
  { waarde: 15, suffix: '+', label: 'jaar dezelfde hand' },
  { waarde: 1200, suffix: '+', label: 'vloeren aangebracht' },
  { waarde: 85000, suffix: '+', label: 'm² opgeleverd' },
  { waarde: 12, suffix: ' mnd', label: 'vast nazorgmoment' },
];

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
  tel: '+31600000000',
  telLabel: '06 00 00 00 00',
  gebied: 'heel Nederland & België',
  straat: 'Achtseweg Zuid 221',
  postcode: '5651 GW',
  stad: 'Eindhoven',
};
