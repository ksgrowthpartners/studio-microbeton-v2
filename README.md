# Studio Microbeton — scroll-hero website

Next.js-site met een Apple-stijl scroll-scrub hero: de film speelt niet af,
maar scrubt vooruit terwijl je scrolt. Drie voorbeelden, één codebase:

| Route      | Video                    |
| ---------- | ------------------------ |
| `/movie-1` | `public/videos/movie-1.mp4` |
| `/movie-2` | `public/videos/movie-2.mp4` |
| `/movie-3` | `public/videos/movie-3.mp4` |

Rechtsonder zit een **Take-switcher** (1 · 2 · 3) om live te wisselen.
De root `/` stuurt door naar `/movie-1`.

## 1. Installeren

```bash
npm install
```

## 2. Video's plaatsen

Download de drie takes uit Runway (Assets, tags *movie 1/2/3*) en
optimaliseer ze voor scrubben — dit is belangrijk, anders hakkelt het beeld:

```bash
ffmpeg -i take.mp4 -vf "scale=1920:-2" -an -c:v libx264 -preset slow -crf 18 \
  -g 1 -pix_fmt yuv420p -movflags +faststart public/videos/movie-1.mp4
```

Herhaal voor `movie-2.mp4` en `movie-3.mp4`.

Waarom deze vlaggen:

- `-g 1` — elke frame wordt een keyframe, waardoor `currentTime`-seeks
  boterzacht zijn. Bestand wordt groter; bij 8–10 s is dat prima.
- `-an` — geluid eruit. De hero speelt sowieso muted (autoplay-beleid),
  en de Veo-take heeft een audiospoor dat je hier niet nodig hebt.
- `-movflags +faststart` — metadata vooraan, dus direct scrubbaar tijdens laden.

## 3. Draaien

```bash
npm run dev
```

Open <http://localhost:3000> en scroll.

## Aanpassen

- **Tekstmomenten in de hero** — bovenin
  `app/components/ScrollHero.tsx` staat de `BEATS`-array (copy + timing
  als scroll-progressie 0→1).
- **Scrublengte** — de `.hero-wrap` hoogte in `app/globals.css`
  (`.hero-wrap { height: 420vh }`). Hoger = trager scrubben.
- **Kleuren & typografie** — tokens bovenin `app/globals.css`.
- **Contactgegevens** — placeholders (mail/telefoon) in
  `app/components/SiteContent.tsx`, sectie Contact.
- **Projectfoto's** — vervang de `swatch`-blokken in `SiteContent.tsx`
  door echte projectbeelden zodra die er zijn.

## Deploy (Coolify)

Standaard Nixpacks-flow werkt direct: build `npm run build`, start
`npm run start`. Let op: de mp4's staan in `public/`, dus ze moeten mee
in de repo of via een volume beschikbaar zijn.
