import React from 'react';
import { STACK_EXPERTISE } from '../data/cvData';
import { useReveal } from '../hooks/useReveal';

export const ArchitectureExplorer: React.FC = () => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="expertise"
      ref={ref}
      className={`section-pad reveal-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="page-container">
        <header className="mb-8 max-w-2xl">
          <h2 className="type-section mb-3">Keahlian inti</h2>
          <p className="type-body-tight">
            Ringkasan stack praktis dari CV — dipetakan ke cloud, web, dan AI, bukan duplikasi detail
            proyek.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STACK_EXPERTISE.map((topic, i) => (
            <article
              key={topic.id}
              className="glass-card expertise-card p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="type-block-title mb-2">{topic.title}</h3>
              <p className="type-body-tight mb-4">{topic.summary}</p>
              <ul className="space-y-2">
                {topic.items.map((item) => (
                  <li key={item} className="text-sm text-ink font-medium flex gap-2">
                    <span className="text-accent" aria-hidden>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
