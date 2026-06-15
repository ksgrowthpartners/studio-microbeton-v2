import type { Metadata } from 'next';
import { CONTACT } from '../new/content';

export const metadata: Metadata = {
  title: 'Privacybeleid | Studio Microbeton',
  description: 'Hoe Studio Microbeton omgaat met je persoonsgegevens — verzameling, gebruik, cookies, bewaartermijnen en je rechten onder de AVG.',
  alternates: { canonical: 'https://www.studiomicrobeton.nl/privacy' },
  robots: { index: true, follow: true },
};

const S: Record<string, React.CSSProperties> = {
  main: {
    background: '#d4d4ce',
    color: '#16181a',
    minHeight: '100vh',
    fontFamily: "'Archivo', system-ui, sans-serif",
    padding: 'clamp(48px, 9vh, 110px) clamp(20px, 6vw, 64px) 96px',
  },
  wrap: { maxWidth: 760, margin: '0 auto' },
  back: {
    fontFamily: 'monospace',
    fontSize: 12,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#97361f',
    textDecoration: 'none',
  },
  h1: { fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.04, margin: '20px 0 8px' },
  lead: { color: '#4b5052', fontSize: 16, lineHeight: 1.6, margin: '0 0 40px' },
  h2: { fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-0.01em', margin: '36px 0 10px' },
  p: { color: '#3a3f42', fontSize: 15.5, lineHeight: 1.7, margin: '0 0 12px' },
  li: { color: '#3a3f42', fontSize: 15.5, lineHeight: 1.7, margin: '0 0 6px' },
  a: { color: '#97361f' },
  hr: { border: 0, borderTop: '1px solid rgba(22,24,26,0.16)', margin: '40px 0' },
  small: { color: '#4b5052', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.04em' },
};

export default function Privacy() {
  return (
    <main style={S.main}>
      <div style={S.wrap}>
        <a style={S.back} href="/">
          ← Studio Microbeton
        </a>
        <h1 style={S.h1}>Privacybeleid</h1>
        <p style={S.lead}>
          Studio Microbeton respecteert je privacy en verwerkt persoonsgegevens uitsluitend in overeenstemming met de
          Algemene Verordening Gegevensbescherming (AVG). Dit beleid legt uit welke gegevens we verzamelen, waarom, en
          welke rechten je hebt.
        </p>

        <h2 style={S.h2}>1. Verwerkingsverantwoordelijke</h2>
        <p style={S.p}>
          Studio Microbeton, {CONTACT.straat}, {CONTACT.postcode} {CONTACT.stad}.<br />
          E-mail: <a style={S.a} href={`mailto:${CONTACT.mail}`}>{CONTACT.mail}</a> · Telefoon:{' '}
          <a style={S.a} href={`tel:${CONTACT.tel}`}>{CONTACT.telLabel}</a>
        </p>

        <h2 style={S.h2}>2. Welke gegevens we verzamelen</h2>
        <p style={S.p}>
          Wanneer je een offerte aanvraagt of contact opneemt, verwerken we de gegevens die je zelf verstrekt: naam,
          e-mailadres, telefoonnummer, adres van het project en de inhoud van je bericht. Bij een bezoek aan de website
          worden technische gegevens (zoals IP-adres en browsertype) kortstondig verwerkt om de site te leveren en te
          beveiligen.
        </p>

        <h2 style={S.h2}>3. Doeleinden en grondslag</h2>
        <ul>
          <li style={S.li}>Het opstellen en uitbrengen van een offerte en het uitvoeren van een opdracht (uitvoering van een overeenkomst).</li>
          <li style={S.li}>Contact met je opnemen naar aanleiding van je aanvraag (gerechtvaardigd belang).</li>
          <li style={S.li}>Het beveiligen en verbeteren van de website (gerechtvaardigd belang).</li>
          <li style={S.li}>Statistieken en advertentiemeting — uitsluitend met je toestemming (zie cookies).</li>
        </ul>

        <h2 style={S.h2}>4. Cookies en statistieken</h2>
        <p style={S.p}>
          De website plaatst zelf geen tracking- of advertentiecookies zonder je toestemming. Wanneer we statistieken
          (bijv. Google Analytics) of advertentiemeting (bijv. Google Ads) inschakelen, gebeurt dat pas nadat je daarvoor
          toestemming hebt gegeven, en worden gegevens met respect voor je privacy verwerkt. Functionele cookies die nodig
          zijn om de site te laten werken, zijn altijd toegestaan.
        </p>

        <h2 style={S.h2}>5. Delen met derden</h2>
        <p style={S.p}>
          We verkopen je gegevens niet. We delen ze alleen met partijen die ons helpen onze dienst te leveren (zoals onze
          hostingpartij), of wanneer dat wettelijk verplicht is. Met deze partijen maken we afspraken over de bescherming
          van je gegevens.
        </p>

        <h2 style={S.h2}>6. Bewaartermijnen</h2>
        <p style={S.p}>
          We bewaren je gegevens niet langer dan nodig. Offerte- en contactgegevens bewaren we voor de duur van het
          contact en, bij een opdracht, gedurende de wettelijke (fiscale) bewaarplicht.
        </p>

        <h2 style={S.h2}>7. Beveiliging</h2>
        <p style={S.p}>
          We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen tegen verlies of
          onrechtmatige verwerking. De website wordt volledig via een beveiligde verbinding (HTTPS) aangeboden.
        </p>

        <h2 style={S.h2}>8. Jouw rechten</h2>
        <p style={S.p}>
          Je hebt het recht op inzage, correctie, verwijdering, beperking en overdracht van je gegevens, en je kunt
          gegeven toestemming intrekken. Stuur hiervoor een e-mail naar{' '}
          <a style={S.a} href={`mailto:${CONTACT.mail}`}>{CONTACT.mail}</a>. Ben je het oneens met hoe we met je gegevens
          omgaan? Dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.
        </p>

        <h2 style={S.h2}>9. Wijzigingen</h2>
        <p style={S.p}>
          We kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest actuele versie staat altijd op deze pagina.
        </p>

        <hr style={S.hr} />
        <p style={S.small}>Laatst bijgewerkt: juni 2026 · Studio Microbeton</p>
      </div>
    </main>
  );
}
