import { useEffect, useState } from 'react';
import type { SectionId } from '../constants/sections';

export function useActiveSection(sectionIds: readonly SectionId[], fallback: SectionId = 'hero') {
  const [active, setActive] = useState<SectionId>(fallback);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id as SectionId | undefined;
        if (top && sectionIds.includes(top)) setActive(top);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.12, 0.35, 0.55] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
