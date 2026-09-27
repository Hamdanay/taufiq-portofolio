import { useEffect, useState } from 'react';
import type { SectionId } from '../constants/sections';

/** Viewport line used to decide which section is "current" (matches nav highlight). */
const ANCHOR_RATIO = 0.32;

function resolveActiveSection(
  sectionIds: readonly SectionId[],
  fallback: SectionId
): SectionId {
  const anchor = window.innerHeight * ANCHOR_RATIO;
  let current: SectionId = fallback;

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= anchor) {
      current = id;
    }
  }

  return current;
}

function sectionFromHash(sectionIds: readonly SectionId[]): SectionId | null {
  const raw = window.location.hash.replace('#', '');
  if (!raw) return null;
  return sectionIds.includes(raw as SectionId) ? (raw as SectionId) : null;
}

export function useActiveSection(sectionIds: readonly SectionId[], fallback: SectionId = 'hero') {
  const [active, setActive] = useState<SectionId>(() => {
    if (typeof document === 'undefined') return fallback;
    return sectionFromHash(sectionIds) ?? fallback;
  });

  useEffect(() => {
    let raf = 0;

    const updateFromScroll = () => {
      setActive(resolveActiveSection(sectionIds, fallback));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateFromScroll);
    };

    const onHashChange = () => {
      const fromHash = sectionFromHash(sectionIds);
      if (fromHash) setActive(fromHash);
      requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [sectionIds, fallback]);

  return active;
}
