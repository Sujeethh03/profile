import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownIcon } from '@phosphor-icons/react';
import { site } from '../content';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The signature moment. The role rises word-by-word from behind a mask, an
 * electric rule draws under it, and the supporting copy follows. This is the
 * only orchestrated sequence on the page — everything below is quiet by
 * comparison, so arrival is the thing you remember.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const words = site.role.split(' ');

  return (
    <section className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-6 pt-32 pb-24 sm:px-10">
      <motion.p
        className="label flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span aria-hidden className="h-px w-8 bg-electric/70" />
        {site.name}
      </motion.p>

      <h1 className="mt-7 font-display text-[clamp(3rem,10.5vw,8.5rem)] leading-[0.88] font-bold tracking-[-0.045em] text-fg">
        {words.map((word, i) => (
          // Each word gets a clipping wrapper so it slides out from nothing
          // rather than fading in place.
          <span key={word} className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block"
              initial={reduced ? { opacity: 0 } : { y: '110%' }}
              animate={reduced ? { opacity: 1 } : { y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15 + i * 0.11,
                ease: EASE,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.span
        aria-hidden
        className="mt-8 block h-px origin-left bg-gradient-to-r from-electric via-electric/60 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: reduced ? 0 : 1.3, delay: 0.5, ease: EASE }}
      />

      <motion.p
        className="mt-9 max-w-2xl text-lg leading-relaxed text-fg-dim text-balance sm:text-xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.68, ease: EASE }}
      >
        {site.positioning}
      </motion.p>

      <motion.div
        className="mt-12 flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.82, ease: EASE }}
      >
        <a
          href="#work"
          className="rounded-md bg-electric px-6 py-3 font-mono text-sm font-medium text-ink shadow-[0_0_36px_-8px] shadow-electric/70 transition-shadow duration-300 hover:shadow-[0_0_52px_-6px] hover:shadow-electric"
        >
          View work
        </a>
        {site.resumeUrl ? (
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-6 py-3 font-mono text-sm text-fg-dim transition-colors hover:border-electric/60 hover:text-fg"
          >
            Résumé
          </a>
        ) : null}
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-6 flex items-center gap-2 sm:left-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-line-bright"
        >
          <ArrowDownIcon size={14} weight="bold" aria-hidden />
        </motion.span>
        <span className="label">Scroll</span>
      </motion.div>
    </section>
  );
}
