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
    <section id="projects" className="section-pad bg-paper border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <header className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-end">
          <h2 className="type-section lg:col-span-4">Experience</h2>
          <p className="type-body-tight lg:col-span-8 lg:max-w-lg">
            Entri pengalaman dan proyek independen dari CV: simulasi arsitektur cloud dan magang Program
            Khidmah di Thursina IIBS.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <aside className="lg:w-56 shrink-0">
            <p className="type-label mb-3">Pilih proyek</p>
            <ul className="space-y-0.5" role="tablist" aria-label="Daftar proyek">
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
                      className={`w-full text-left py-2.5 px-3 type-nav rounded-md transition-colors focus-ring cursor-pointer border-l-2 ${
                        isActive
                          ? 'border-accent bg-surface font-semibold text-ink'
                          : 'border-transparent text-muted hover:text-ink hover:bg-surface/80'
                      }`}
                    >
                      {proj.title.length > 42 ? `${proj.title.slice(0, 42)}…` : proj.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="border border-line rounded-md bg-paper overflow-hidden">
              <div className="px-6 py-6 sm:px-8 border-b border-line bg-surface/50">
                <p className="type-meta mb-3">{selectedProject.category}</p>
                <h3 className="type-panel-title">{selectedProject.title}</h3>
                <p className="type-body-tight mt-2 max-w-2xl">{selectedProject.subtitle}</p>

                <div className="flex flex-wrap gap-0 mt-7 border-b border-line -mb-px">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2.5 type-nav border-b-2 transition-colors focus-ring cursor-pointer -mb-px ${
                        activeTab === tab.id
                          ? 'border-ink text-ink font-semibold'
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
                  <div className="space-y-9 max-w-2xl">
                    <p className="type-body">{selectedProject.description}</p>

                    <div>
                      <h4 className="type-label mb-3">Teknologi</h4>
                      <ul className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <li
                            key={tag}
                            className="type-tag px-2.5 py-1.5 rounded-sm border border-line text-muted bg-paper"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                      {selectedProject.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="type-stat-label mb-1">{m.label}</dt>
                          <dd className="type-stat-value">{m.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="pt-7 border-t border-line">
                      <h4 className="type-block-title mb-2">Keputusan arsitektur</h4>
                      <p className="type-body-tight">{selectedProject.architectureOverview}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'diagram' && (
                  <div className="space-y-6">
                    <p className="type-body-tight max-w-xl">
                      Urutan komponen dari masukan pengguna hingga penyimpanan atau keluaran.
                    </p>
                    <ol className="max-w-xl">
                      {selectedProject.architectureNodes.map((node, index) => (
                        <li
                          key={node.id}
                          className="flex gap-4 py-4 border-b border-line last:border-b-0"
                        >
                          <span className="type-meta w-7 shrink-0 pt-0.5 tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <p className="type-body-ink">{node.label}</p>
                            <p className="type-meta mt-1 capitalize">{node.type}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="space-y-4">
                    <p className="type-body-tight">Cuplikan konfigurasi atau kode terkait proyek.</p>
                    <pre className="p-5 rounded-md bg-ink text-paper/88 type-code overflow-x-auto">
                      <code>{selectedProject.terraformSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
