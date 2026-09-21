import React from 'react';
import { BIODATA } from '../data/cvData';

interface FooterProps {
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCv }) => {
  return (
    <footer className="mt-8 py-12 border-t border-line bg-surface/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-accent mb-1">Profil</p>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {BIODATA.fullName}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm">
          <button type="button" onClick={onOpenCv} className="btn-outline btn-sm focus-ring">
            Unduh CV
          </button>
          <a href={BIODATA.githubUrl} target="_blank" rel="noreferrer" className="text-muted hover-underline-stretch focus-ring">
            GitHub
          </a>
          <a href={BIODATA.linkedinUrl} target="_blank" rel="noreferrer" className="text-muted hover-underline-stretch focus-ring">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
