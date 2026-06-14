import Link from 'next/link';

export default function MovieSwitcher({ active }: { active?: number }) {
  return (
    <nav className="switcher" aria-label="Wissel van herofilm">
      <span className="switcher-label">Take</span>
      {[1, 2, 3, 4].map((n) => (
        <Link
          key={n}
          href={`/movie-${n}`}
          className={`switcher-link${n === active ? ' is-active' : ''}`}
          aria-current={n === active ? 'page' : undefined}
        >
          {n}
        </Link>
      ))}
    </nav>
  );
}
