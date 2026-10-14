import React from 'react';
import { GitCommit, GitBranch, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/cvData';
import { useReveal } from '../hooks/useReveal';

export const ExperienceSection: React.FC = () => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className={`section-pad reveal-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="page-container">
        <header className="mb-8 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            <p className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              Career Timeline · Git Activity Log
            </p>
          </div>
          <h2 className="type-section mb-3">Experience</h2>
          <p className="type-body-tight">
            Internship experience in IT administration, document archiving, and student academic data verification.
          </p>
        </header>

        {/* Git Commit Activity Tree */}
        <div className="max-w-3xl relative border-l-2 border-line ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10 py-2">
          {EXPERIENCES.map((entry) => (
            <div key={entry.id} className="relative group">
              {/* Git Commit Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 size-7 rounded-full bg-surface border-2 border-accent flex items-center justify-center shadow-xs">
                <GitCommit className="w-3.5 h-3.5 text-accent" />
              </div>

              {/* Log Entry Header */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border border-line bg-surface-alt text-secondary">
                    <GitBranch className="w-3 h-3 text-muted" />
                    internship/2023
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
                    <Calendar className="w-3 h-3" />
                    {entry.period}
                  </span>
                  {entry.location && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-muted hidden sm:inline-flex">
                      <MapPin className="w-3 h-3" />
                      {entry.location}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="type-block-title text-lg font-bold text-ink">
                    {entry.role}
                  </h3>
                  <p className="text-sm font-medium text-secondary">
                    {entry.organization}
                    {entry.program ? ` · ${entry.program}` : ''}
                  </p>
                </div>
              </div>

              {/* Log Description & Highlights */}
              <div className="mt-3.5 p-4 sm:p-5 rounded-lg border border-line bg-surface shadow-xs space-y-3.5">
                <p className="type-body text-sm leading-relaxed">{entry.summary}</p>

                <div className="space-y-1.5 pt-2 border-t border-line/60">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                    Contributions &amp; Operational Tasks:
                  </p>
                  <ul className="space-y-1.5">
                    {entry.highlights.map((item) => (
                      <li key={item} className="text-sm text-muted flex gap-2">
                        <span className="text-accent font-mono font-bold shrink-0">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-line/60 flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[11px] py-0.5 px-2 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
