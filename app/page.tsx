import ScrollHero from './components/ScrollHero';
import VakwerkSection from './components/VakwerkSection';
import SiteContent from './components/SiteContent';
import MovieSwitcher from './components/MovieSwitcher';

/**
 * Long-scroll homepage:
 *   1. Hero (take II — cinematic reveal van movie-3) als scroll-scrub
 *   2. Vakwerk-sectie (take I — documentary craft van movie-1) als ambient loop
 *   3. SiteContent — diensten / werkwijze / contact
 *   4. MovieSwitcher (no active state) — voor preview van individuele takes
 */
export default function Home() {
  return (
    <>
      <ScrollHero src="/videos/movie-3.mp4" />
      <VakwerkSection />
      <SiteContent />
      <MovieSwitcher />
    </>
  );
}
