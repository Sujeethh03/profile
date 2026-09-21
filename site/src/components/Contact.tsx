import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { site } from '../content';
import { Reveal } from './Reveal';

/**
 * A mailto link rather than a form: the Stitch design had a contact form, but a
 * static site has nowhere to POST it, and a form that silently drops messages is
 * worse than no form.
 */
export function Contact() {
  const links = [
    { href: site.github, label: 'GitHub', Icon: GithubLogoIcon },
    { href: site.linkedin, label: 'LinkedIn', Icon: LinkedinLogoIcon },
  ].filter((link) => link.href);

  return (
    <section
      id="contact"
      className="border-t border-line/60 bg-ink-lift/50 py-32"
    >
      <Reveal className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="label">Contact</p>

        <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-balance">
          Have something you want built?
        </h2>

        <p className="mt-6 flex items-center gap-2.5 font-mono text-sm text-fg-dim">
          <span
            aria-hidden
            className="inline-block size-2 shrink-0 rounded-full bg-electric"
          />
          {site.availability}
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block font-mono text-base break-all text-electric underline decoration-electric/30 underline-offset-[6px] transition-colors hover:decoration-electric sm:text-lg"
        >
          {site.email}
        </a>

        {links.length > 0 ? (
          <ul className="mt-10 flex flex-wrap gap-3">
            {links.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-fg-dim transition-colors hover:border-line-bright hover:text-fg"
                >
                  <Icon size={17} weight="regular" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </Reveal>
    </section>
  );
}
