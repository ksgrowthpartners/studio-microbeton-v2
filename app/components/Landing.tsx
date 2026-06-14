import ScrollHero from './ScrollHero';
import SiteContent from './SiteContent';
import MovieSwitcher from './MovieSwitcher';

export default function Landing({ movie }: { movie: 1 | 2 | 3 | 4 }) {
  return (
    <>
      <ScrollHero src={`/videos/movie-${movie}.mp4`} />
      <SiteContent />
      <MovieSwitcher active={movie} />
    </>
  );
}
