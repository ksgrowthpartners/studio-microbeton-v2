'use client';

import { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* LogoMark — officieel MB-beeldmerk: M en B delen de middenstam       */
/* (ligatuur) in een vierkant kader. Theme-aware via currentColor.     */
/* Canonieke asset: public/logo-mark.svg (zelfde geometrie).           */
/* ------------------------------------------------------------------ */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false">
      <rect x="7" y="7" width="106" height="106" stroke="currentColor" strokeWidth="8" />
      <g stroke="currentColor" strokeWidth="11" strokeLinejoin="miter" strokeLinecap="butt">
        {/* M + gedeelde middenstam */}
        <path d="M32 88 V32 L47 60 L62 32 V88" />
        {/* B — bovenste kom */}
        <path d="M62 32 H82 V58 H62" />
        {/* B — onderste kom (iets breder) */}
        <path d="M62 58 H88 V88 H62" />
      </g>
    </svg>
  );
}

const NAV = [
  { href: '#materialen', label: 'Materialen' },
  { href: '#werk', label: 'Werk' },
  { href: '#werkwijze', label: 'Werkwijze' },
  { href: '#gesprek', label: 'Contact' },
];

export function StudioHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Balk wisselt van transparant (over de hero) naar massief (gegoten carbon)
  useEffect(() => {
    let raf = 0;
    const meet = () => {
      raf = 0;
      setScrolled(window.scrollY > window.innerHeight * 0.62);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(meet);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    meet();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Overlay-menu: scroll-lock + Escape-sluiten
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sw-bar" data-scrolled={scrolled || undefined}>
        <a className="sw-merk" href="#top" aria-label="Studio Microbeton — terug naar boven">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sw-merk-logo" src="/logo-official.webp" alt="Studio Microbeton" width={800} height={234} />
        </a>

        <nav className="sw-nav" aria-label="Hoofdmenu">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="sw-bar-acties">
          <a className="sw-blok-cta sw-bar-cta" href="#gesprek">
            Adviesgesprek
          </a>
          <button
            type="button"
            className="sw-menu-knop"
            aria-label="Menu openen"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="sw-overlay" data-open={open || undefined} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="sw-overlay-kop">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sw-merk-logo" src="/logo-official.webp" alt="Studio Microbeton" width={800} height={234} />
          <button type="button" className="sw-menu-sluit" aria-label="Menu sluiten" onClick={() => setOpen(false)}>
            <span />
            <span />
          </button>
        </div>
        <nav className="sw-overlay-nav" aria-label="Menu">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ transitionDelay: `${i * 55}ms` }}>
              <span className="sw-overlay-nr">0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="sw-blok-cta sw-blok-cta--vol sw-overlay-cta" href="#gesprek" onClick={() => setOpen(false)}>
          Plan een adviesgesprek
        </a>
      </div>
    </>
  );
}
