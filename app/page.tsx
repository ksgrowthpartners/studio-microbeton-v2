import { redirect } from 'next/navigation';

/**
 * De STUDIO-variant is de enige actieve site.
 * '/' wordt op elke host herschreven naar /new/studio (zie next.config.ts);
 * deze redirect is de fallback wanneer de rewrite niet matcht.
 */
export default function Home() {
  redirect('/new/studio');
}
