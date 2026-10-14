import React from 'react';
import { CORE_TECH_STACK } from '../data/cvData';

const TECH_DOTS: Record<string, string> = {
  Python: '#3572A5',
  MySQL: '#00758F',
  React: '#61DAFB',
  'Tailwind CSS': '#06B6D4',
  Docker: '#2496ED',
  'Git & GitHub': '#F05032',
};

export const MarqueeStrip: React.FC = () => {
  return (
    <div className="border-y border-line bg-surface/40 py-4">
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
          <p className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
            Core Technologies &amp; Tools
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5">
          {CORE_TECH_STACK.map((tech) => (
            <li
              key={tech}
              className="tag-pill text-xs font-medium py-1 px-2.5 bg-surface border border-line text-ink inline-flex items-center gap-1.5"
            >
              {TECH_DOTS[tech] && (
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: TECH_DOTS[tech] }}
                  aria-hidden
                />
              )}
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
