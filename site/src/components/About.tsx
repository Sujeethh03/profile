import { useState } from 'react';
import { about, site } from '../content';
import { Reveal, SectionHeading } from './Reveal';

export function About() {
  // Until a photo exists at site/public/photo.jpg the <img> 404s; swap to a
  // framed monogram rather than showing a broken image.
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading>About</SectionHeading>

      <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
        <Reveal>
          <div className="group relative">
            {/* Offset rule behind the frame — gives the portrait a corner to
                sit against instead of floating in the dark. */}
            <span
              aria-hidden
              className="absolute -top-3 -left-3 h-24 w-24 border-t border-l border-electric/40 transition-all duration-500 group-hover:-top-4 group-hover:-left-4"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-ink-lift">
              {photoFailed ? (
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  <span className="font-display text-5xl font-bold tracking-tight text-line">
                    {site.initials}
                  </span>
                  <span className="label text-center leading-relaxed">
                    add public/photo.jpg
                  </span>
                </div>
              ) : (
                <img
                  src={site.photo}
                  alt={site.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  onError={() => setPhotoFailed(true)}
                  className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5">
            {about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-relaxed text-fg-dim sm:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-line pt-8 sm:grid-cols-3">
            {[
              { k: 'Based in', v: 'Hyderabad, IN' },
              { k: 'Focus', v: 'GenAI · Backend' },
              { k: 'Currently', v: 'B.Tech final year' },
            ].map(({ k, v }) => (
              <div key={k}>
                <dt className="label mb-2">{k}</dt>
                <dd className="font-display text-base font-medium text-fg">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
