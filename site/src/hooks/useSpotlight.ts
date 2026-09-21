import { useCallback, useRef } from 'react';

/**
 * Tracks the pointer inside an element and writes it straight to CSS custom
 * properties, which `.spotlight::before` reads.
 *
 * Deliberately not React state: a mousemove handler calling setState re-renders
 * the subtree on every pointer event and collapses on lower-end devices. Values
 * go to the DOM node directly, inside a rAF so we touch style at most once per
 * frame.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const frame = useRef(0);

  const onPointerMove = useCallback((event: React.PointerEvent<T>) => {
    const node = ref.current;
    if (!node || frame.current) return;

    const { clientX, clientY } = event;

    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = node.getBoundingClientRect();
      node.style.setProperty('--mx', `${clientX - rect.left}px`);
      node.style.setProperty('--my', `${clientY - rect.top}px`);
    });
  }, []);

  return { ref, onPointerMove };
}
