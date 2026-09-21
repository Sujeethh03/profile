import { experience } from '../content';
import { Reveal, SectionHeading } from './Reveal';

/**
 * A dated list rather than cards: these entries are a sequence, so the period
 * does the structural work and nothing decorative needs to be added.
 */
export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading>Experience</SectionHeading>

      <ol className="space-y-14">
        {experience.map((role, i) => (
          <Reveal key={role.org} delay={i * 0.08}>
            <li className="grid gap-x-10 gap-y-4 border-t border-line pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
              <div>
                <p className="label whitespace-nowrap">{role.period}</p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-fg">
                  {role.org}
                </h3>
                <p className="mt-1 text-sm text-fg-dim">{role.title}</p>
              </div>

              <ul className="space-y-3">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 leading-relaxed text-fg-dim before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-electric/60"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
