import './atelier.css';
import { VIDEOS, DIENSTEN, WERKWIJZE, PROJECTEN, BELOFTEN, FAQ, CONTACT } from './content';
import { Reveal, ScrubHero, AmbientVideo, HoverIndex, Accordion, Marquee } from './ui';

/**
 * ATELIER — warm mineraal, editorial-luxe.
 * Fraunces als stem, het materiaal als decor, de film als opening.
 */
export default function Atelier() {
  return (
    <main className="at">
      {/* Vaste header — blend-difference zodat hij op licht én donker leesbaar is */}
      <header className="at-header">
        <a className="at-merk" href="/new">
          Studio<span>Microbeton</span>
        </a>
        <nav className="at-nav" aria-label="Hoofdnavigatie">
          <a href="#diensten">Diensten</a>
          <a href="#projecten">Projecten</a>
          <a href="#werkwijze">Werkwijze</a>
        </nav>
        <a className="at-cta" href="#contact">
          Gratis offerte
        </a>
      </header>

      {/* 01 — Hero: de film volgt jouw scroll */}
      <ScrubHero
        className="at-hero"
        src={VIDEOS.hero}
        poster="/images/hero-poster.jpg"
        height={300}
        beats={[
          {
            from: -1,
            to: 0.22,
            kop: 'Gegoten in rust.',
            sub: 'Naadloze vloeren, wanden en trappen — met de hand gespaand.',
          },
          { from: 0.3, to: 0.52, kop: 'Twee millimeter dun.', sub: 'Spaanslag voor spaanslag.' },
          { from: 0.58, to: 0.8, kop: 'Geen één voeg.', sub: 'Van douchevloer tot wastafel.' },
          { from: 0.86, to: 2, kop: 'Studio Microbeton.', sub: 'Meer dan 15 jaar vakmanschap — heel Nederland & België.' },
        ]}
      >
        <div className="at-hero-rand" aria-hidden="true">
          <span>Mortex · Microcement · Gietvloeren</span>
          <span className="at-scrollcue">Scroll — de film volgt jou ↓</span>
        </div>
      </ScrubHero>

      {/* 02 — Marquee */}
      <Marquee
        className="at-mq"
        tekst="Vloeren — Wanden — Trappen — Badkamers — Meubels — Mortex — Microcement — Gietvloeren"
      />

      {/* 03 — Statement */}
      <section className="at-statement">
        <Reveal>
          <p className="at-eyebrow">Het materiaal</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="at-groot">
            Wij maken oppervlakken <em>zonder begin</em>
            <img src="/images/portfolio/project-3-thumb.webp" alt="" loading="lazy" />
            <em>of einde</em> — wanden, vloeren en trappen die
            <img src="/images/portfolio/project-8-thumb.webp" alt="" loading="lazy" />
            in elkaar <em>overlopen.</em>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="at-lede">
            Microbeton is 2–3 millimeter minerale huid, met de hand aangebracht in dunne lagen. Elke spaanslag blijft
            zichtbaar — geen twee projecten zijn gelijk. Waterdicht in de badkamer, slijtvast op de vloer, en altijd
            zonder voegen.
          </p>
        </Reveal>
      </section>

      {/* 04 — Diensten */}
      <section className="at-diensten" id="diensten">
        <div className="at-kopregel">
          <Reveal>
            <p className="at-eyebrow">Diensten</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="at-kop">Eén materiaal, vier toepassingen</h2>
          </Reveal>
        </div>
        <HoverIndex items={DIENSTEN} />
      </section>

      {/* 05 — Ambient film + beloften */}
      <section className="at-ambient">
        <AmbientVideo className="at-ambient-video" src={VIDEOS.loop} poster="/images/loop-poster.jpg" />
        <div className="at-ambient-shade" aria-hidden="true" />
        <div className="at-ambient-inhoud">
          <Reveal>
            <p className="at-ambient-kop">
              Het onzichtbare werk <em>bepaalt</em> de levensduur.
            </p>
          </Reveal>
          <div className="at-beloften">
            {BELOFTEN.map((b, i) => (
              <Reveal key={b.kop} delay={i * 80}>
                <div className="at-belofte">
                  <h3>{b.kop}</h3>
                  <p>{b.tekst}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Werkwijze */}
      <section className="at-werkwijze" id="werkwijze">
        <div className="at-ww-links">
          <div className="at-ww-sticky">
            <Reveal>
              <p className="at-eyebrow">Werkwijze</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="at-kop">
                Van eerste contact tot oplevering — <em>zes stappen.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="at-lede">
                Helder, transparant en vakkundig. Stap 1 is gratis en vrijblijvend — en de offerte is altijd een vaste
                prijs.
              </p>
            </Reveal>
          </div>
        </div>
        <ol className="at-ww-stappen">
          {WERKWIJZE.map((s, i) => (
            <Reveal key={s.nr} as="li" delay={i * 40}>
              <span className="at-ww-nr">{s.nr}</span>
              <div>
                <h3>{s.titel}</h3>
                <p>{s.tekst}</p>
              </div>
              <span className="at-ww-timing">{s.timing}</span>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 08 — Projecten */}
      <section className="at-projecten" id="projecten">
        <div className="at-kopregel">
          <Reveal>
            <p className="at-eyebrow">Projecten</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="at-kop">Materiaal in de praktijk</h2>
          </Reveal>
        </div>
        <div className="at-grid">
          {PROJECTEN.map((p, i) => (
            <Reveal key={p.titel} as="figure" delay={i * 50} className={`at-werk at-werk--${p.span}`}>
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

      {/* 09 — Vakwerk-film */}
      <section className="at-craft">
        <div className="at-craft-tekst">
          <Reveal>
            <p className="at-eyebrow">Het vakwerk</p>
          </Reveal>
          <Reveal delay={80}>
            <blockquote>
              Met de hand gespaand.
              <em> Spaanslag voor spaanslag</em> — hier ontstaat de tekening van het oppervlak.
            </blockquote>
          </Reveal>
          <Reveal delay={140}>
            <a className="at-link" href="#werkwijze">
              Bekijk de werkwijze →
            </a>
          </Reveal>
        </div>
        <Reveal className="at-craft-film" delay={100}>
          <AmbientVideo className="at-craft-video" src={VIDEOS.craft} poster="/images/craft-poster.jpg" />
        </Reveal>
      </section>

      {/* 10 — FAQ */}
      <section className="at-faq">
        <div className="at-kopregel">
          <Reveal>
            <p className="at-eyebrow">Veelgestelde vragen</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="at-kop">Wat je wilt weten</h2>
          </Reveal>
        </div>
        <Accordion items={FAQ} />
      </section>

      {/* 11 — Contact / CTA */}
      <section className="at-slot" id="contact">
        <Reveal>
          <p className="at-eyebrow at-eyebrow--licht">Contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="at-slot-kop">
            Klaar voor <em>jouw</em> project?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="at-slot-sub">
            Gratis inmeting · offerte binnen 48 uur · vaste prijs. Werkgebied: {CONTACT.gebied}.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="at-slot-knoppen">
            <a className="at-knop" href={`mailto:${CONTACT.mail}`}>
              Gratis offerte aanvragen
            </a>
            <a className="at-knop at-knop--ghost" href={`tel:${CONTACT.tel}`}>
              Bel {CONTACT.telLabel}
            </a>
          </div>
        </Reveal>
        <footer className="at-footer">
          <p className="at-footer-merk" aria-hidden="true">
            Microbeton
          </p>
          <div className="at-footer-rij">
            <span>© 2026 Studio Microbeton</span>
            <span>Mortex · Microcement · Gietvloeren · Epoxy</span>
            <span>{CONTACT.gebied}</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
