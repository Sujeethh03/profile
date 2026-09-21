import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { projects, type Project } from '../content';
import { useSpotlight } from '../hooks/useSpotlight';
import { Reveal, SectionHeading } from './Reveal';

/**
 * Projects are a list, not a sequence, so they get no 01/02/03 numbering —
 * the year carries the only ordering information a reader needs.
 */
export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading>Selected work</SectionHeading>

      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => {
          // An odd count leaves a hole in the two-column grid; let the last
          // card run full width instead of sitting next to empty space.
          const orphan = projects.length % 2 === 1 && i === projects.length - 1;

          return (
            <Reveal
              key={project.title}
              delay={i * 0.08}
              className={orphan ? 'h-full sm:col-span-2' : 'h-full'}
            >
              <ProjectCard project={project} wide={orphan} />
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  const { ref, onPointerMove } = useSpotlight<HTMLDivElement>();
  const Tag = project.href ? 'a' : 'div';

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className="spotlight group relative h-full overflow-hidden rounded-xl border border-line bg-surface/70 backdrop-blur-sm transition-colors duration-500 hover:border-electric/40"
    >
      <Tag
        {...(project.href
          ? { href: project.href, target: '_blank', rel: 'noreferrer' }
          : {})}
        className="relative flex h-full flex-col"
      >
        {project.image ? (
          <div className="relative overflow-hidden border-b border-line bg-ink-lift">
            <img
              src={project.image}
              alt={project.imageAlt ?? ''}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover object-top opacity-80 transition-[opacity,transform,filter] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03] group-hover:opacity-100"
            />
            {/* Fades the screenshot into the card so it reads as one surface. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
              {project.title}
            </h3>
            {project.href ? (
              <ArrowUpRightIcon
                size={18}
                weight="bold"
                aria-hidden
                className="mt-1 shrink-0 text-line-bright transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric"
              />
            ) : null}
          </div>

          <p
            className={`mt-3 flex-1 leading-relaxed text-fg-dim ${
              wide ? 'sm:max-w-3xl' : ''
            }`}
          >
            {project.blurb}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="label mr-1">{project.year}</span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-fg-dim transition-colors duration-300 group-hover:border-line-bright"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tag>
    </div>
  );
}
