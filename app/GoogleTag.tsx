import Script from 'next/script';

/**
 * Google Tag (Ads/Analytics) — alleen actief als NEXT_PUBLIC_GTAG_ID gezet is.
 * Consent Mode v2 staat standaard op "denied": geen tracking-cookies tot er
 * toestemming is (AVG-veilig). Een consent-banner kan later
 * gtag('consent','update',{...'granted'}) aanroepen om volledige meting te starten.
 * Voor Google Ads: zet NEXT_PUBLIC_GTAG_ID (bijv. "AW-XXXXXXXXX" of "G-XXXXXXX").
 */
export function GoogleTag() {
  const id = process.env.NEXT_PUBLIC_GTAG_ID;
  if (!id) return null;

  return (
    <>
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`gtag('js', new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
