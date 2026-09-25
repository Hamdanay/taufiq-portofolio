import React from 'react';
import { STACK_EXPERTISE, TOOL_SKILLS } from '../data/cvData';
import { useReveal } from '../hooks/useReveal';

export const ArchitectureExplorer: React.FC = () => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="expertise"
      ref={ref}
      className={`section-pad bg-surface/50 reveal-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="page-container">
        <header className="mb-8 max-w-2xl">
          <h2 className="type-section mb-3">Keahlian</h2>
          <p className="type-body-tight">Stack yang saya gunakan untuk cloud, web, dan eksplorasi AI.</p>
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
                  <li key={item} className="text-sm text-ink font-medium flex gap-2 break-anywhere">
                    <span className="text-accent shrink-0" aria-hidden>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 glass-card p-5 sm:p-6">
          <h3 className="type-block-title mb-3">Alat & workflow</h3>
          <ul className="flex flex-wrap gap-2">
            {TOOL_SKILLS.map((tool) => (
              <li key={tool} className="tag-pill">{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
