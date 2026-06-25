'use client';

import { useEffect, useState, type FormEvent } from 'react';

const ONDERWERPEN = ['Vloer', 'Wand', 'Badkamer', 'Trap', 'Zakelijk / industrie', 'Iets anders'];

type Status = 'idle' | 'sturen' | 'ok' | 'fout';

export function OfferteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [fout, setFout] = useState('');
  const [naam, setNaam] = useState('');
  const [bron, setBron] = useState('');

  // Onthoud vanaf welke pagina de bezoeker kwam (bv. /materialen/microcement).
  useEffect(() => {
    const ref = document.referrer && document.referrer.includes(location.host) ? document.referrer : '';
    setBron(ref || location.pathname || 'homepage');
  }, []);

  async function verstuur(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sturen') return;
    const f = new FormData(e.currentTarget);
    const naamV = String(f.get('naam') || '').trim();
    const emailV = String(f.get('email') || '').trim();
    const telV = String(f.get('telefoon') || '').trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailV);
    if (naamV.length < 2) {
      setFout('Vul je naam in.');
      return;
    }
    if (!emailOk && telV.length < 6) {
      setFout('Vul een geldig e-mailadres of telefoonnummer in.');
      return;
    }

    setFout('');
    setStatus('sturen');
    try {
      const res = await fetch('/api/offerte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: naamV,
          email: emailV,
          telefoon: telV,
          onderwerp: String(f.get('onderwerp') || ''),
          bericht: String(f.get('bericht') || ''),
          bron,
          _gotcha: String(f.get('_gotcha') || ''),
        }),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (res.ok && json.ok) {
        setNaam(naamV);
        setStatus('ok');
      } else {
        setFout(json.error || 'Er ging iets mis. Probeer het later opnieuw.');
        setStatus('fout');
      }
    } catch {
      setFout('Geen verbinding. Controleer je internet en probeer opnieuw.');
      setStatus('fout');
    }
  }

  if (status === 'ok') {
    return (
      <div className="sw-form sw-form--ok" role="status" aria-live="polite">
        <p className="sw-form-ok-merk">Aanvraag ontvangen</p>
        <p className="sw-form-ok-kop">
          Bedankt{naam ? `, ${naam}` : ''}.
        </p>
        <p className="sw-form-ok-tekst">
          We hebben je aanvraag binnen en nemen <strong>binnen één werkdag</strong> persoonlijk contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form className="sw-form" onSubmit={verstuur} noValidate aria-label="Offerte aanvragen">
      <p className="sw-form-titel">Gratis offerte aanvragen</p>

      <div className="sw-form-rij">
        <label className="sw-veld">
          <span>Naam</span>
          <input name="naam" type="text" autoComplete="name" required placeholder="Voor- en achternaam" />
        </label>
        <label className="sw-veld">
          <span>E-mail</span>
          <input name="email" type="email" autoComplete="email" placeholder="naam@voorbeeld.nl" />
        </label>
      </div>

      <div className="sw-form-rij">
        <label className="sw-veld">
          <span>Telefoon</span>
          <input name="telefoon" type="tel" autoComplete="tel" placeholder="+31 6 …" />
        </label>
        <label className="sw-veld">
          <span>Waar gaat het om?</span>
          <select name="onderwerp" defaultValue="">
            <option value="" disabled>
              Kies een onderwerp
            </option>
            {ONDERWERPEN.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="sw-veld">
        <span>Bericht — optioneel</span>
        <textarea name="bericht" rows={3} placeholder="Ruimte, ± m², locatie en wanneer je het wilt laten doen." />
      </label>

      {/* Honeypot — verborgen voor mensen, ingevuld door bots */}
      <input
        className="sw-form-hp"
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="sw-form-actie">
        <button type="submit" className="sw-blok-cta sw-blok-cta--vol" disabled={status === 'sturen'}>
          {status === 'sturen' ? 'Versturen…' : 'Verstuur aanvraag'}
        </button>
        <span className="sw-form-klein">Gratis · vaste prijs · reactie binnen 1 werkdag</span>
      </div>

      {status === 'fout' && fout && (
        <p className="sw-form-status" role="alert">
          {fout}
        </p>
      )}
    </form>
  );
}
