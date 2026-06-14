'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

/* ------------------------------------------------------------------ */
/* Reveal — IntersectionObserver, eenmalig                             */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'figure' | 'li' | 'p' | 'h2' | 'h3';
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            io.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* ScrubHero — video volgt de scroll (monotone shot)                   */
/* ------------------------------------------------------------------ */
type Beat = { from: number; to: number; kop: string; sub?: string };

export function ScrubHero({
  src,
  poster,
  beats,
  height = 320,
  children,
  className = '',
}: {
  src: string;
  poster?: string;
  beats: Beat[];
  /** scrub-lengte in vh */
  height?: number;
  /** statische overlay (header, meta-rand) */
  children?: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const first = beatRefs.current[0];
      if (first) first.style.opacity = '1';
      return;
    }

    // Gefaseerd laden: de volledige (keyframe-dichte) film pas ophalen
    // zodra de sectie binnen ~3 viewports komt — ruim op tijd gebufferd,
    // maar niet concurrerend met de hero op t=0.
    const lader = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          video.preload = 'auto';
          video.load();
          lader.disconnect();
        }
      },
      { rootMargin: '300% 0px' }
    );
    lader.observe(wrap);

    const FADE = 0.07;
    const ramp = (p: number, from: number, to: number) => {
      const a = Math.min(1, Math.max(0, (p - from) / FADE));
      const b = Math.min(1, Math.max(0, (to - p) / FADE));
      return Math.min(a, b);
    };

    let raf = 0;
    let actief = false;
    let smoothed = 0;

    const tick = () => {
      if (!actief) return;
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;

      if (video.readyState >= 1 && video.duration) {
        const target = p * Math.max(0, video.duration - 0.05);
        smoothed += (target - smoothed) * 0.16;
        if (Math.abs(video.currentTime - smoothed) > 0.008) {
          video.currentTime = smoothed;
        }
      }

      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;

      beats.forEach((beat, i) => {
        const el = beatRefs.current[i];
        if (!el) return;
        const o = ramp(p, beat.from, beat.to);
        el.style.opacity = o.toFixed(3);
        el.style.transform = `translateY(${((1 - o) * 18).toFixed(1)}px)`;
      });

      raf = requestAnimationFrame(tick);
    };

    // De scrub-loop draait alleen terwijl de sectie (bijna) in beeld is.
    const poort = new IntersectionObserver(
      (entries) => {
        const zichtbaar = entries.some((e) => e.isIntersecting);
        if (zichtbaar && !actief) {
          actief = true;
          raf = requestAnimationFrame(tick);
        } else if (!zichtbaar && actief) {
          actief = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: '25% 0px' }
    );
    poort.observe(wrap);

    return () => {
      actief = false;
      cancelAnimationFrame(raf);
      lader.disconnect();
      poort.disconnect();
    };
  }, [beats]);

  return (
    <section className={`scrub ${className}`} ref={wrapRef} style={{ height: `${height}vh` }}>
      <div className="scrub-stage">
        <video
          ref={videoRef}
          className="scrub-video"
          src={src}
          poster={poster}
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          onLoadedMetadata={(e) => {
            try {
              e.currentTarget.currentTime = 0.001;
            } catch {
              /* eerste frame is best effort */
            }
          }}
        />
        <div className="scrub-shade" aria-hidden="true" />
        {beats.map((beat, i) => (
          <div
            className="scrub-beat"
            key={beat.kop}
            ref={(el) => {
              beatRefs.current[i] = el;
            }}
          >
            {i === 0 ? <h1 className="scrub-kop">{beat.kop}</h1> : <p className="scrub-kop">{beat.kop}</p>}
            {beat.sub && <p className="scrub-sub">{beat.sub}</p>}
          </div>
        ))}
        {children}
        <div className="scrub-bar" ref={barRef} aria-hidden="true" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* AmbientVideo — autoplay loop, pauzeert buiten beeld                 */
/* ------------------------------------------------------------------ */
export function AmbientVideo({ src, poster, className = '' }: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      },
      { threshold: 0.12 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/* HoverIndex — dienstenlijst met zwevende beeld-preview               */
/* ------------------------------------------------------------------ */
export function HoverIndex({
  items,
}: {
  items: { nr: string; naam: string; kop: string; tekst: string; img: string; thumb: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ghost = ghostRef.current;
    if (!ghost) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      ghost.style.transform = `translate(${x + 28}px, ${y - 120}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hix" onMouseLeave={() => setActive(null)}>
      <div className="hix-ghost" ref={ghostRef} aria-hidden="true" data-on={active !== null || undefined}>
        {items.map((item, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={item.nr} src={item.img} alt="" data-show={active === i || undefined} loading="lazy" />
        ))}
      </div>
      {items.map((item, i) => (
        <Reveal key={item.nr} delay={i * 60}>
          <a className="hix-row" href="#contact" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
            <span className="hix-nr">{item.nr}</span>
            <span className="hix-naam">{item.naam}</span>
            <span className="hix-kop">{item.kop}</span>
            <span className="hix-pijl" aria-hidden="true">
              →
            </span>
          </a>
          <div className="hix-mobiel" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.thumb} alt="" loading="lazy" />
            <p>{item.tekst}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Accordion — FAQ                                                     */
/* ------------------------------------------------------------------ */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="acc">
      {items.map((item, i) => (
        <Reveal key={item.q} delay={i * 50}>
          <div className="acc-item" data-open={open === i || undefined}>
            <button
              className="acc-knop"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="acc-plus" aria-hidden="true" />
            </button>
            <div className="acc-paneel">
              <p>{item.a}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — trage tekstband                                           */
/* ------------------------------------------------------------------ */
export function Marquee({ tekst, className = '' }: { tekst: string; className?: string }) {
  const inhoud = `${tekst} — `.repeat(4);
  return (
    <div className={`mq ${className}`} aria-hidden="true">
      <div className="mq-baan">
        <span>{inhoud}</span>
        <span>{inhoud}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DesignSwitcher — wissel tussen de drie ontwerpen                    */
/* ------------------------------------------------------------------ */
const ONTWERPEN = [
  { pad: '/new', naam: 'Atelier' },
  { pad: '/new/nacht', naam: 'Nacht' },
  { pad: '/new/galerie', naam: 'Galerie' },
  { pad: '/new/studio', naam: 'Studio' },
];

export function DesignSwitcher() {
  const pathname = usePathname();
  return (
    <nav className="dsw" aria-label="Ontwerp-varianten">
      <span className="dsw-label">Ontwerp</span>
      {ONTWERPEN.map((o) => (
        <a key={o.pad} href={o.pad} className="dsw-link" data-active={pathname === o.pad || undefined}>
          {o.naam}
        </a>
      ))}
      <a href="/" className="dsw-link dsw-terug">
        Huidig ↗
      </a>
    </nav>
  );
}
