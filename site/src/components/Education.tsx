import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { certifications, education } from '../content';
import { Reveal, SectionHeading } from './Reveal';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading>Education</SectionHeading>

      <ol className="mb-16 space-y-px overflow-hidden rounded-xl border border-line">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 0.06}>
            <li className="flex flex-col gap-2 bg-surface px-6 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                  {entry.school}
                </h3>
                <p className="mt-1 text-sm text-fg-dim">{entry.qualification}</p>
              </div>

              <div className="flex shrink-0 items-baseline gap-5">
                <span className="font-mono text-sm text-electric">
                  {entry.result}
                </span>
                <span className="label">{entry.period}</span>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <p className="label mb-5">Certifications</p>
        <ul className="grid gap-3 sm:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <a
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="spotlight group relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-lg border border-line p-5 transition-colors duration-500 hover:border-electric/40"
              >
                <span className="flex items-start gap-4">
                  {/* Badge artwork is drawn for light backgrounds, so it sits
                      on its own white tile rather than on the dark card. */}
                  {cert.badge ? (
                    <img
                      src={cert.badge}
                      alt=""
                      width={44}
                      height={44}
                      loading="lazy"
                      decoding="async"
                      className="size-11 shrink-0 rounded-md bg-white object-contain p-1"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="flex size-11 shrink-0 items-center justify-center rounded-md border border-line font-mono text-xs text-line-bright"
                    >
                      AA
                    </span>
                  )}
                  <span className="leading-snug text-fg-dim transition-colors group-hover:text-fg">
                    {cert.name}
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="label">{cert.issuer}</span>
                  <ArrowUpRightIcon
                    size={13}
                    weight="bold"
                    aria-hidden
                    className="text-line-bright transition-colors group-hover:text-electric"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
