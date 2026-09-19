import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1614] text-slate-400 py-8 border-t border-white/10 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 Taufiqurrahman Hamdan Al Ayubi. Built with React, TypeScript &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-white">● All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};
