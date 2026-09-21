import { brandMarks } from '../brand-marks';

/**
 * Brand marks are single-path SVGs inlined from `src/brand-marks.ts`, so
 * nothing is fetched at runtime. They inherit currentColor rather than each
 * brand's own hex — ten brand colours in one row would fight the palette, and
 * the silhouette alone is what makes a logo scannable at 14px.
 */
export function BrandIcon({
  slug,
  size = 16,
  className,
}: {
  slug: string;
  size?: number;
  className?: string;
}) {
  const mark = brandMarks[slug];
  if (!mark) return null;

  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d={mark.path} />
    </svg>
  );
}
