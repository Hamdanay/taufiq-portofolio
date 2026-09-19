import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="type-caption">
          © {new Date().getFullYear()} Taufiqurrahman Hamdan Al Ayubi
        </p>
        <p className="type-meta">React · TypeScript · Tailwind</p>
      </div>
    </footer>
  );
};
