export const SECTION_IDS = ['hero', 'about', 'projects', 'expertise', 'contact'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { href: string; id: SectionId; label: string }[] = [
  { href: '#hero', id: 'hero', label: 'Beranda' },
  { href: '#about', id: 'about', label: 'Tentang' },
  { href: '#projects', id: 'projects', label: 'Karya' },
  { href: '#expertise', id: 'expertise', label: 'Keahlian' },
  { href: '#contact', id: 'contact', label: 'Kontak' },
];
