import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

/**
 * Fixed atmosphere behind the whole page: a graph-paper grid, two slow cyan
 * glows, and grain. Purely decorative and non-interactive — it drifts on scroll
 * so the page has depth without anything moving that you're trying to read.
 */
export function Ambient() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Small deltas: the guidance is 5–15% so foreground and background never
  // visibly desync.
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const glowFade = useTransform(scrollYProgress, [0, 0.55], [1, 0.25]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      <motion.div
        style={reduced ? undefined : { y: gridY }}
        className="grid-field absolute inset-[-10%]"
      />

      <motion.div
        style={reduced ? undefined : { y: glowY, opacity: glowFade }}
        className="absolute inset-0"
      >
        <div className="absolute -top-[18%] left-[8%] size-[46rem] rounded-full bg-electric/[0.07] blur-[130px]" />
        <div className="absolute top-[42%] -right-[12%] size-[38rem] rounded-full bg-electric/[0.045] blur-[120px]" />
      </motion.div>

      {/* Vignette keeps the glows from washing out text at the edges. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-ink)_100%)]" />

      <div className="grain absolute inset-0" />
    </div>
  );
}
