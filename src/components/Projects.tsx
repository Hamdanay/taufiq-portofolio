import React, { useState } from 'react';
import type { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

type ProjectTab = 'overview' | 'diagram' | 'code';

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || 'proj-1');
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const tabs: { id: ProjectTab; label: string }[] = [
    { id: 'overview', label: 'Ringkasan' },
    { id: 'diagram', label: 'Alur' },
    { id: 'code', label: 'Cuplikan' },
  ];

  return (
    <section id="projects" className="section-pad bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <header className="mb-8 max-w-2xl">
          <p className="section-eyebrow">Work</p>
          <h2 className="type-section mb-3">
            My <span>portfolio</span>
          </h2>
          <p className="type-body-tight">
            Pengalaman dan proyek dari CV: simulasi arsitektur cloud serta magang Program Khidmah di
            Thursina IIBS.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-60 shrink-0">
            <p className="type-meta mb-3">Proyek</p>
            <ul className="space-y-1" role="tablist" aria-label="Daftar proyek">
              {projects.map((proj) => {
                const isActive = selectedProjectId === proj.id;
                return (
                  <li key={proj.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => {
                        setSelectedProjectId(proj.id);
                        setActiveTab('overview');
                      }}
                      className={`w-full text-left py-2.5 px-3 text-sm rounded-md transition-colors focus-ring cursor-pointer border-l-2 ${
                        isActive
                          ? 'border-accent text-accent bg-maroon-soft'
                          : 'border-transparent text-muted hover:text-ink'
                      }`}
                    >
                      {proj.title.length > 40 ? `${proj.title.slice(0, 40)}…` : proj.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="flex-1 min-w-0 glass-card overflow-hidden">
            <div className="px-6 py-5 sm:px-8 border-b border-line">
              <p className="type-meta mb-2 text-maroon">{selectedProject.category}</p>
              <h3 className="type-block-title text-lg">{selectedProject.title}</h3>
              <p className="type-body-tight mt-2">{selectedProject.subtitle}</p>

              <div className="flex flex-wrap gap-0 mt-6 border-b border-line -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 text-sm border-b-2 transition-colors focus-ring cursor-pointer -mb-px ${
                      activeTab === tab.id
                        ? 'border-accent text-accent font-semibold'
                        : 'border-transparent text-muted hover:text-ink'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8">
              {activeTab === 'overview' && (
                <div className="space-y-8 max-w-2xl">
                  <p className="type-body">{selectedProject.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <li key={tag} className="tag-pill text-xs py-1.5">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {selectedProject.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="type-meta mb-1">{m.label}</dt>
                        <dd className="text-ink font-semibold text-sm">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="pt-6 border-t border-line">
                    <h4 className="type-block-title mb-2">Arsitektur</h4>
                    <p className="type-body-tight">{selectedProject.architectureOverview}</p>
                  </div>
                </div>
              )}

              {activeTab === 'diagram' && (
                <ol className="max-w-xl">
                  {selectedProject.architectureNodes.map((node, index) => (
                    <li
                      key={node.id}
                      className="flex gap-4 py-4 border-b border-line last:border-b-0"
                    >
                      <span className="type-meta w-7">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="text-ink text-sm">{node.label}</p>
                        <p className="type-meta mt-1 capitalize">{node.type}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}

              {activeTab === 'code' && (
                <pre className="p-5 rounded-md bg-maroon-deep border border-accent text-accent text-xs overflow-x-auto font-mono">
                  <code>{selectedProject.terraformSnippet}</code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
