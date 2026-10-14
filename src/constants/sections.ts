export const SECTION_IDS = ['hero', 'about', 'projects', 'experience', 'contact'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { href: string; id: SectionId; label: string }[] = [
  { href: '#hero', id: 'hero', label: 'Home' },
  { href: '#about', id: 'about', label: 'About & Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];
