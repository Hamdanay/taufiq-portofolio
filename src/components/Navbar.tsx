import React from 'react';
import { BIODATA } from '../data/cvData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

const navLinks = [
  { href: '#about', label: 'Keahlian' },
  { href: '#projects', label: 'Proyek' },
  { href: '#architecture-explorer', label: 'Eksplorasi' },
  { href: '#contact', label: 'Kontak' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[4.25rem] flex items-center justify-between gap-6">
        <a
          href="#hero"
          className="font-display text-[1.0625rem] sm:text-lg font-semibold tracking-[-0.04em] text-ink hover:text-accent transition-colors focus-ring rounded-sm"
        >
          {BIODATA.fullName.split(' ')[0]}
        </a>

        <nav className="hidden md:flex items-center gap-8 type-nav text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors focus-ring rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onOpenCvModal}
          className="shrink-0 btn-primary focus-ring cursor-pointer"
        >
          CV
        </button>
      </div>
    </header>
  );
};
