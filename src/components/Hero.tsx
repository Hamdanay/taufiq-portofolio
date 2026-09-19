import React from 'react';
import { Copy, ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  profileImage: string;
  typedText: string;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profileImage, typedText, onCopyEmail }) => {
  return (
    <section id="hero" className="pt-12 pb-20 md:pt-20 md:pb-28 relative overflow-hidden bg-gradient-to-b from-[#F8F9FA] via-[#F0EAE5]/40 to-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Text & Profile Showcase */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Profile Avatar Showcase Badge (2x Larger Size) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative group cursor-pointer shrink-0 self-start sm:self-auto">
                {/* Glowing Animated Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#2563EB] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                {/* Avatar Image (2x Larger: 192px on desktop) */}
                <img
                  src={profileImage}
                  alt="Foto Profil Taufiqurrahman Hamdan Al Ayubi"
                  className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 sm:border-6 border-[#F8F9FA] shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500";
                  }}
                />
                
                {/* Online / Active Badge */}
                <span className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-emerald-500 ring-4 sm:ring-6 ring-[#F8F9FA] animate-pulse" title="Terbuka untuk Peluang Kerja / Proyek"></span>
              </div>

              <div className="space-y-2">
                {/* System Status Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EAE5] border border-[#211C1A]/10 text-xs font-mono text-[#211C1A]/80 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-ping"></span>
                  <span className="font-semibold">Bina Nusantara (Binusian 28 · Semester 5)</span>
                </div>
                
                <div className="text-xs sm:text-sm font-mono text-[#211C1A]/70 flex items-center gap-2">
                  <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Open for Roles &amp; Projects
                  </span>
                  <span>•</span>
                  <span>📍 Bandung, ID</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#211C1A] tracking-tight leading-tight">
              Mahasiswa Computer Science BINUS &amp; <span className="text-[#2563EB]">AI-Assisted Developer.</span>
            </h1>

            {/* Typed Role */}
            <p className="text-lg sm:text-xl font-mono text-[#2563EB] h-7 flex items-center">
              {typedText}<span className="border-r-2 border-[#2563EB] animate-pulse ml-0.5 h-5"></span>
            </p>

            {/* Concise Bio */}
            <p className="text-base text-[#211C1A]/80 max-w-2xl leading-relaxed">
              Mahasiswa Computer Science Universitas Bina Nusantara (Binusian 28, Semester 5) berlokasi di Bandung. Berpengalaman magang di Data Center Office Thursina IIBS (Mei–Juni 2023) serta aktif mengeksplorasi pembuatan antarmuka web (Tailwind CSS), pemodelan database (MySQL), Python, dan alur kerja AI (LangFlow).
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-[#211C1A] hover:bg-black text-[#F8F9FA] text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Eksplorasi Proyek</span>
                <ArrowRight className="w-4 h-4 text-[#2563EB]" />
              </a>

              <button
                onClick={onCopyEmail}
                className="px-5 py-3 rounded-lg bg-[#F0EAE5] hover:bg-[#e4dad3] text-[#211C1A] text-sm font-semibold border border-[#211C1A]/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Copy className="w-4 h-4 text-[#2563EB]" />
                <span>Salin Email Saya</span>
              </button>
            </div>

            {/* Quick Metrics Cards */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#211C1A]/10 max-w-lg">
              <div className="p-3 rounded-lg bg-[#F0EAE5]/60 border border-[#211C1A]/5">
                <div className="text-lg sm:text-xl font-bold font-mono text-[#2563EB]">BINUS B28</div>
                <div className="text-[11px] font-medium text-[#211C1A]/70 uppercase">Semester 5 CS</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F0EAE5]/60 border border-[#211C1A]/5">
                <div className="text-lg sm:text-xl font-bold font-mono text-[#211C1A]">Intern 2023</div>
                <div className="text-[11px] font-medium text-[#211C1A]/70 uppercase">Thursina Data Center</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F0EAE5]/60 border border-[#211C1A]/5">
                <div className="text-lg sm:text-xl font-bold font-mono text-[#06B6D4]">AI-Assisted</div>
                <div className="text-[11px] font-medium text-[#211C1A]/70 uppercase">Workflow Engine</div>
              </div>
            </div>

          </div>

          {/* Right Column: Web App & API Development Terminal Window */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#211C1A] text-[#F8F9FA] p-5 shadow-2xl border border-[#211C1A]/20 font-mono text-xs space-y-3">
              
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                </div>
                <span className="text-[11px] text-white/50 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                  taufiq@binus-laptop ~ zsh
                </span>
              </div>

              {/* Terminal Output Stream */}
              <div className="space-y-3 text-slate-300 text-[11px] leading-relaxed">
                {/* Section 1: LangFlow AI Prototype */}
                <div>
                  <div className="text-emerald-400 font-bold">$ python main.py --run langflow</div>
                  <div className="pl-3 border-l-2 border-emerald-500/60 mt-1 space-y-0.5 text-white/80">
                    <div className="text-[#06B6D4] font-bold">✓ LangFlow AI Conversational Pipeline Loaded</div>
                    <div>➜  <span className="text-white">Workflow:</span> PromptNode ➔ LLMModel ➔ ResponseParser</div>
                    <div className="text-emerald-400 text-[10px] pt-0.5">[status] Ready for interactive conversational testing</div>
                  </div>
                </div>

                {/* Section 2: MySQL Connection & Queries */}
                <div className="pt-1">
                  <div className="text-cyan-400 font-bold">$ mysql -u taufiq -p -e "SHOW TABLES IN db_portfolio;"</div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-emerald-300 text-[10px] font-mono mt-1 space-y-0.5">
                    <div>+----------------------+</div>
                    <div>| Tables_in_db_portf   |</div>
                    <div>+----------------------+</div>
                    <div className="text-amber-300">| users                |</div>
                    <div className="text-amber-300">| projects_langflow    |</div>
                    <div className="text-amber-300">| data_center_logs     |</div>
                    <div>+----------------------+</div>
                  </div>
                </div>

                {/* Section 3: Status Summary */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-400 font-bold animate-pulse">
                    ✓ Python, MySQL, Tailwind &amp; LangFlow Ready
                  </span>
                  <span className="text-white/40">BINUS B28</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
