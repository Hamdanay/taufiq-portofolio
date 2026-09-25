import React, { useState } from 'react';
import type { ArchitectureNode, Project } from '../types/portfolio';
import { useReveal } from '../hooks/useReveal';

interface ProjectsProps {
  projects: Project[];
}

type ProjectTab = 'overview' | 'diagram' | 'code';

const categoryClass = (category: string) => {
  const key = category.toLowerCase();
  if (key.includes('cloud') || key.includes('infrastruktur')) return 'project-card--cloud';
  if (key.includes('pengalaman') || key.includes('magang')) return 'project-card--experience';
  return 'project-card--default';
};

const nodeTypeLabel: Record<ArchitectureNode['type'], string> = {
  entry: 'Masukan',
  gateway: 'Integrasi',
  compute: 'Proses',
  cache: 'Cache',
  database: 'Data',
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || 'proj-1');
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');
  const { ref, visible } = useReveal<HTMLElement>();

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const tabs: { id: ProjectTab; label: string }[] = [
    { id: 'overview', label: 'Ringkasan' },
    { id: 'diagram', label: 'Alur' },
    { id: 'code', label: 'Cuplikan' },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-pad reveal-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="page-container">
        <header className="mb-8 max-w-2xl">
          <h2 className="type-section mb-3">Karya terpilih</h2>
          <p className="type-body-tight">
            Ringkasan proyek dan pengalaman dari CV. Proyek kode tambahan sedang saya kerjakan dan
            akan ditambahkan setelah siap dipublikasikan.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {projects.map((proj, index) => {
            const isActive = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setActiveTab('overview');
                }}
                className={`glass-card project-card ${categoryClass(proj.category)} text-left p-0 overflow-hidden focus-ring ${
                  isActive ? 'is-active' : ''
                }`}
              >
                <div className="project-card__bar" aria-hidden />
                <div className="p-6 sm:p-7">
                  <p className="type-meta mb-3">Proyek {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="type-block-title text-lg mb-2">{proj.title}</h3>
                  <p className="type-body-tight line-clamp-2">{proj.description}</p>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {proj.tags.slice(0, 3).map((tag) => (
                      <li key={tag} className="tag-pill text-xs py-1">{tag}</li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })}
        </div>

        <div className="glass-card overflow-hidden">
          <div className="px-4 py-5 sm:px-8 border-b border-line min-w-0">
            <p className="type-meta mb-2 text-maroon">{selectedProject.category}</p>
            <h3 className="type-block-title text-lg">{selectedProject.title}</h3>
            <p className="type-body-tight mt-2">{selectedProject.subtitle}</p>

            <div className="flex flex-wrap gap-0 mt-6 border-b border-line -mb-px overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 text-sm border-b-2 transition-colors focus-ring cursor-pointer -mb-px font-semibold whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 py-8 sm:px-8 min-w-0">
            {activeTab === 'overview' && (
              <div className="space-y-8 max-w-2xl">
                <p className="type-body">{selectedProject.description}</p>
                <div>
                  <h4 className="type-block-title mb-3">Sorotan</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item) => (
                      <li key={item} className="text-sm text-muted flex gap-2 break-anywhere">
                        <span className="text-accent shrink-0" aria-hidden>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <li key={tag} className="tag-pill text-xs py-1.5">{tag}</li>
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
                  <li key={node.id} className="flex gap-4 py-4 border-b border-line last:border-b-0">
                    <span className="type-meta w-7">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-ink text-sm font-semibold">{node.label}</p>
                      <p className="type-meta mt-1">{nodeTypeLabel[node.type]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {activeTab === 'code' && (
              <pre className="p-5 rounded-xl bg-ink text-accent text-xs overflow-x-auto font-mono">
                <code>{selectedProject.terraformSnippet}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
