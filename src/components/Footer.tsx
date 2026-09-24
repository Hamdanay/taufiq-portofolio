import React from 'react';
import { BIODATA } from '../data/cvData';

interface FooterProps {
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCv }) => {
  return (
    <footer className="py-10 border-t border-line">
      <div className="page-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {BIODATA.fullName}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <button type="button" onClick={onOpenCv} className="btn-outline btn-sm focus-ring">
            Unduh CV
          </button>
          <a href={BIODATA.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost btn-sm focus-ring">
            GitHub
          </a>
          <a href={BIODATA.linkedinUrl} target="_blank" rel="noreferrer" className="btn-ghost btn-sm focus-ring">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
