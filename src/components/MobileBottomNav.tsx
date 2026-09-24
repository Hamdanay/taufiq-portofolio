import React from 'react';
import { NAV_LINKS } from '../constants/sections';
import type { SectionId } from '../constants/sections';

const MOBILE_LINKS = NAV_LINKS.filter((l) => ['hero', 'projects', 'contact'].includes(l.id));

interface MobileBottomNavProps {
  activeSection: SectionId;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection }) => {
  return (
    <nav
      className="mobile-bottom-nav md:hidden"
      aria-label="Navigasi cepat"
    >
      <ul className="mobile-bottom-nav__list">
        {MOBILE_LINKS.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.id}>
              <a
                href={link.href}
                className={`mobile-bottom-nav__link focus-ring ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
