import './nacht.css';
import { VIDEOS, DIENSTEN, WERKWIJZE, PROJECTEN, BELOFTEN, FAQ, CONTACT } from '../content';
import { Reveal, AmbientVideo, Accordion, Marquee } from '../ui';

/**
 * NACHT — architecturaal brutalisme na zonsondergang.
 * Syne schreeuwt zacht, het beeld loopt door, amber gloeit.
 */
export default function Nacht() {
  return (
    <main className="nx">
      <header className="nx-header">
        <a className="nx-merk" href="/new/nacht">
          Studio Microbeton
        </a>
        <p className="nx-meta">Naadloos — sinds 2010</p>
        <a className="nx-cta" href="#contact">
          Offerte
        </a>
      </header>

      {/* 01 — Hero: ambient film + kolossale wordmark */}
      <section className="nx-hero">
        <AmbientVideo className="nx-hero-video" src={VIDEOS.heroLoop} poster="/images/hero-poster.jpg" />
        <div className="nx-hero-shade" aria-hidden="true" />
        <div className="nx-hero-inhoud">
          <p className="nx-hero-sub">
            Vloeren · wanden · trappen · badkamers — <em>gegoten tot één geheel</em>
          </p>
          <h1 className="nx-hero-kop" aria-label="Microbeton">
            Microbeton
          </h1>
        </div>
        <Marquee
          className="nx-ticker"
          tekst="Geen voegen — geen naden — geen tegels — 2 tot 3 mm — met de hand gespaand — waterdicht"
        />
      </section>

      {/* 02 — Index */}
      <section className="nx-index" id="diensten">
        <p className="nx-eyebrow">Index / Diensten</p>
        {DIENSTEN.map((d, i) => (
          <Reveal key={d.nr} delay={i * 50}>
            <a className="nx-rij" href="#contact">
              <span className="nx-rij-nr">{d.nr}</span>
              <span className="nx-rij-naam">{d.naam}</span>
              <span className="nx-rij-beeld" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt="" loading="lazy" />
              </span>
              <span className="nx-rij-tekst">{d.tekst}</span>
            </a>
          </Reveal>
        ))}
      </section>

      {/* 03 — Projecten: horizontale strip */}
      <section className="nx-strip-wrap" id="projecten">
        <div className="nx-strip-kop">
          <p className="nx-eyebrow">Projecten</p>
          <p className="nx-strip-cue" aria-hidden="true">
            ← Sleep →
          </p>
        </div>
        <div className="nx-strip" tabIndex={0}>
          {PROJECTEN.map((p, i) => (
            <figure className="nx-kaart" key={p.titel}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.titel} loading="lazy" />
              <figcaption>
                <span className="nx-kaart-nr">{String(i + 1).padStart(2, '0')}</span>
                <strong>{p.titel}</strong>
                <span>{p.sub}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 04 — Craft-film met statement */}
      <section className="nx-craft">
        <AmbientVideo className="nx-craft-video" src={VIDEOS.craft} poster="/images/craft-poster.jpg" />
        <div className="nx-craft-shade" aria-hidden="true" />
        <Reveal className="nx-craft-inhoud">
          <p className="nx-craft-kop">
            Het oppervlak is af <em>als je de hand erin terugziet.</em>
          </p>
        </Reveal>
      </section>

      {/* 05 — Beloften */}
      <section className="nx-beloften">
        {BELOFTEN.map((b, i) => (
          <Reveal key={b.kop} delay={i * 70} className="nx-belofte">
            <span className="nx-belofte-nr">{String(i + 1).padStart(2, '0')}</span>
            <h3>{b.kop}</h3>
            <p>{b.tekst}</p>
          </Reveal>
        ))}
      </section>

      {/* 07 — Werkwijze + FAQ */}
      <section className="nx-onder" id="werkwijze">
        <div className="nx-ww">
          <p className="nx-eyebrow">Werkwijze</p>
          <div className="nx-ww-grid">
            {WERKWIJZE.map((s, i) => (
              <Reveal key={s.nr} delay={i * 40} className="nx-stap">
                <span className="nx-stap-nr">{s.nr}</span>
                <h3>{s.titel}</h3>
                <p>{s.tekst}</p>
                <span className="nx-stap-timing">{s.timing}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="nx-faq">
          <p className="nx-eyebrow">FAQ</p>
          <Accordion items={FAQ.slice(0, 4)} />
        </div>
      </section>

      {/* 08 — Slot */}
      <section className="nx-slot" id="contact">
        <Reveal>
          <a className="nx-slot-kop" href={`mailto:${CONTACT.mail}`}>
            <span>Offerte</span>
            <span className="nx-slot-pijl">→</span>
          </a>
        </Reveal>
        <p className="nx-slot-sub">
          Gratis inmeting · binnen 48 uur · vaste prijs — of bel <a href={`tel:${CONTACT.tel}`}>{CONTACT.telLabel}</a>
        </p>
        <footer className="nx-footer">
          <span>© 2026 Studio Microbeton</span>
          <span>{CONTACT.gebied}</span>
          <span>Mortex · Microcement · Gietvloeren</span>
        </footer>
      </section>
    </main>
  );
}
