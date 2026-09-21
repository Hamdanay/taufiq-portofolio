import React from 'react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#architecture-explorer', label: 'Services' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  return (
    <header className="sticky top-0 z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <a
          href="#hero"
          className="font-display text-xl sm:text-2xl font-semibold text-accent hover-underline-stretch focus-ring rounded-sm"
        >
          Profil
        </a>

        <nav className="hidden md:flex items-center justify-center gap-10 type-nav text-secondary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link focus-ring rounded-sm">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end gap-3 items-center">
          <button
            type="button"
            onClick={onOpenCvModal}
            className="btn-ghost btn-sm hidden sm:inline-flex focus-ring"
          >
            CV
          </button>
          <a href="#contact" className="btn-contact focus-ring inline-flex">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};
