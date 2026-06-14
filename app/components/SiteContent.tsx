import Reveal from './Reveal';

export default function SiteContent() {
  return (
    <main>
      {/* Statement */}
      <section className="band band--kalk">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Studio Microbeton</p>
            <h2 className="display display--xl">
              Wanden, vloeren, trappen en meubels — gegoten tot één geheel.
            </h2>
            <p className="lede">
              Wij werken met Mortex, microcement en gietvloeren: doorlopende
              oppervlakken zonder naden of voegen. Voor badkamers en woningen,
              en met epoxy- en PU-vloeren ook voor zakelijke ruimtes.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="slab" aria-hidden="true" />

      {/* Diensten als materiaallagen */}
      <section className="band band--zand" id="diensten">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Mortex &amp; microcement</p>
            <h2 className="display">De badkamer zonder tegels</h2>
            <p className="lede">
              Waterdicht en met de hand gespaand: wanden, douchevloeren,
              wastafels, trappen en maatwerkmeubels in één doorlopende
              minerale huid. Elke spaanslag blijft zichtbaar — geen twee
              projecten zijn gelijk.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="slab" aria-hidden="true" />

      <section className="band band--greige">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Gietvloeren</p>
            <h2 className="display">Eén vloer, van muur tot muur</h2>
            <p className="lede">
              Naadloze woonvloeren in zand-, greige- en betontinten.
              Onderhoudsarm, geschikt voor vloerverwarming en zonder
              dilataties in het zicht.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="slab" aria-hidden="true" />

      <section className="band band--beton">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Zakelijk</p>
            <h2 className="display">Epoxy &amp; PU voor bedrijven</h2>
            <p className="lede">
              Kantoren, retail, horeca en werkplaatsen: slijtvaste epoxy- en
              PU-gietvloeren die dagelijks gebruik aankunnen en er strak
              blijven uitzien.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="slab" aria-hidden="true" />

      {/* Werkwijze — echte volgorde, dus genummerd */}
      <section className="band band--kalk" id="werkwijze">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Werkwijze</p>
            <h2 className="display">In lagen opgebouwd</h2>
          </Reveal>
          <div className="steps">
            <Reveal className="step">
              <span className="step-num">01</span>
              <h3>Advies &amp; proefstaal</h3>
              <p>
                We bekijken de ruimte, kiezen kleur en textuur en maken een
                staal op maat, zodat je weet wat je krijgt.
              </p>
            </Reveal>
            <Reveal className="step">
              <span className="step-num">02</span>
              <h3>Ondergrond</h3>
              <p>
                Egaliseren, primeren en drogen. Het onzichtbare werk dat de
                levensduur bepaalt.
              </p>
            </Reveal>
            <Reveal className="step">
              <span className="step-num">03</span>
              <h3>Aanbrengen</h3>
              <p>
                Twee tot drie lagen, met de hand gespaand. Hier ontstaat de
                tekening van het oppervlak.
              </p>
            </Reveal>
            <Reveal className="step">
              <span className="step-num">04</span>
              <h3>Sealen &amp; nazorg</h3>
              <p>
                Een beschermlaag tegen water en slijtage, plus duidelijk
                onderhoudsadvies.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="slab" aria-hidden="true" />

      {/* Recent werk */}
      <section className="band band--zand" id="werk">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Recent werk</p>
            <h2 className="display">Materiaal in de praktijk</h2>
          </Reveal>
          <div className="cards">
            <Reveal className="card">
              <div className="swatch sw-1" aria-hidden="true" />
              <h3>Badkamer — Mortex naturel</h3>
              <p>Wanden, douchevloer en wastafel in één tint.</p>
            </Reveal>
            <Reveal className="card">
              <div className="swatch sw-2" aria-hidden="true" />
              <h3>Woonhuis — gietvloer zand</h3>
              <p>Begane grond zonder één naad, met vloerverwarming.</p>
            </Reveal>
            <Reveal className="card">
              <div className="swatch sw-3" aria-hidden="true" />
              <h3>Kantoor — PU antraciet</h3>
              <p>Slijtvast en stil onder de voet, strak onder licht.</p>
            </Reveal>
          </div>
          <Reveal>
            <p className="note">Projectfoto&apos;s volgen — vervang deze stalen door eigen werk.</p>
          </Reveal>
        </div>
      </section>

      <div className="slab" aria-hidden="true" />

      {/* Contact */}
      <section className="band band--beton band--cta" id="contact">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="display display--xl">Plan een adviesgesprek</h2>
            <p className="lede">
              Vertel kort over je ruimte en wensen, dan plannen we een moment
              voor advies en een proefstaal.
            </p>
            <p className="cta-row">
              <a className="btn" href="mailto:info@studiomicrobeton.nl">
                Mail Studio Microbeton
              </a>
              <a className="btn btn--ghost" href="tel:+31600000000">
                Bel 06&nbsp;00&nbsp;00&nbsp;00&nbsp;00
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-row">
          <img src="/logo.png" alt="Studio Microbeton" className="footer-logo" />
          <p>© 2026 Studio Microbeton — Mortex · Microcement · Gietvloeren · Epoxy</p>
        </div>
      </footer>
    </main>
  );
}
