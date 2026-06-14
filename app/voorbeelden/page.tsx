'use client';

import Link from 'next/link';

type Example = {
  src: string;
  number: string;
  title: string;
  description: string;
  qualities: string[];
};

const EXAMPLES: Example[] = [
  {
    src: '/videos/movie-1.mp4',
    number: 'I',
    title: 'Documentary craft',
    description:
      'Continue close-up van de troffel-actie. Vakman in beeld, gefocust op de hand, het werktuig en het oppervlak. Warm golden hour, soft natural light. Eerlijke materiaal-footage — het ambacht zelf.',
    qualities: ['vakwerk', 'continu', 'documentair', 'soft warm grade'],
  },
  {
    src: '/videos/movie-3.mp4',
    number: 'II',
    title: 'Cinematic + lifestyle reveal',
    description:
      'Begint met backlit close-up (intense gouden rim-light, anamorphic shallow DoF) en bouwt naar een wide interior reveal — figuur in cream jurk loopt naar microcement bad, stoom rijst, oase-uitzicht. Narrative arc: ambacht → afgewerkt interieur.',
    qualities: ['cinematic', 'narrative arc', 'shallow DoF', 'editorial reveal'],
  },
  {
    src: '/videos/movie-4.mp4',
    number: 'III',
    title: 'Hybrid — craft naar architecture reveal',
    description:
      'Begint met vakman in beeld op concrete corridor + microcement vloer, gouden zon door opening achter. Vakman stapt uit beeld, camera blijft locked, ruimte transformeert naar puur architectonisch beeld met afgewerkt floor + atmospheric sun starburst. Beste van take I (documentary) + take II (cinematic), zelfde scene.',
    qualities: ['hybrid', 'vakman → ruimte', 'locked camera', 'sun starburst'],
  },
];

export default function VoorbeeldenPage() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <Link href="/movie-1" style={styles.backLink}>← terug naar scroll-scrub</Link>
        <h1 style={styles.h1}>Twee voorbeelden, twee registers</h1>
        <p style={styles.lead}>
          Take I is pure documentary craft — vakwerk in beeld, geen verhaal. Take II maakt
          een cinematic boog: van ambacht naar afgewerkt interieur met figuur.
          Beide autoplay om ze rustig te bestuderen.
        </p>
      </header>

      <div style={styles.grid}>
        {EXAMPLES.map((ex) => (
          <article key={ex.src} style={styles.card}>
            <div style={styles.videoWrap}>
              <video
                src={ex.src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={styles.video}
              />
              <span style={styles.number}>{ex.number}</span>
            </div>
            <div style={styles.cardMeta}>
              <h2 style={styles.cardTitle}>{ex.title}</h2>
              <p style={styles.cardDesc}>{ex.description}</p>
              <ul style={styles.qualities}>
                {ex.qualities.map((q) => (
                  <li key={q} style={styles.quality}>{q}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Take II heeft de meeste cinematic poging in zich. Take I is eerlijker maar minder
          dramatisch. Welke richting committeren we — pure craft of cinematic reveal?
        </p>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    background: '#0b0b0b',
    color: '#f5f3ee',
    minHeight: '100vh',
    padding: '64px 32px 96px',
    fontFamily: 'Archivo, system-ui, sans-serif',
  },
  header: { maxWidth: 980, margin: '0 auto 56px' },
  backLink: {
    color: '#a8a39a',
    textDecoration: 'none',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  h1: {
    fontFamily: '"Big Shoulders Display", system-ui, sans-serif',
    fontSize: 'clamp(44px, 6vw, 80px)',
    lineHeight: 0.95,
    margin: '24px 0 20px',
    letterSpacing: '-0.01em',
    fontWeight: 700,
  },
  lead: {
    color: '#bdb9af',
    fontSize: 17,
    lineHeight: 1.6,
    maxWidth: 680,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
    gap: 32,
    maxWidth: 1320,
    margin: '0 auto',
  },
  card: {
    background: '#141311',
    border: '1px solid #2a2825',
    borderRadius: 6,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  videoWrap: { position: 'relative', background: '#000', aspectRatio: '16 / 9' },
  video: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  number: {
    position: 'absolute',
    top: 16,
    left: 20,
    color: '#f5f3ee',
    fontFamily: '"Big Shoulders Display", system-ui, sans-serif',
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: '0.02em',
    mixBlendMode: 'difference',
  },
  cardMeta: { padding: '28px 32px 32px' },
  cardTitle: {
    fontFamily: '"Big Shoulders Display", system-ui, sans-serif',
    fontSize: 30,
    margin: '0 0 14px',
    letterSpacing: '-0.005em',
    fontWeight: 600,
  },
  cardDesc: {
    color: '#d0ccc3',
    fontSize: 15,
    lineHeight: 1.65,
    margin: '0 0 20px',
  },
  qualities: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  quality: {
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#a8a39a',
    border: '1px solid #2a2825',
    borderRadius: 999,
    padding: '5px 11px',
  },
  footer: { maxWidth: 720, margin: '64px auto 0', textAlign: 'center' },
  footerText: {
    color: '#a8a39a',
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 1.6,
  },
};
