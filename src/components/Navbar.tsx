import React from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  profileImage?: string;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F8F9FA]/85 border-b border-[#211C1A]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Title Header (Without photo, larger font) */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-lg sm:text-xl text-[#211C1A] flex items-center gap-2 group-hover:text-[#2563EB] transition-colors">
              Taufiqurrahman Hamdan Al Ayubi
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            </span>
            <span className="text-xs font-mono text-[#211C1A]/60">~/cloud-software-eng</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-[#211C1A]/75">
          <a href="#about" className="hover:text-[#2563EB] transition-colors">Tentang & Skills</a>
          <a href="#projects" className="hover:text-[#2563EB] transition-colors">Proyek Arsitektur</a>
          <a href="#architecture-explorer" className="hover:text-[#2563EB] transition-colors">System Explorer</a>
          <a href="#contact" className="hover:text-[#2563EB] transition-colors">Kontak</a>
        </nav>

        {/* Download CV CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold tracking-wide shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </header>
  );
};
