import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/* Lichte in-memory rate-limit (single-instance Coolify). */
const hits = new Map<string, number[]>();
function teVeel(ip: string, max = 5, venster = 60 * 60 * 1000) {
  const nu = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => nu - t < venster);
  arr.push(nu);
  hits.set(ip, arr);
  return arr.length > max;
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'onbekend';
    if (teVeel(ip)) {
      return NextResponse.json({ ok: false, error: 'Te veel aanvragen. Probeer het later opnieuw.' }, { status: 429 });
    }

    const data = await req.json().catch(() => null);
    if (!data) return NextResponse.json({ ok: false, error: 'Ongeldige aanvraag.' }, { status: 400 });

    // Honeypot: bots vullen dit verborgen veld → doe alsof het lukte.
    if (typeof data._gotcha === 'string' && data._gotcha.trim() !== '') {
      return NextResponse.json({ ok: true });
    }

    const naam = String(data.naam || '').trim();
    const email = String(data.email || '').trim();
    const telefoon = String(data.telefoon || '').trim();
    const onderwerp = String(data.onderwerp || '').trim();
    const bericht = String(data.bericht || '').trim();
    const bron = String(data.bron || '').trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (naam.length < 2) return NextResponse.json({ ok: false, error: 'Vul je naam in.' }, { status: 400 });
    if (!emailOk && telefoon.length < 6) {
      return NextResponse.json({ ok: false, error: 'Vul een geldig e-mailadres of telefoonnummer in.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.OFFERTE_TO || user || 'info@studiomicrobeton.nl';
    const from = process.env.OFFERTE_FROM || user || 'info@studiomicrobeton.nl';

    if (!user || !pass) {
      // Lokaal (geen SMTP-config) → log de lead zodat het formulier testbaar is.
      if (process.env.NODE_ENV !== 'production') {
        console.log('[offerte] DEV — geen SMTP, lead:', { naam, email, telefoon, onderwerp, bericht, bron });
        return NextResponse.json({ ok: true, dev: true });
      }
      console.error('[offerte] SMTP_USER/SMTP_PASS ontbreekt in productie');
      return NextResponse.json(
        { ok: false, error: 'Verzenden is tijdelijk niet beschikbaar. Mail of bel ons gerust direct.' },
        { status: 500 }
      );
    }

    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const rij = (l: string, v: string) =>
      v
        ? `<tr><td style="padding:5px 16px 5px 0;color:#8a8f91;font:12px monospace;vertical-align:top">${l}</td><td style="padding:5px 0;font-size:14px">${esc(v)}</td></tr>`
        : '';

    const html = `<div style="font-family:Helvetica,Arial,sans-serif;color:#16181a;max-width:560px">
      <p style="font:11px monospace;letter-spacing:.14em;text-transform:uppercase;color:#97361f;margin:0 0 6px">Studio Microbeton</p>
      <h2 style="margin:0 0 18px;font-size:20px">Nieuwe offerte-aanvraag</h2>
      <table style="border-collapse:collapse;border-top:1px solid #e0e0db;border-bottom:1px solid #e0e0db">
        ${rij('Naam', naam)}
        ${rij('E-mail', email)}
        ${rij('Telefoon', telefoon)}
        ${rij('Onderwerp', onderwerp)}
        ${rij('Bron', bron)}
      </table>
      ${bericht ? `<p style="margin:18px 0 4px;font:11px monospace;letter-spacing:.14em;text-transform:uppercase;color:#8a8f91">Bericht</p><p style="white-space:pre-wrap;font-size:14px;line-height:1.5">${esc(bericht)}</p>` : ''}
    </div>`;

    const text = [
      'Nieuwe offerte-aanvraag — Studio Microbeton',
      '',
      `Naam:     ${naam}`,
      `E-mail:   ${email}`,
      `Telefoon: ${telefoon}`,
      `Onderwerp:${onderwerp ? ' ' + onderwerp : ''}`,
      `Bron:     ${bron}`,
      '',
      'Bericht:',
      bericht || '—',
    ].join('\n');

    await transport.sendMail({
      from: `Studio Microbeton <${from}>`,
      to,
      replyTo: emailOk ? `${naam} <${email}>` : undefined,
      subject: `Offerte-aanvraag — ${naam}${onderwerp ? ` · ${onderwerp}` : ''}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[offerte] verzendfout', e);
    return NextResponse.json(
      { ok: false, error: 'Er ging iets mis bij het verzenden. Probeer het later of mail ons direct.' },
      { status: 500 }
    );
  }
}
