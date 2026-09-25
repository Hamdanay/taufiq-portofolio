import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants/sections';
import { ProfileSocialLinks } from './ProfileSocialLinks';
import type { SectionId } from '../constants/sections';

interface NavbarProps {
  onOpenCvModal: () => void;
  activeSection: SectionId;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-shell">
      <div className="nav-float flex items-center justify-between gap-2 min-w-0">
        <a
          href="#hero"
          className="nav-brand font-display font-bold text-ink focus-ring rounded-md py-1 shrink"
        >
          Portofolio
        </a>

        <nav className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0" aria-label="Utama">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link focus-ring ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ProfileSocialLinks className="hidden lg:flex" size="sm" />
          <button
            type="button"
            className="md:hidden p-2 rounded-full text-ink hover:bg-surface-alt focus-ring"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={onOpenCvModal}
            className="btn-ghost btn-sm hidden sm:inline-flex focus-ring"
          >
            CV
          </button>
          <a href="#contact" className="btn-solid btn-sm focus-ring max-[380px]:px-3 max-[380px]:text-xs">
            <span className="max-[380px]:hidden">Kontak</span>
            <span className="hidden max-[380px]:inline">Hubungi</span>
          </a>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="mobile-nav-backdrop md:hidden" onClick={closeMenu} aria-hidden />
          <div
            id="mobile-nav-drawer"
            className="mobile-nav-drawer md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mobile-nav-drawer__inner" aria-label="Menu utama">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`mobile-nav-drawer__link focus-ring ${isActive ? 'is-active' : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenCvModal();
                }}
                className="mobile-nav-drawer__link text-left focus-ring"
              >
                Unduh CV
              </button>
              <ProfileSocialLinks className="px-2 pt-2 flex-col items-stretch" size="sm" />
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
