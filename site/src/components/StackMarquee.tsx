import { stack } from '../content';
import { BrandIcon } from './BrandIcon';

/**
 * The stack as a slow continuous band rather than a static chip grid — it gives
 * the middle of the page a pulse without anything you have to read moving.
 * The list is rendered twice so the -50% translate loops seamlessly; the
 * duplicate is hidden from assistive tech.
 */
export function StackMarquee() {
  return (
    <section
      aria-label="Technologies"
      className="marquee-mask relative border-y border-line/60 bg-ink-lift/40 py-6"
    >
      <div className="marquee-track flex w-max gap-3 motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-3"
          >
            {stack.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2.5 rounded-full border border-line px-4 py-2 font-mono text-sm whitespace-nowrap text-fg-dim"
              >
                {item.icon ? (
                  <BrandIcon slug={item.icon} size={15} />
                ) : (
                  <span
                    aria-hidden
                    className="inline-block size-1.5 rounded-full bg-electric/70"
                  />
                )}
                {item.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
