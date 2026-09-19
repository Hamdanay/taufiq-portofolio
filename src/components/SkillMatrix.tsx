import React from 'react';
import { Cloud, Code, Cpu } from 'lucide-react';
import type { SkillCategory } from '../types/portfolio';

interface SkillMatrixProps {
  profileImage?: string;
  skillCategories: SkillCategory[];
}

export const SkillMatrix: React.FC<SkillMatrixProps> = ({ skillCategories }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud':
        return <Cloud className="w-5 h-5" />;
      case 'code':
        return <Code className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#F8F9FA] border-t border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-[#211C1A]">
            Technical skills
          </h2>
          <p className="text-[#211C1A]/70 text-sm leading-relaxed">
            Sebagai mahasiswa Computer Science, saya mengkombinasikan fondasi teori ilmu komputer (sistem operasi, jaringan komputer, struktur data) dengan praktik industri rekayasa cloud dan software backend.
          </p>
        </div>

        {/* Grid Layout 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="rounded-xl p-6 bg-[#F0EAE5] border border-[#211C1A]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Icon + Title */}
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-4">
                  {getCategoryIcon(cat.iconName)}
                </div>

                <h3 className="text-lg font-bold text-[#211C1A] mb-2">{cat.title}</h3>
                <p className="text-xs text-[#211C1A]/70 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-3">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="border-b border-[#211C1A]/10 pb-2">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="text-[#211C1A] font-semibold">{s.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8F9FA] text-[#2563EB] border border-[#211C1A]/5">
                          {s.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#211C1A]/10 text-[11px] font-mono text-[#211C1A]/60 flex items-center justify-between">
                <span>Verified via Project Implementation</span>
                <span className="text-[#2563EB]">● Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
