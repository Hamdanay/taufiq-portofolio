import React, { useState } from 'react';
import {
  ExternalLink,
  Copy,
  GraduationCap,
  Award,
  Code2,
  Globe2,
  Check,
  BookOpen,
  Sparkles,
  Layers,
} from 'lucide-react';
import {
  CV_CERTIFICATES,
  CV_EDUCATION,
  CV_LANGUAGES,
  CV_SUMMARY,
} from '../data/cvData';
import { useReveal } from '../hooks/useReveal';

interface SkillMatrixProps {
  onCopyCredential: (text: string) => void;
}

type WorkbenchTab = 'story' | 'stack' | 'credentials';

interface CapabilityItem {
  name: string;
  category: string;
  useCase: string;
  application: string;
}

const CAPABILITY_DIRECTORY: CapabilityItem[] = [
  {
    name: 'Python',
    category: 'Backend & Scripting',
    useCase: 'Scripting, backend logic, data verification, and practical AI workflow exploration.',
    application: 'Academic & Projects',
  },
  {
    name: 'MySQL & SQL',
    category: 'Database Systems',
    useCase: 'Relational schema modeling, foreign key constraints, table normalization, and structured queries.',
    application: 'Academic Coursework & Labs',
  },
  {
    name: 'React & Tailwind CSS',
    category: 'Frontend Engineering',
    useCase: 'Component-based responsive SPA architecture, state management, and modern Vite bundler.',
    application: 'BookNest (Live on Vercel)',
  },
  {
    name: 'Docker',
    category: 'DevOps & Containers',
    useCase: 'Multi-service containerization (Nginx, Node.js, SQLite) for reproducible environments.',
    application: 'BookNest DevOps Pipeline',
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control',
    useCase: 'Branch-based workflows, code collaboration, pull requests, and GitHub Actions CI.',
    application: 'Daily Development Workflow',
  },
  {
    name: 'SQLite',
    category: 'Relational Database',
    useCase: 'Lightweight local database storage, automated backup scripting, and integrity checks.',
    application: 'BookNest Serverless API',
  },
  {
    name: 'LangFlow',
    category: 'AI Prototyping',
    useCase: 'Visual node-based orchestration for exploring LLM agent pipelines and prompt flows.',
    application: 'Personal Exploration',
  },
];

export const SkillMatrix: React.FC<SkillMatrixProps> = ({ onCopyCredential }) => {
  const { ref, visible } = useReveal<HTMLElement>();
  const [activeTab, setActiveTab] = useState<WorkbenchTab>('story');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    onCopyCredential(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const tabs: { id: WorkbenchTab; label: string; badge: string; icon: React.ReactNode }[] = [
    {
      id: 'story',
      label: 'Story & Education',
      badge: 'Binus B28',
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: 'stack',
      label: 'Technical Capability Directory',
      badge: `${CAPABILITY_DIRECTORY.length} Competencies`,
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      id: 'credentials',
      label: 'Verified Credentials',
      badge: `${CV_CERTIFICATES.length} Issued`,
      icon: <Award className="w-4 h-4" />,
    },
  ];

  return (
    <section id="about" ref={ref} className={`section-pad reveal-section ${visible ? 'is-visible' : ''}`}>
      <div className="page-container">
        <header className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            <p className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              Interactive Workbench · Profile &amp; Knowledge Base
            </p>
          </div>
          <h2 className="type-section mb-3">About &amp; Skills</h2>
          <p className="type-body-tight">
            Academic milestones at Binus University, practical software engineering toolkit, and verified certifications.
          </p>
        </header>

        {/* Interactive Tabbed Workbench Container */}
        <div className="border border-line rounded-xl bg-surface overflow-hidden shadow-xs">
          {/* Workbench Tab Switcher Bar */}
          <div className="px-4 py-3 bg-surface-alt border-b border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-surface text-ink font-semibold shadow-xs border border-line ring-1 ring-accent/20'
                      : 'text-muted hover:text-ink hover:bg-surface/60 border border-transparent'
                  }`}
                >
                  <span className={activeTab === tab.id ? 'text-accent' : 'text-muted'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-alt text-muted border border-line/60">
                    {tab.badge}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-muted self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden />
              <span>Available for Internships</span>
            </div>
          </div>

          {/* Workbench Body */}
          <div className="p-6 sm:p-8">
            {/* TAB 1: Story & Education */}
            {activeTab === 'story' && (
              <div className="space-y-8 max-w-4xl">
                {/* Personal Narrative */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                      Background &amp; Focus
                    </h3>
                  </div>
                  {CV_SUMMARY.split('\n\n').map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="type-body text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Academic Journey Card */}
                <div className="pt-6 border-t border-line/60 space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                      Academic Institution
                    </h3>
                  </div>

                  {CV_EDUCATION.map((edu) => (
                    <div
                      key={edu.period}
                      className="p-5 rounded-lg border border-line bg-surface-alt/40 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-xs font-mono text-muted bg-surface px-2 py-0.5 rounded border border-line inline-block mb-1">
                            {edu.period}
                          </span>
                          <h4 className="text-ink text-base font-bold">{edu.title}</h4>
                          <p className="text-secondary text-sm font-medium mt-0.5">
                            {edu.institution} · {edu.detail}
                          </p>
                        </div>
                        {edu.score && (
                          <div className="self-start sm:self-center px-3 py-1.5 rounded-lg border border-line bg-surface text-center">
                            <span className="block text-[10px] font-mono text-muted uppercase">GPA</span>
                            <span className="text-sm font-bold text-accent">{edu.score}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2 border-t border-line/60 text-xs text-muted flex flex-wrap gap-2">
                        <span className="font-semibold text-secondary">Key Coursework:</span>
                        <span>Data Structures &amp; Algorithms</span>
                        <span>·</span>
                        <span>Database Systems (SQL)</span>
                        <span>·</span>
                        <span>Object-Oriented Programming (Python)</span>
                        <span>·</span>
                        <span>Web Development</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Languages & Communication */}
                <div className="pt-6 border-t border-line/60">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe2 className="w-4 h-4 text-secondary" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                      Communication &amp; Documentation Languages
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {CV_LANGUAGES.map((lang) => (
                      <div
                        key={lang.language}
                        className="p-3.5 rounded-lg border border-line bg-surface-alt/30 flex items-center justify-between"
                      >
                        <span className="font-semibold text-ink text-sm">{lang.language}</span>
                        <span className="text-xs font-mono text-muted bg-surface px-2 py-0.5 rounded border border-line">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Technical Capability Directory */}
            {activeTab === 'stack' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-line/60">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-secondary" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                      Technical Capability Directory
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-muted">
                    {CAPABILITY_DIRECTORY.length} core competencies
                  </span>
                </div>

                {/* Structured Capability Directory Table */}
                <div className="border border-line rounded-lg overflow-hidden bg-surface shadow-xs">
                  {/* Table Header (Desktop) */}
                  <div className="hidden md:grid grid-cols-[180px_1fr_180px] px-5 py-2.5 bg-surface-alt border-b border-line text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                    <span>Technology</span>
                    <span>Primary Application &amp; Use Case</span>
                    <span className="text-right">Project Context</span>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y divide-line/60">
                    {CAPABILITY_DIRECTORY.map((item) => (
                      <div
                        key={item.name}
                        className="p-4 md:px-5 md:py-3.5 grid md:grid-cols-[180px_1fr_180px] gap-2 md:gap-4 items-start md:items-center hover:bg-surface-alt/40 transition-colors"
                      >
                        {/* Column 1: Tech & Category */}
                        <div>
                          <div className="font-semibold text-sm text-ink">{item.name}</div>
                          <span className="text-[11px] font-mono text-muted">{item.category}</span>
                        </div>

                        {/* Column 2: Practical Use Case */}
                        <p className="type-body text-xs leading-relaxed text-secondary md:pr-4">
                          {item.useCase}
                        </p>

                        {/* Column 3: Context / Application */}
                        <div className="md:text-right pt-1 md:pt-0">
                          <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded border border-line bg-surface-alt text-muted">
                            {item.application}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  * All technical competencies listed reflect hands-on experience in coursework, personal projects, and verified public repositories.
                </p>
              </div>
            )}

            {/* TAB 3: Verified Credentials */}
            {activeTab === 'credentials' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between pb-3 border-b border-line/60">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                      Verified Technical Certifications
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-muted">
                    Official verification links &amp; license IDs
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {CV_CERTIFICATES.map((cert) => (
                    <div
                      key={cert.title}
                      className="p-5 rounded-lg border border-line bg-surface-alt/30 flex flex-col justify-between space-y-4 hover:border-neutral-400 transition-colors"
                    >
                      <div className="flex gap-4 items-start">
                        {cert.imageUrl ? (
                          <img
                            src={cert.imageUrl}
                            alt={cert.title}
                            className="w-14 h-14 rounded-lg border border-line object-cover bg-surface shrink-0 p-1"
                            width={56}
                            height={56}
                            loading="lazy"
                          />
                        ) : null}
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-mono text-muted">
                              {cert.period}
                            </span>
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded border border-line bg-surface text-secondary font-semibold">
                              VERIFIED
                            </span>
                          </div>
                          <h4 className="text-ink text-sm font-bold leading-snug">{cert.title}</h4>
                          <p className="text-xs text-muted">{cert.issuer}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-line/60 flex flex-wrap items-center justify-between gap-2">
                        {cert.credentialId && (
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md border border-line bg-surface hover:border-neutral-400 text-secondary focus-ring cursor-pointer"
                            onClick={() => handleCopy(cert.credentialId!)}
                            title="Click to copy credential ID"
                          >
                            {copiedId === cert.credentialId ? (
                              <>
                                <Check className="w-3 h-3 text-accent" />
                                <span className="text-accent font-semibold">ID Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-muted" />
                                <span>ID: {cert.credentialId.slice(0, 10)}...</span>
                              </>
                            )}
                          </button>
                        )}

                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-ink text-surface hover:opacity-90 focus-ring"
                          >
                            Verify
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
