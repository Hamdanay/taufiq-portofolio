import React from 'react';
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
          <h2 className="type-section mb-3">Experience</h2>
          <p className="type-body-tight">
            Internship and on-site roles that shaped how I work with data, process, and IT operations
            support.
          </p>
        </header>

        <ul className="space-y-4 max-w-3xl">
          {EXPERIENCES.map((entry) => (
            <li key={entry.id}>
              <article className="glass-card experience-card overflow-hidden">
                <div className="experience-card__bar" aria-hidden />
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="min-w-0">
                      <p className="type-meta mb-1">
                        {entry.period}
                        {entry.program ? ` · ${entry.program}` : ''}
                      </p>
                      <h3 className="type-block-title text-lg">{entry.role}</h3>
                      <p className="type-body-tight text-sm mt-1">
                        {entry.organization}
                        {entry.location ? ` · ${entry.location}` : ''}
                      </p>
                    </div>
                  </div>

                  <p className="type-body text-sm mb-4">{entry.summary}</p>

                  <ul className="space-y-2 mb-4">
                    {entry.highlights.map((item) => (
                      <li key={item} className="text-sm text-muted flex gap-2 break-anywhere">
                        <span className="text-accent shrink-0" aria-hidden>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li key={tag} className="tag-pill text-xs py-1">{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
