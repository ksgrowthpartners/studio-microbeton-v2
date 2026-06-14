import './galerie.css';
import { VIDEOS, DIENSTEN, WERKWIJZE, PROJECTEN, FAQ, CONTACT } from '../content';
import { Reveal, AmbientVideo, Accordion } from '../ui';

/**
 * GALERIE — het materiaal als museumstuk.
 * Cormorant fluistert, wit ademt, elk werk krijgt een zaaltekst.
 */
export default function Galerie() {
  return (
    <main className="ga">
      <header className="ga-header">
        <span className="ga-h-label">Studio Microbeton</span>
        <a className="ga-h-merk" href="/new/galerie">
          Het stille materiaal
        </a>
        <a className="ga-h-cta" href="#bezoek">
          Plan een gesprek
        </a>
      </header>

      {/* 01 — Hero: split met portret en zaalfilm */}
      <section className="ga-hero">
        <div className="ga-hero-tekst">
          <Reveal>
            <p className="ga-label">Permanente collectie · NL &amp; BE</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              Het <em>stille</em> materiaal
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="ga-hero-sub">
              Naadloze vloeren, wanden, trappen en badkamers in microbeton — twee millimeter minerale huid, met de hand
              gespaand, zonder één voeg.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="ga-hero-plaat">
              <span>Zaalfilm nº 1</span>
              <AmbientVideo className="ga-hero-film" src={VIDEOS.craft} poster="/images/craft-poster.jpg" />
              <span className="ga-plaat-onderschrift">— De spaanslag, vastgelegd op ware snelheid</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="ga-hero-beeld" delay={120}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/portfolio/project-3.webp" alt="Badkamer in greige microbeton, volledig voegvrij" />
          <p className="ga-bordje">
            <strong>Badkamer, greige</strong>
            <span>Mortex op wand, blad en wastafel · 2025</span>
          </p>
        </Reveal>
      </section>

      {/* 02 — Manifest */}
      <section className="ga-manifest">
        <Reveal>
          <p>
            Wij geloven dat een ruimte pas rust geeft als het oppervlak <em>zwijgt</em> — geen voegen die de blik
            onderbreken, geen naden die het licht breken. Alleen materiaal, <em>doorlopend</em> van vloer naar wand
            naar trap.
          </p>
        </Reveal>
      </section>

      {/* 03 — Zalen / Diensten */}
      <section className="ga-zalen" id="zalen">
        {DIENSTEN.map((d, i) => (
          <article className={`ga-zaal ${i % 2 ? 'ga-zaal--rechts' : ''}`} key={d.nr}>
            <Reveal className="ga-zaal-beeld">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.kop} loading="lazy" />
            </Reveal>
            <Reveal className="ga-zaal-tekst" delay={100}>
              <p className="ga-label">
                Zaal {['I', 'II', 'III', 'IV'][i]} — {d.naam}
              </p>
              <h2>{d.kop}</h2>
              <p className="ga-zaal-sub">{d.tekst}</p>
              <a className="ga-link" href="#bezoek">
                Vraag de mogelijkheden →
              </a>
            </Reveal>
          </article>
        ))}
      </section>

      {/* 05 — Archief / projecten */}
      <section className="ga-archief">
        <Reveal>
          <p className="ga-label ga-label--midden">Uit het archief</p>
        </Reveal>
        <div className="ga-archief-grid">
          {PROJECTEN.slice(0, 4).map((p, i) => (
            <Reveal key={p.titel} delay={i * 70} as="figure" className="ga-werk">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.titel} loading="lazy" />
              <figcaption>
                <strong>{p.titel}</strong>
                <span>{p.sub}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 — Programma / werkwijze */}
      <section className="ga-programma">
        <div className="ga-prog-kop">
          <Reveal>
            <p className="ga-label">Het programma</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>
              Zes stappen, <em>één vaste prijs</em>
            </h2>
          </Reveal>
        </div>
        <ol className="ga-prog-lijst">
          {WERKWIJZE.map((s, i) => (
            <Reveal key={s.nr} as="li" delay={i * 40}>
              <span className="ga-prog-nr">{s.nr}</span>
              <div>
                <h3>{s.titel}</h3>
                <p>{s.tekst}</p>
              </div>
              <span className="ga-prog-timing">{s.timing}</span>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 07 — FAQ */}
      <section className="ga-vragen">
        <Reveal>
          <p className="ga-label ga-label--midden">Bezoekersinformatie</p>
        </Reveal>
        <Accordion items={FAQ} />
      </section>

      {/* 08 — Slot */}
      <section className="ga-slot" id="bezoek">
        <Reveal>
          <h2>
            Plan een bezoek aan <em>uw eigen project.</em>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="ga-slot-sub">Gratis inmeting op locatie · offerte binnen 48 uur · vaste prijs</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="ga-slot-knoppen">
            <a className="ga-knop" href={`mailto:${CONTACT.mail}`}>
              Gratis offerte aanvragen
            </a>
            <a className="ga-knop ga-knop--stil" href={`tel:${CONTACT.tel}`}>
              {CONTACT.telLabel}
            </a>
          </div>
        </Reveal>
        <footer className="ga-footer">
          <span>Studio Microbeton — © 2026</span>
          <span>Mortex · Microcement · Gietvloeren · Epoxy</span>
          <span>{CONTACT.gebied}</span>
        </footer>
      </section>
    </main>
  );
}
