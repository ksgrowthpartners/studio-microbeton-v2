import './studio.css';
import { VIDEOS, MATERIALEN, STUDIO_STATS, CONTACT } from '../content';
import { Reveal, ScrubHero, AmbientVideo } from '../ui';
import { MmGauge, TellerRol, PlayOnce } from './bits';
import { StudioHeader, LogoMark } from './header';

/**
 * STUDIO — "Signatuur" × "De Laag".
 * Elke vloer een gesigneerd origineel; de pagina gedraagt zich als
 * een 3mm-systeem dat laag voor laag wordt aangebracht.
 * Koel gegoten canvas, Archivo op de breedte-as, oxide als pigment.
 */

const PROVENANCE = [
  {
    img: '/images/portfolio/project-8.webp',
    plaat: 'Plaat 01',
    titel: 'Loft Rotterdam',
    regel: 'microbeton · accentwand · 32 m² · 2025',
  },
  {
    img: '/images/portfolio/project-1.webp',
    plaat: 'Plaat 02',
    titel: 'Woonhuis Utrecht',
    regel: 'gietvloer · begane grond · 85 m² · 2024',
  },
  {
    img: '/images/portfolio/project-5.webp',
    plaat: 'Plaat 03',
    titel: 'Trappenhuis Antwerpen',
    regel: 'microbeton · trap & bordes · 2024',
  },
  {
    img: '/images/portfolio/project-3.webp',
    plaat: 'Plaat 04',
    titel: 'Badhuis Amsterdam',
    regel: 'microcement · wand, blad & vloer · 2025',
  },
];

const KENNIS = [
  ['Gietvloer (PU)', 'naadloos en licht verend — comfort, vloerverwarming-vriendelijk'],
  ['Microcement & microbeton', '2–3 mm met de hand, op vloer én wand — verfijnder dan echt beton'],
  ['Epoxy', 'het hardst, chemisch bestendig — het zakelijke werkpaard'],
];

const STAPPEN = [
  { nr: '01', titel: 'Advies & staal', tekst: 'Op locatie, binnen 24 uur gepland. Kleur en textuur op een staal van jouw ruimte.' },
  { nr: '02', titel: 'Ondergrond', tekst: 'Egaliseren, primeren, drogen. Het onzichtbare werk dat de levensduur bepaalt.' },
  { nr: '03', titel: 'Aanbrengen', tekst: 'Laag voor laag, met de hand. Hier ontstaat de tekening die van jou is.' },
  { nr: '04', titel: 'Nazorg', tekst: 'Oplevering met onderhoudsgids — en een vast nazorgmoment na 12 maanden.' },
];

export default function Studio() {
  return (
    <main className="sw">
      <MmGauge />

      <div className="sw-inhoud">
        {/* Vaste, klikbare menubalk + MB-beeldmerk */}
        <StudioHeader />

        {/* 01 — Hero: speelt één keer, houdt het eindbeeld vast */}
        <span id="top" aria-hidden="true" />
        <section className="sw-hero">
          <PlayOnce className="sw-hero-video" src={VIDEOS.heroLoop} poster="/images/hero-poster.jpg" />
          <div className="sw-hero-shade" aria-hidden="true" />
          <div className="sw-hero-tekst">
            <h1 className="sw-d1">
              <span className="sw-wipe sw-wipe-1">Geen twee vloeren hetzelfde.</span>
              <span className="sw-wipe sw-wipe-2">
                In <em className="sw-swell">vijftien jaar</em> niet.
              </span>
            </h1>
            <p className="sw-hero-sub sw-wipe sw-wipe-3">
              Microbeton, gietvloeren en epoxy — met de hand aangebracht, voor thuis en zakelijk.
            </p>
            <a className="sw-blok-cta sw-blok-cta--vol sw-wipe sw-wipe-3" href="#gesprek">
              Plan een adviesgesprek
            </a>
          </div>
          <div className="sw-naad sw-naad--hero" aria-hidden="true" />
        </section>

        {/* 02 — Het register */}
        <section className="sw-register">
          <Reveal>
            <p className="sw-label">Het register — sinds 2010</p>
          </Reveal>
          <Reveal delay={60}>
            <p className="sw-register-claim">
              Nr. 1 in Europa voor microbeton-vakwerk — van een badkamer van{' '}
              <em className="sw-oxide">4 m²</em> tot een bedrijfshal van <em className="sw-oxide">4.000</em>.
            </p>
          </Reveal>
          <div className="sw-register-rij">
            {STUDIO_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} className="sw-register-cel">
                <TellerRol waarde={s.waarde} suffix={s.suffix ?? ''} />
                <span className="sw-register-label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 03 — Manifest (natte plaat) */}
        <section className="sw-manifest">
          <AmbientVideo className="sw-manifest-video" src={VIDEOS.loop} poster="/images/loop-poster.jpg" />
          <div className="sw-manifest-grain" aria-hidden="true" />
          <div className="sw-manifest-tekst">
            <Reveal>
              <p className="sw-label sw-label--licht">Manifest</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="sw-d2">
                Met de hand aangebracht.
                <br />
                Dus per definitie <em className="sw-oxide">een origineel</em>.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="sw-lede">
                Een vloer is geen ondergrond — het is het grootste oppervlak in huis. Ruim vijftien jaar dezelfde hand,
                dezelfde lat, op vloeren van vier tot vierduizend vierkante meter.
              </p>
            </Reveal>
          </div>
          <div className="sw-naad" aria-hidden="true" />
        </section>

        {/* 04 — Materialen: het datasheet */}
        <section className="sw-materialen" id="materialen">
          <div className="sw-sheet-kop">
            <Reveal>
              <h2 className="sw-d2">
                Vijf materialen. <em className="sw-oxide">Eén signatuur.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={60}>
            <div className="sw-sheet-header" aria-hidden="true">
              <span>Nº</span>
              <span>Materiaal</span>
              <span>Staal</span>
              <span>Dikte</span>
              <span>Karakter</span>
              <span>Toepassing</span>
              <span />
            </div>
          </Reveal>
          {MATERIALEN.map((m, i) => (
            <Reveal key={m.nr} delay={i * 60}>
              <a className="sw-rij" href="#gesprek">
                <span className="sw-rij-nr">{m.nr}</span>
                <span className="sw-rij-naam">{m.naam}</span>
                <span className="sw-chip">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt="" loading="lazy" />
                </span>
                <span className="sw-cel" data-kolom="Dikte">
                  {m.dikte}
                </span>
                <span className="sw-cel" data-kolom="Karakter">
                  {m.karakter}
                </span>
                <span className="sw-cel" data-kolom="Toepassing">
                  {m.toepassing}
                </span>
                <span className="sw-rij-pijl" aria-hidden="true">
                  →
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={120}>
            <p className="sw-sheet-voetnoot">
              Welke past bij jouw ruimte? Eén adviesgesprek en je weet het — inclusief staal op kleur.
            </p>
          </Reveal>
        </section>

        {/* 05 — Kennis, drie regels */}
        <section className="sw-kennis">
          <Reveal>
            <p className="sw-label">In het kort</p>
          </Reveal>
          <div className="sw-kennis-lijst">
            {KENNIS.map(([term, uitleg], i) => (
              <Reveal key={term} delay={i * 70} className="sw-leader">
                <span className="sw-leader-term">{term}</span>
                <span className="sw-leader-lijn" aria-hidden="true" />
                <span className="sw-leader-waarde">{uitleg}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 06 — Vakwerk: de film volgt de scroll */}
        <ScrubHero
          className="sw-scrub"
          src={VIDEOS.vakwerk}
          mobileSrc={VIDEOS.vakwerkLoop}
          poster="/images/studio-hero-poster.jpg"
          height={260}
          beats={[
            { from: -1, to: 0.3, kop: 'Laag één van drie.', sub: 'Scroll — de film volgt jou' },
            { from: 0.38, to: 0.66, kop: 'Met de hand opgebouwd.' },
            { from: 0.74, to: 2, kop: 'Eén hand. Geen herhaling.', sub: 'Studio Microbeton' },
          ]}
        />

        {/* 07 — Thuis of zaak */}
        <section className="sw-split-wrap" id="voorwie">
          <div className="sw-sheet-kop">
            <Reveal>
              <h2 className="sw-d2">
                Thuis of zaak — <em className="sw-oxide">dezelfde hand.</em>
              </h2>
            </Reveal>
          </div>
          <div className="sw-split">
            <Reveal className="sw-paneel">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/portfolio/project-3.webp" alt="Voegvrije badkamer in microcement" loading="lazy" />
              </figure>
              <p className="sw-label">Particulier</p>
              <h3 className="sw-h3">Badkamer, woonvloer, trap</h3>
              <div className="sw-paneel-feiten">
                <span className="sw-leader">
                  <span className="sw-leader-term">Vaste prijs</span>
                  <span className="sw-leader-lijn" aria-hidden="true" />
                  <span className="sw-leader-waarde">geen meerwerk achteraf</span>
                </span>
                <span className="sw-leader">
                  <span className="sw-leader-term">Eén aanspreekpunt</span>
                  <span className="sw-leader-lijn" aria-hidden="true" />
                  <span className="sw-leader-waarde">van staal tot nazorg</span>
                </span>
                <span className="sw-leader">
                  <span className="sw-leader-term">Garantie</span>
                  <span className="sw-leader-lijn" aria-hidden="true" />
                  <span className="sw-leader-waarde">2 jaar applicatie · 10 jaar materiaal</span>
                </span>
              </div>
              <a className="sw-lijn-link" href="#gesprek">
                Plan een woonadvies
              </a>
            </Reveal>
            <Reveal className="sw-paneel" delay={90}>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/portfolio/project-7.webp" alt="Epoxyvloer in bedrijfshal" loading="lazy" />
              </figure>
              <p className="sw-label">Zakelijk</p>
              <h3 className="sw-h3">Showroom, horeca, praktijk</h3>
              <div className="sw-paneel-feiten">
                <span className="sw-leader">
                  <span className="sw-leader-term">Planning</span>
                  <span className="sw-leader-lijn" aria-hidden="true" />
                  <span className="sw-leader-waarde">rond openingstijden, ook 's nachts</span>
                </span>
                <span className="sw-leader">
                  <span className="sw-leader-term">Systemen</span>
                  <span className="sw-leader-lijn" aria-hidden="true" />
                  <span className="sw-leader-waarde">epoxy & PU, chemisch resistent</span>
                </span>
                <span className="sw-leader">
                  <span className="sw-leader-term">Opschaalbaar</span>
                  <span className="sw-leader-lijn" aria-hidden="true" />
                  <span className="sw-leader-waarde">van 40 tot 4.000 m²</span>
                </span>
              </div>
              <a className="sw-lijn-link" href="#gesprek">
                Vraag een projectspecificatie
              </a>
            </Reveal>
          </div>
        </section>

        {/* 08 — Uitgevoerd werk met provenance */}
        <section className="sw-werk" id="werk">
          <div className="sw-sheet-kop">
            <Reveal>
              <h2 className="sw-d2">Uitgevoerd werk</h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="sw-label">Elke plaat gedocumenteerd</p>
            </Reveal>
          </div>
          <div className="sw-platen">
            {PROVENANCE.map((p, i) => (
              <Reveal key={p.plaat} delay={i * 70} as="figure" className="sw-plaat">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={`${p.titel} — ${p.regel}`} loading="lazy" />
                <figcaption>
                  <span className="sw-plaat-nr">{p.plaat}</span>
                  <span className="sw-plaat-titel">{p.titel}</span>
                  <span className="sw-plaat-regel">{p.regel}</span>
                  <span className="sw-schaal" aria-hidden="true">
                    <i />
                    20 mm
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 09 — Werkwijze + craft-inzet */}
        <section className="sw-stappen-wrap" id="werkwijze">
          <div className="sw-stappen-kop">
            <Reveal>
              <h2 className="sw-d2">Vier stappen.</h2>
            </Reveal>
            <Reveal delay={80} className="sw-stappen-film">
              <AmbientVideo className="sw-stappen-video" src={VIDEOS.craft} poster="/images/craft-poster.jpg" />
              <span className="sw-plaat-regel">Vakmanswerk</span>
            </Reveal>
          </div>
          <div className="sw-stappen">
            {STAPPEN.map((s, i) => (
              <Reveal key={s.nr} delay={i * 70} className="sw-stap">
                <span className="sw-stap-nr">{s.nr}</span>
                <h3 className="sw-h3">{s.titel}</h3>
                <p>{s.tekst}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 10 — Slot */}
        <section className="sw-slot" id="gesprek">
          <AmbientVideo className="sw-slot-video" src={VIDEOS.ambachtLoop} poster="/images/studio-reveal-poster.jpg" />
          <div className="sw-slot-shade" aria-hidden="true" />
          <div className="sw-slot-tekst">
            <Reveal>
              <h2 className="sw-d1 sw-d1--slot">
                De beste vloer is de vloer
                <br />
                die <em className="sw-swell-vast">niemand anders</em> heeft.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="sw-slot-acties">
                <a className="sw-blok-cta sw-blok-cta--vol" href={`mailto:${CONTACT.mail}`}>
                  Plan een adviesgesprek
                </a>
                <a className="sw-lijn-link sw-lijn-link--licht" href={`https://wa.me/${CONTACT.tel.replace('+', '')}`}>
                  Of app een foto van je ruimte
                </a>
              </div>
            </Reveal>
          </div>
          <footer className="sw-voet">
            <div className="sw-voet-top">
              <div className="sw-voet-merk">
                <LogoMark className="sw-voet-mark" />
                <div>
                  <span className="sw-merk-naam sw-merk-naam--voet">
                    Studio<span>Microbeton</span>
                  </span>
                  <p className="sw-voet-tagline">Het grootste oppervlak in huis. Met de hand.</p>
                </div>
              </div>

              <address className="sw-voet-blok">
                <span className="sw-label sw-label--licht">Atelier</span>
                <span className="sw-voet-adres">
                  {CONTACT.straat}
                  <br />
                  {CONTACT.postcode} {CONTACT.stad}
                </span>
              </address>

              <div className="sw-voet-blok">
                <span className="sw-label sw-label--licht">Contact</span>
                <a href={`mailto:${CONTACT.mail}`}>{CONTACT.mail}</a>
                <a href={`tel:${CONTACT.tel}`}>{CONTACT.telLabel}</a>
              </div>

              <nav className="sw-voet-blok" aria-label="Footer-menu">
                <span className="sw-label sw-label--licht">Menu</span>
                <a href="#materialen">Materialen</a>
                <a href="#werk">Werk</a>
                <a href="#werkwijze">Werkwijze</a>
                <a href="#gesprek">Contact</a>
              </nav>
            </div>

            <div className="sw-voet-rij">
              <span className="sw-leader sw-leader--voet">
                <span className="sw-leader-term">Studio Microbeton</span>
                <span className="sw-leader-lijn" aria-hidden="true" />
                <span className="sw-leader-waarde">© 2026 — gesigneerd werk sinds 2010</span>
              </span>
              <span className="sw-leader sw-leader--voet">
                <span className="sw-leader-term">Werkgebied</span>
                <span className="sw-leader-lijn" aria-hidden="true" />
                <span className="sw-leader-waarde">{CONTACT.gebied} · Europa</span>
              </span>
              <span className="sw-leader sw-leader--voet">
                <span className="sw-leader-term">Systemen</span>
                <span className="sw-leader-lijn" aria-hidden="true" />
                <span className="sw-leader-waarde">microbeton · microcement · lava · gietvloer · epoxy</span>
              </span>
              <span className="sw-leader sw-leader--voet">
                <span className="sw-leader-term">Meting</span>
                <span className="sw-leader-lijn" aria-hidden="true" />
                <span className="sw-leader-waarde">3.0 mm — uitgehard</span>
              </span>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
