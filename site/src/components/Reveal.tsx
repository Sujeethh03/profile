import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Scroll-triggered entrance. Motion respects prefers-reduced-motion at the
 * library level, so no manual media-query branch is needed here.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Section eyebrow. The rule draws itself out to the edge of the column as the
 * heading enters — the same gesture as the hero's underline, at lower volume,
 * which is what ties the sections together.
 */
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="mb-14 flex items-center gap-5"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.h2
        className="label whitespace-nowrap text-fg"
        variants={{
          hidden: { opacity: 0, x: -10 },
          shown: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {children}
      </motion.h2>

      <motion.span
        aria-hidden
        className="h-px flex-1 origin-left bg-gradient-to-r from-line-bright/70 to-line/40"
        variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
        transition={{ duration: 1.1, ease: EASE }}
      />
    </motion.div>
  );
}
