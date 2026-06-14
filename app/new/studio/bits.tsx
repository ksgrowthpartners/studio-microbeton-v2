'use client';

import { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* MmGauge — de meetlat-rail: scrollen = de vloer aanbrengen (0→3 mm)  */
/* ------------------------------------------------------------------ */
export function MmGauge() {
  const fillRef = useRef<HTMLDivElement>(null);
  const [readout, setReadout] = useState('0.0 mm');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReadout('3.0 mm — uitgehard');
      if (fillRef.current) fillRef.current.style.transform = 'scaleY(1)';
      return;
    }

    let raf = 0;
    let laatste = '';
    let vorigeP = -1;

    const tick = () => {
      const totaal = document.documentElement.scrollHeight - window.innerHeight;
      const p = totaal > 0 ? Math.min(1, Math.max(0, window.scrollY / totaal)) : 0;
      if (p !== vorigeP) {
        vorigeP = p;
        if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`;
        const tekst = p > 0.985 ? '3.0 mm — uitgehard' : `${(p * 3).toFixed(1)} mm`;
        if (tekst !== laatste) {
          laatste = tekst;
          setReadout(tekst);
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="sw-rail" aria-hidden="true">
      <span className="sw-rail-meting">{readout}</span>
      <div className="sw-rail-ticks" />
      <div className="sw-rail-vulling" ref={fillRef} />
      <span className="sw-rail-merk">S—M</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TellerRol — telt op zodra zichtbaar, tabular-nums, nl-NL formaat    */
/* ------------------------------------------------------------------ */
export function TellerRol({
  waarde,
  prefix = '',
  suffix = '',
  duur = 900,
}: {
  waarde: number;
  prefix?: string;
  suffix?: string;
  duur?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [getal, setGetal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setGetal(waarde);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const stap = (nu: number) => {
          const t = Math.min(1, (nu - start) / duur);
          const eased = 1 - Math.pow(1 - t, 3);
          setGetal(Math.round(waarde * eased));
          if (t < 1) raf = requestAnimationFrame(stap);
        };
        raf = requestAnimationFrame(stap);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [waarde, duur]);

  return (
    <span ref={ref} className="sw-teller">
      {prefix}
      {getal.toLocaleString('nl-NL')}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* PlayOnce — speelt één keer af en blijft op het laatste frame staan  */
/* ------------------------------------------------------------------ */
export function PlayOnce({ src, poster, className = '' }: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      try {
        video.currentTime = Math.max(0, video.duration - 0.05);
      } catch {
        /* poster blijft staan */
      }
      return;
    }
    video.play().catch(() => {});
  }, []);

  return (
    <video ref={ref} className={className} src={src} poster={poster} muted playsInline preload="auto" aria-hidden="true" />
  );
}
