import './studio.css';
import { VIDEOS, MATERIALEN, STUDIO_STATS, MATERIAAL_USPS, STUDIO_QUOTE, CONTACT } from '../content';
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
  ['Op elke ondergrond', 'Tegels, beton, hout of gips — microbeton hecht op vrijwel iedere stabiele ondergrond, zonder sloopwerk.'],
  ['Binnen én buiten', 'Van woonkamer tot terras, van badkamer tot zwembad — UV-bestendig en vorstbestendig.'],
  ['Snel klaar', 'Gemiddeld 3 tot 5 werkdagen. Na 48 uur al voorzichtig beloopbaar.'],
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
              <span className="sw-wipe sw-wipe-1">Naadloze oppervlakken,</span>
              <span className="sw-wipe sw-wipe-2">
                gegoten in <em className="sw-swell">art</em>.
              </span>
            </h1>
            <p className="sw-hero-sub sw-wipe sw-wipe-3">
              Dé specialist in microbeton en microcement — voor wonen én zakelijk, in Nederland, België en Duitsland.
            </p>
            <a className="sw-blok-cta sw-blok-cta--vol sw-wipe sw-wipe-3" href="#gesprek">
              Gratis offerte aanvragen
            </a>
          </div>
          <div className="sw-naad sw-naad--hero" aria-hidden="true" />
        </section>

        {/* 02 — Het register */}
        <section className="sw-register">
          <Reveal>
            <p className="sw-label">Het register</p>
          </Reveal>
          <Reveal delay={60}>
            <p className="sw-register-claim">
              Dé specialist in microbeton &amp; microcement, voor <em className="sw-oxide">wonen én zakelijk</em> — in
              Nederland, België en Duitsland.
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

        {/* 02b — Waarom microbeton: de zes USP's */}
        <section className="sw-usps">
          <div className="sw-sheet-kop">
            <Reveal>
              <h2 className="sw-d2">Waarom microbeton.</h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="sw-label">Eén materiaal, zes redenen</p>
            </Reveal>
          </div>
          <div className="sw-usp-grid">
            {MATERIAAL_USPS.map((u, i) => (
              <Reveal key={u.kop} delay={i * 50} className="sw-usp">
                <span className="sw-usp-nr">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="sw-usp-kop">{u.kop}</h3>
                <p>{u.tekst}</p>
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
                Vakmanschap dat <em className="sw-oxide">generaties</em> meegaat.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="sw-lede">
                Geen tegels, geen voegen, geen naden — alleen een doorlopende minerale huid, met de hand opgebouwd in
                lagen van 2 tot 3 millimeter. Van intieme woningen tot grootschalige commerciële projecten in de Benelux.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <blockquote className="sw-quote">
                <p>“{STUDIO_QUOTE.tekst}”</p>
                <cite>{STUDIO_QUOTE.bron}</cite>
              </blockquote>
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
                Eén oppervlak.
                <br />
                <em className="sw-swell-vast">Twintig jaar</em> mooi.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="sw-slot-trust">
                Gratis offerte binnen 48 uur · vaste prijs · 2 jaar garantie op de applicatie, 10 jaar op het materiaal.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="sw-slot-acties">
                <a className="sw-blok-cta sw-blok-cta--vol" href={`mailto:${CONTACT.mail}`}>
                  Gratis offerte aanvragen
                </a>
                <a className="sw-lijn-link sw-lijn-link--licht" href={`tel:${CONTACT.tel}`}>
                  of bel {CONTACT.telLabel}
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
                  <p className="sw-voet-tagline">Naadloze oppervlakken met tijdloze uitstraling.</p>
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
                <span className="sw-leader-waarde">© 2026 — 10+ jaar vakmanschap</span>
              </span>
              <span className="sw-leader sw-leader--voet">
                <span className="sw-leader-term">Werkgebied</span>
                <span className="sw-leader-lijn" aria-hidden="true" />
                <span className="sw-leader-waarde">{CONTACT.gebied}</span>
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
