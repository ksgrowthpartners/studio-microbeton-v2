'use client';

import { useEffect, useRef } from 'react';

/**
 * Vakwerk-sectie onder de hero — toont take I (documentary craft)
 * als ambient autoplay loop met overlay copy. Het ambacht naast de
 * cinematic hero erboven.
 */
export default function VakwerkSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Respect reduced-motion: pauzeer op eerste frame
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
      try {
        v.currentTime = 1.5;
      } catch {
        /* best effort */
      }
    }
  }, []);

  return (
    <section className="vakwerk" aria-label="Het vakwerk">
      <video
        ref={videoRef}
        className="vakwerk-video"
        src="/videos/movie-1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="vakwerk-shade" aria-hidden="true" />
      <div className="vakwerk-content">
        <p className="vakwerk-eyebrow">Het Vakwerk</p>
        <h2 className="vakwerk-title">
          Met de hand gespaand.
          <br />
          Spaanslag voor spaanslag.
        </h2>
        <p className="vakwerk-lede">
          Elke laag wordt door dezelfde vakman gezet. Geen tegels, geen
          machines die het werk doen — alleen materiaal, troffel en tijd.
        </p>
      </div>
    </section>
  );
}
