import React, { useState } from 'react';
import { Server } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || "proj-1");
  const [activeTab, setActiveTab] = useState<'overview' | 'diagram' | 'code'>('overview');

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  return (
    <section id="projects" className="py-20 bg-[#F0EAE5]/50 border-t border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
            02. Inti Portofolio &amp; Arsitektur System
          </span>
          <h2 className="text-3xl font-extrabold text-[#211C1A] mt-1">
            Proyek Pilihan &amp; Diagram Arsitektur Interaktif
          </h2>
          <p className="text-[#211C1A]/70 mt-2 text-sm leading-relaxed">
            Bukan sekadar aplikasi sederhana; setiap proyek dirancang dengan arsitektur cloud terstruktur, pengujian beban, dan skema deployment terotomatisasi.
          </p>
        </div>

        {/* Project Switcher Bar */}
        <div className="flex flex-wrap gap-3 mb-8">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedProjectId(proj.id);
                setActiveTab('overview');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedProjectId === proj.id
                  ? "bg-[#2563EB] text-white shadow-md"
                  : "bg-[#F8F9FA] text-[#211C1A] hover:bg-white border border-[#211C1A]/10"
              }`}
            >
              {proj.title.split(' ')[0]} {proj.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Main Selected Project Container (Z-Pattern Card) */}
        <div className="rounded-2xl bg-[#F8F9FA] border border-[#211C1A]/10 p-6 md:p-8 shadow-xl">
          
          {/* Top Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#211C1A]/10">
            <div>
              <span className="inline-block px-2.5 py-1 rounded bg-[#2563EB]/10 text-[#2563EB] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-extrabold text-[#211C1A]">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-[#211C1A]/70 font-mono mt-0.5">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Toggle Selector Tabs for Interactive View */}
            <div className="inline-flex p-1 rounded-lg bg-[#F0EAE5] border border-[#211C1A]/10 self-start md:self-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'overview' ? "bg-[#211C1A] text-white shadow" : "text-[#211C1A]/70 hover:text-[#211C1A]"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('diagram')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'diagram' ? "bg-[#2563EB] text-white shadow" : "text-[#211C1A]/70 hover:text-[#211C1A]"
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span>Diagram Cloud</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'code' ? "bg-[#211C1A] text-white shadow" : "text-[#211C1A]/70 hover:text-[#211C1A]"
                }`}
              >
                Code/IaC Snippet
              </button>
            </div>
          </div>

          {/* Dynamic Content based on Active Tab */}
          <div className="pt-6">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-5">
                  <p className="text-sm text-[#211C1A]/80 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech Badges */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-[#211C1A]/60 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-[#F0EAE5] text-[#211C1A] text-xs font-semibold border border-[#211C1A]/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {selectedProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-lg bg-[#F0EAE5]/80 border border-[#211C1A]/10">
                        <div className="text-xs text-[#211C1A]/60 font-mono uppercase">{m.label}</div>
                        <div className="text-base font-bold font-mono text-[#2563EB] mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-5 rounded-xl bg-[#211C1A] text-[#F8F9FA] space-y-3 font-mono text-xs">
                  <div className="text-amber-400 font-bold flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    <span>Highlights Architectural Decisions</span>
                  </div>
                  <p className="text-white/80 leading-relaxed text-[11px]">
                    {selectedProject.architectureOverview}
                  </p>
                  <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 flex justify-between">
                    <span>Automated Failover</span>
                    <span>Terraform Managed</span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: INTERACTIVE CLOUD DIAGRAM VISUALIZER */}
            {activeTab === 'diagram' && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold flex items-center justify-between">
                  <span>Visual Topology Interactive Diagram: {selectedProject.title}</span>
                  <span className="font-mono text-[10px]">Active Cloud Nodes: {selectedProject.architectureNodes.length}</span>
                </div>

                {/* Flow Chart Nodes Visualizer */}
                <div className="p-6 rounded-xl bg-[#211C1A] text-white space-y-4 font-mono overflow-x-auto">
                  <div className="flex items-center justify-between min-w-[600px] gap-2">
                    {selectedProject.architectureNodes.map((node, nIdx) => (
                      <React.Fragment key={node.id}>
                        {/* Node Card */}
                        <div className="flex-1 p-3 rounded-lg bg-white/10 border border-white/20 hover:border-[#2563EB] transition-colors text-center group cursor-pointer">
                          <div className="text-[10px] text-[#06B6D4] uppercase font-bold mb-1">{node.type}</div>
                          <div className="text-xs font-bold text-white group-hover:text-[#2563EB] transition-colors">
                            {node.label}
                          </div>
                        </div>

                        {/* Arrow Connector */}
                        {nIdx < selectedProject.architectureNodes.length - 1 && (
                          <div className="text-[#2563EB] font-bold text-lg px-1 animate-pulse">
                            →
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#211C1A]/70 italic">
                  * Diagram ini menggambarkan alur lalu lintas data nyata dari entry point client menuju load balancer, worker compute cluster, hingga persistent database.
                </p>
              </div>
            )}

            {/* TAB 3: CODE / IAC SNIPPET */}
            {activeTab === 'code' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#211C1A]/70">
                  <span>IaC / Source Code Config Snippet:</span>
                  <span className="text-[#2563EB]">Read-only View</span>
                </div>
                <pre className="p-4 rounded-xl bg-[#211C1A] text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed border border-[#211C1A]/20">
                  <code>{selectedProject.terraformSnippet}</code>
                </pre>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
