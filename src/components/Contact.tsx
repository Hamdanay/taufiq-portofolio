import React from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';

interface ContactProps {
  profileImage: string;
  onCopyEmail: () => void;
}

const IconGithub: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const IconLinkedin: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z"/>
  </svg>
);

export const Contact: React.FC<ContactProps> = ({ profileImage, onCopyEmail }) => {
  return (
    <section id="contact" className="py-20 bg-[#211C1A] text-[#F8F9FA] border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
              04. Mari Berdiskusi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Siap Berkontribusi Sebagai Cloud &amp; Software Engineer.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Saya saat ini terbuka untuk peluang magang (<i>internship</i>), posisi paruh waktu, maupun <i>project-based engagement</i> di bidang Cloud Infrastructure, DevOps, dan Backend Software Engineering.
            </p>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:urrahmantaufiq00@gmail.com"
                className="px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Kirim Email Langsung</span>
              </a>

              <button
                onClick={onCopyEmail}
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
              >
                <Copy className="w-4 h-4 text-[#2563EB]" />
                <span>Salin Alamat Email</span>
              </button>
            </div>

            {/* Social Quick Shortcuts */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-slate-400">
              <a 
                href="https://github.com/Hamdanay" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-2 text-xs font-mono py-1 px-2.5 rounded-md bg-white/5 border border-white/10 hover:border-[#2563EB]"
              >
                <IconGithub className="w-5 h-5 text-white" /> 
                <span>github.com/Hamdanay</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/taufiqurrahman-hamdan-al-ayubi-48bb44229/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-2 text-xs font-mono py-1 px-2.5 rounded-md bg-white/5 border border-white/10 hover:border-[#2563EB]"
              >
                <IconLinkedin className="w-5 h-5 text-[#2563EB]" /> 
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Terminal Bio Summary Card with Profile Thumbnail */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <img
                src={profileImage}
                alt="Taufiqurrahman Hamdan Al Ayubi Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#2563EB]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500";
                }}
              />
              <div>
                <div className="text-xs font-mono text-[#2563EB] font-bold">System Summary &amp; Availability</div>
                <div className="text-[10px] font-mono text-slate-400">Taufiqurrahman Hamdan Al Ayubi — BINUS B28 Computer Science</div>
              </div>
            </div>
            
            <ul className="space-y-3 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pendidikan: Universitas Bina Nusantara (Binusian 28 · Semester 5 CS)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pengalaman: Ex-Data Center Office Intern (Thursina IIBS · Mei–Juni 2023)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lokasi: Bandung, Jawa Barat (Siap Remote / On-site)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fokus Stack: Python, MySQL, Tailwind CSS, LangFlow AI Prototyping</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Metode Kerja: Adaptif, Efisien (AI-Assisted Workflow), Continuous Learner</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
