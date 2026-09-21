import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { site } from '../content';

const sections = [
  { href: '#work', label: 'Work' },
  // Too many items to fit a 390px viewport; the long two drop out on mobile
  // and stay reachable by scrolling.
  { href: '#experience', label: 'Experience', secondary: true },
  { href: '#education', label: 'Education', secondary: true },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Spring the raw progress so the bar glides instead of tracking every pixel.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'border-b border-line/60 bg-ink/70 backdrop-blur-xl' : ''
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm tracking-[0.2em] text-fg"
        >
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-electric transition-transform duration-300 group-hover:scale-150"
          />
          {site.initials}
        </a>

        <ul className="flex items-center gap-6 sm:gap-7">
          {sections.map(({ href, label, secondary }) => (
            <li key={href} className={secondary ? 'hidden sm:block' : undefined}>
              <a
                href={href}
                className="relative font-mono text-sm text-fg-dim transition-colors duration-300 hover:text-fg after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-electric after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="h-px origin-left bg-gradient-to-r from-electric to-electric/30"
      />
    </header>
  );
}
