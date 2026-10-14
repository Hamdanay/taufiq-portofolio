import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Terminal, Layers, FileCode2 } from 'lucide-react';
import type { ArchitectureNode, Project } from '../types/portfolio';
import { useReveal } from '../hooks/useReveal';

interface ProjectsProps {
  projects: Project[];
}

type ProjectTab = 'overview' | 'diagram';

const nodeTypeLabel: Record<ArchitectureNode['type'], string> = {
  entry: 'Client / Interface',
  gateway: 'API Gateway & Routing',
  compute: 'Application Service',
  cache: 'In-Memory Cache',
  database: 'Persistent Storage',
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || 'proj-1');
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');
  const { ref, visible } = useReveal<HTMLElement>();

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const tabs: { id: ProjectTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <FileCode2 className="w-3.5 h-3.5" /> },
    { id: 'diagram', label: 'System Flow', icon: <Layers className="w-3.5 h-3.5" /> },
  ];

  const hasProjectLinks = Boolean(selectedProject.liveUrl || selectedProject.repoUrl);

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-pad reveal-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="page-container">
        <header className="mb-8 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            <p className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              Project Console · Master-Detail
            </p>
          </div>
          <h2 className="type-section mb-3">Featured Projects</h2>
          <p className="type-body-tight">
            Full-stack web applications, reliability pipelines, and practical AI/LLM system flows.
          </p>
        </header>

        {/* Master-Detail Console Frame */}
        <div className="border border-line rounded-xl bg-surface overflow-hidden shadow-xs">
          {/* Console Window Titlebar */}
          <div className="px-4 py-3 bg-surface-alt border-b border-line flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {/* Window dots */}
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 border border-red-500/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 border border-amber-500/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 border border-emerald-500/30" />
              </div>
              <span className="text-xs font-mono text-muted flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-secondary" />
                workspace / projects / <span className="text-ink font-semibold">{selectedProject.id}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted hidden sm:inline">
                [{projects.length} repositories]
              </span>
              {hasProjectLinks && (
                <div className="flex items-center gap-2">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md bg-ink text-surface hover:opacity-90 focus-ring"
                    >
                      Live Demo
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md border border-line bg-surface hover:bg-surface-alt text-ink focus-ring"
                    >
                      GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Master-Detail Split Grid */}
          <div className="grid lg:grid-cols-[280px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-line">
            {/* Left Master Explorer (Project Directory) */}
            <div className="bg-surface-alt/40 p-3 sm:p-4 flex flex-col gap-1.5">
              <div className="px-2 py-1 mb-1 text-[11px] font-mono uppercase tracking-wider text-muted font-semibold flex items-center justify-between">
                <span>EXPLORER</span>
                <span>[{projects.length}]</span>
              </div>
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
                    className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-2.5 group ${
                      isActive
                        ? 'bg-surface border-accent/40 shadow-xs ring-1 ring-accent/30 text-ink'
                        : 'bg-transparent border-transparent hover:bg-surface/80 hover:border-line text-secondary'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs mt-0.5 shrink-0 ${
                        isActive ? 'text-accent font-bold' : 'text-muted'
                      }`}
                    >
                      {isActive ? '>' : `${String(index + 1).padStart(2, '0')}`}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <h3
                          className={`text-sm truncate font-medium ${
                            isActive ? 'font-semibold text-ink' : 'text-ink/90 group-hover:text-ink'
                          }`}
                        >
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-xs text-muted truncate font-mono">{proj.category}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {proj.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-line bg-surface text-muted"
                          >
                            {t}
                          </span>
                        ))}
                        {proj.tags.length > 2 && (
                          <span className="text-[10px] font-mono text-muted">
                            +{proj.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Inspector (Project Details & Architecture) */}
            <div className="p-5 sm:p-8 bg-surface">
              {/* Inspector Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-line">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-line bg-surface-alt text-secondary">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-muted">· id: {selectedProject.id}</span>
                  </div>
                  <h3 className="type-block-title text-xl font-bold">{selectedProject.title}</h3>
                  <p className="type-body-tight text-sm text-muted mt-1">{selectedProject.subtitle}</p>
                </div>

                {/* Switcher Tabs */}
                <div className="flex items-center gap-1 p-1 bg-surface-alt rounded-lg border border-line self-start sm:self-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-surface text-ink font-semibold shadow-xs'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inspector Body */}
              <div className="pt-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="type-body leading-relaxed">{selectedProject.description}</p>

                    {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                      <div className="project-screenshots">
                        {selectedProject.screenshots.map((shot) => (
                          <figure key={shot.src} className="project-screenshot">
                            <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                            {shot.caption ? <figcaption>{shot.caption}</figcaption> : null}
                          </figure>
                        ))}
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-2.5">
                        Key Engineering Highlights
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((item) => (
                          <li key={item} className="text-sm text-muted flex gap-2.5">
                            <span className="text-secondary font-bold shrink-0">–</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-2">
                        Technologies &amp; Architecture
                      </h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag) => (
                          <li key={tag} className="tag-pill text-xs py-1 px-2.5 font-mono">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line">
                      {selectedProject.metrics.map((m) => (
                        <div key={m.label} className="p-3 rounded-lg border border-line bg-surface-alt/40">
                          <dt className="text-xs font-mono text-muted mb-1">{m.label}</dt>
                          <dd className="text-ink font-semibold text-sm">{m.value}</dd>
                        </div>
                      ))}
                    </dl>

                    {/* Setup Note */}
                    {selectedProject.setupNote && (
                      <div className="p-3.5 rounded-lg bg-surface-alt border border-line text-xs font-mono">
                        <span className="text-ink font-semibold">Local Setup: </span>
                        <span className="text-muted">{selectedProject.setupNote}</span>
                        {selectedProject.readmeUrl && (
                          <a
                            href={selectedProject.readmeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent underline ml-1"
                          >
                            (See README)
                          </a>
                        )}
                      </div>
                    )}

                    {selectedProject.demoNote && (
                      <p className="project-demo-note text-xs text-muted italic" role="note">
                        * {selectedProject.demoNote}
                      </p>
                    )}
                  </div>
                )}

                {activeTab === 'diagram' && (
                  <div className="space-y-6 max-w-2xl">
                    <div className="p-4 rounded-lg bg-surface-alt border border-line">
                      <p className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-1">
                        Architecture Overview
                      </p>
                      <p className="text-sm text-secondary leading-relaxed">
                        {selectedProject.architectureOverview}
                      </p>
                    </div>

                    <ol className="relative border-l-2 border-line ml-4 space-y-5 py-2">
                      {selectedProject.architectureNodes.map((node, index) => (
                        <li key={node.id} className="relative pl-6">
                          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent text-surface text-[10px] font-bold flex items-center justify-center ring-4 ring-paper">
                            {index + 1}
                          </span>
                          <div className="border border-line rounded-lg bg-surface p-4 shadow-xs">
                            <span className="text-xs font-mono text-muted uppercase tracking-wider">
                              {nodeTypeLabel[node.type]}
                            </span>
                            <p className="text-ink font-semibold text-sm mt-0.5">{node.label}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
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
