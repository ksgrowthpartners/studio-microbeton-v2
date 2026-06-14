'use client';

import { useEffect, useRef } from 'react';

type Beat = {
  from: number;
  to: number;
  title: string;
  sub?: string;
  logo?: boolean;
};

/**
 * Tekstmomenten tijdens het scrubben.
 * from/to zijn scroll-progressie (0 = boven, 1 = hero uitgescrold).
 * Pas hier de copy aan.
 */
const BEATS: Beat[] = [
  { from: -1, to: 0.2, title: 'Naadloos vakwerk in microbeton', sub: 'Scroll — de film volgt jou', logo: true },
  { from: 0.28, to: 0.5, title: 'Eén doorlopend materiaal.' },
  { from: 0.56, to: 0.78, title: 'Van ruwbouw tot rust.' },
  { from: 0.84, to: 2, title: 'Wanden. Vloeren. Trappen. Meubels.', sub: 'Studio Microbeton' },
];

const FADE = 0.06;

function ramp(p: number, from: number, to: number) {
  const a = Math.min(1, Math.max(0, (p - from) / FADE));
  const b = Math.min(1, Math.max(0, (to - p) / FADE));
  return Math.min(a, b);
}

export default function ScrollHero({ src }: { src: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    // Bij verminderde-beweging-voorkeur: geen scrub, alleen het eerste beeld + logo.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const first = beatRefs.current[0];
      if (first) first.style.opacity = '1';
      return;
    }

    let raf = 0;
    let smoothed = 0;

    const tick = () => {
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;

      // Video scrubben met lichte demping voor een vloeiend beeld.
      if (video.readyState >= 1 && video.duration) {
        const target = p * Math.max(0, video.duration - 0.05);
        smoothed += (target - smoothed) * 0.16;
        if (Math.abs(video.currentTime - smoothed) > 0.008) {
          video.currentTime = smoothed;
        }
      }

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${p})`;
      }

      BEATS.forEach((beat, i) => {
        const el = beatRefs.current[i];
        if (!el) return;
        const o = ramp(p, beat.from, beat.to);
        el.style.opacity = o.toFixed(3);
        el.style.transform = `translate(-50%, calc(-50% + ${((1 - o) * 14).toFixed(1)}px))`;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero-wrap" ref={wrapRef} aria-label="Studio Microbeton introductiefilm">
      <div className="hero-stage">
        <video
          ref={videoRef}
          className="hero-video"
          src={src}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            try {
              e.currentTarget.currentTime = 0.001;
            } catch {
              /* eerste frame tonen is best effort */
            }
          }}
        />
        <div className="hero-shade" aria-hidden="true" />
        {BEATS.map((beat, i) => (
          <div
            className="beat"
            key={beat.title}
            ref={(el) => {
              beatRefs.current[i] = el;
            }}
          >
            {beat.logo && <img src="/logo.png" alt="" className="beat-logo" />}
            {i === 0 ? (
              <h1 className="beat-title">{beat.title}</h1>
            ) : (
              <p className="beat-title">{beat.title}</p>
            )}
            {beat.sub && <p className="beat-sub">{beat.sub}</p>}
          </div>
        ))}
        <div className="hero-bar" ref={barRef} aria-hidden="true" />
      </div>
    </section>
  );
}
