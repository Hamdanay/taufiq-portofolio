import React from 'react';

export const ArchitectureExplorer: React.FC = () => {
  return (
    <section id="architecture-explorer" className="py-20 bg-[#F8F9FA] border-t border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
            03. Interactive Cloud Explorer
          </span>
          <h2 className="text-3xl font-extrabold text-[#211C1A] mt-1">
            Want to explore
          </h2>
        </div>

        {/* Interactive Cloud Explorer Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-xl bg-[#F0EAE5] border border-[#211C1A]/10 space-y-3 hover:border-[#2563EB] transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-[#211C1A] group-hover:text-[#2563EB] transition-colors">Auto Scaling &amp; Traffic Spikes</h3>
            <p className="text-xs text-[#211C1A]/70 leading-relaxed">
              Menggunakan AWS Target Tracking Scaling Policies berdasarkan konsumsi CPU (&gt;75%) dan Request Count per Target untuk menambah Fargate tasks secara efisien.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F0EAE5] border border-[#211C1A]/10 space-y-3 hover:border-[#06B6D4] transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded bg-[#06B6D4] text-white flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-[#211C1A] group-hover:text-[#06B6D4] transition-colors">Database Multi-AZ Failover</h3>
            <p className="text-xs text-[#211C1A]/70 leading-relaxed">
              Amazon RDS PostgreSQL direplikasi secara synchronous ke Standby Instance di Availability Zone berbeda dengan DNS switchover otomatis di bawah 60 detik.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F0EAE5] border border-[#211C1A]/10 space-y-3 hover:border-[#211C1A] transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded bg-[#211C1A] text-white flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-[#211C1A] group-hover:text-[#2563EB] transition-colors">CI/CD Automated Testing</h3>
            <p className="text-xs text-[#211C1A]/70 leading-relaxed">
              Setiap pull request diuji via GitHub Actions (linting, unit test, security scan SonarQube) sebelum dilakukan otomatisasi Terraform apply.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
