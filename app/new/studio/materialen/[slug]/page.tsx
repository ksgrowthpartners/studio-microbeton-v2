import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../../studio.css';
import '../materiaal.css';
import { MATERIALEN, CONTACT } from '../../../content';
import { Reveal } from '../../../ui';

const SITE = 'https://www.studiomicrobeton.nl';

/* Donkere doorsnede-tinten, van boven (licht) naar onder (diep). */
const BANDTINTEN = ['#5a5f61', '#4f5456', '#444a4c', '#3a4042', '#303638', '#262c2e'];

type Materiaal = (typeof MATERIALEN)[number];

function vind(slug: string): Materiaal | undefined {
  return MATERIALEN.find((m) => m.slug === slug);
}

export function generateStaticParams() {
  return MATERIALEN.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = vind(slug);
  if (!m) return { title: 'Materiaal niet gevonden | Studio Microbeton' };
  const url = `${SITE}/materialen/${m.slug}`;
  return {
    title: m.seo.title,
    description: m.seo.beschrijving,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'nl_NL',
      siteName: 'Studio Microbeton',
      url,
      title: m.seo.title,
      description: m.seo.beschrijving,
      images: [{ url: m.hero.src, width: 1200, height: 1500, alt: m.hero.alt }],
    },
    twitter: { card: 'summary_large_image', title: m.seo.title, description: m.seo.beschrijving, images: [m.hero.src] },
    robots: { index: true, follow: true },
  };
}

export default async function MateriaalPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = vind(slug);
  if (!m) notFound();

  const anderen = MATERIALEN.filter((x) => x.slug !== m.slug);
  const doorsnede = [...m.opbouw].reverse();

  const JSONLD = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${m.naam} — Studio Microbeton`,
        description: m.seo.beschrijving,
        serviceType: m.naam,
        url: `${SITE}/materialen/${m.slug}`,
        areaServed: [
          { '@type': 'Country', name: 'Nederland' },
          { '@type': 'Country', name: 'België' },
          { '@type': 'Country', name: 'Duitsland' },
        ],
        provider: { '@type': 'HomeAndConstructionBusiness', '@id': `${SITE}/#business`, name: 'Studio Microbeton' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Materialen', item: `${SITE}/#materialen` },
          { '@type': 'ListItem', position: 3, name: m.naam, item: `${SITE}/materialen/${m.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="sw sw-mat">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* Slanke balk */}
      <header className="sw-mat-bar">
        <a href="/" aria-label="Studio Microbeton — naar home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sw-mat-bar-logo" src="/logo-official.webp" alt="Studio Microbeton" width={800} height={234} />
        </a>
        <div className="sw-mat-bar-rechts">
          <a className="sw-mat-terug" href="/#materialen">
            ← Alle materialen
          </a>
          <a className="sw-blok-cta sw-bar-cta" href="/#gesprek">
            Gratis offerte
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="sw-mat-hero">
        <div className="sw-mat-kop">
          <p className="sw-mat-eyebrow">
            <b>Nº {m.nr}</b>
            <i aria-hidden="true" />
            {m.familie}
          </p>
          <h1 className="sw-mat-naam">{m.naam}</h1>
          <p className="sw-mat-intro">{m.intro}</p>
          <div className="sw-mat-specs">
            {m.specs.map((s) => (
              <span className="sw-leader" key={s.term}>
                <span className="sw-leader-term">{s.term}</span>
                <span className="sw-leader-lijn" aria-hidden="true" />
                <span className="sw-leader-waarde">{s.waarde}</span>
              </span>
            ))}
          </div>
          <div className="sw-mat-acties">
            <a className="sw-blok-cta sw-blok-cta--vol" href="/#gesprek">
              Gratis offerte aanvragen
            </a>
            <a className="sw-lijn-link" href={`tel:${CONTACT.tel}`}>
              of bel {CONTACT.telLabel}
            </a>
          </div>
        </div>
        <figure className="sw-mat-beeld">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m.hero.src} alt={m.hero.alt} width={1000} height={1250} />
        </figure>
      </section>

      {/* Pluspunten */}
      <section className="sw-mat-sectie sw-mat-sectie--licht">
        <div className="sw-mat-sectie-kop">
          <Reveal>
            <h2 className="sw-d2">Waarom dit systeem.</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="sw-label">De pluspunten</p>
          </Reveal>
        </div>
        <div className="sw-mat-plus">
          {m.pluspunten.map((p, i) => (
            <Reveal key={p.kop} delay={i * 50} className="sw-mat-plus-cel">
              <span className="sw-mat-plus-nr">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="sw-mat-plus-kop">{p.kop}</h3>
              <p>{p.tekst}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Systeemopbouw — doorsnede + legenda */}
      <section className="sw-mat-sectie">
        <div className="sw-mat-sectie-kop">
          <Reveal>
            <h2 className="sw-d2">
              Systeemopbouw, <em className="sw-oxide">laag voor laag</em>.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="sw-label">{m.dikte} — uitgehard</p>
          </Reveal>
        </div>
        <div className="sw-mat-opbouw">
          <Reveal>
            <div className="sw-doorsnede" aria-hidden="true">
              {doorsnede.map((l, i) => (
                <div
                  key={l.naam}
                  className={`sw-band${i === 0 ? ' sw-band--finish' : ''}`}
                  style={{ background: BANDTINTEN[Math.min(i, BANDTINTEN.length - 1)] }}
                >
                  <span className="sw-band-nr">{String(m.opbouw.length - i).padStart(2, '0')}</span>
                  {l.naam}
                </div>
              ))}
              <div className="sw-band sw-band--grond">Bestaande ondergrond</div>
            </div>
          </Reveal>
          <ol className="sw-lagen">
            {m.opbouw.map((l, i) => (
              <Reveal key={l.naam} delay={i * 50} as="li" className="sw-laag">
                <span className="sw-laag-nr">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="sw-laag-naam">{l.naam}</span>
                  <p>{l.tekst}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Toepassingen — donkere band */}
      <section className="sw-mat-toepas">
        <Reveal>
          <p className="sw-label">Toepassingen</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="sw-d2">
            Waar <em className="sw-oxide">{m.naam}</em> tot zijn recht komt.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="sw-tags">
            {m.toepassingen.map((t) => (
              <span className="sw-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Galerij */}
      <section className="sw-mat-sectie">
        <div className="sw-mat-sectie-kop">
          <Reveal>
            <h2 className="sw-d2">Uitgevoerd werk.</h2>
          </Reveal>
        </div>
        <div className="sw-mat-galerij">
          {m.galerij.map((g, i) => (
            <Reveal key={g.src} delay={i * 60} as="figure" className="sw-mat-foto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Andere materialen */}
      <section className="sw-mat-sectie sw-mat-sectie--licht">
        <div className="sw-mat-sectie-kop">
          <Reveal>
            <h2 className="sw-d2">Andere materialen.</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="sw-label">Het volledige register</p>
          </Reveal>
        </div>
        <nav className="sw-mat-ander" aria-label="Andere materialen">
          {anderen.map((a, i) => (
            <Reveal key={a.slug} delay={i * 40}>
              <a className="sw-mat-ander-rij" href={`/materialen/${a.slug}`}>
                <span className="sw-mat-ander-nr">{a.nr}</span>
                <span className="sw-mat-ander-naam">{a.naam}</span>
                <span className="sw-mat-ander-toe">{a.toepassing}</span>
                <span className="sw-mat-ander-pijl" aria-hidden="true">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </nav>
      </section>

      {/* Slot-CTA */}
      <section className="sw-mat-slot">
        <Reveal>
          <h2 className="sw-d2">
            Benieuwd wat {m.naam} in <em className="sw-oxide">jouw ruimte</em> doet?
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="sw-mat-slot-trust">
            Gratis offerte binnen 48 uur · vaste prijs · 2 jaar garantie op de applicatie, 10 jaar op het materiaal.
            Inclusief staal op kleur van jouw ruimte.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="sw-mat-slot-acties">
            <a className="sw-blok-cta sw-blok-cta--vol" href="/#gesprek">
              Gratis offerte aanvragen
            </a>
            <a className="sw-lijn-link sw-lijn-link--licht" href={`tel:${CONTACT.tel}`}>
              of bel {CONTACT.telLabel}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Compacte voet */}
      <footer className="sw-mat-voet">
        <a className="sw-mat-voet-merk" href="/" aria-label="Studio Microbeton — naar home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sw-mat-voet-logo" src="/logo-official.webp" alt="Studio Microbeton" width={800} height={234} />
        </a>
        <span>{CONTACT.gebied}</span>
        <a href={`mailto:${CONTACT.mail}`}>{CONTACT.mail}</a>
        <a href={`tel:${CONTACT.tel}`}>{CONTACT.telLabel}</a>
        <a href="/#materialen">← Alle materialen</a>
      </footer>
    </main>
  );
}
