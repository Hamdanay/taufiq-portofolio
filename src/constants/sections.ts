export const SECTION_IDS = ['hero', 'about', 'projects', 'experience', 'expertise', 'contact'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { href: string; id: SectionId; label: string }[] = [
  { href: '#hero', id: 'hero', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#projects', id: 'projects', label: 'Work' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#expertise', id: 'expertise', label: 'Expertise' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];
