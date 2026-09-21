import React from 'react';

const topics = [
  {
    title: 'Self-checkout clients',
    body:
      'Terminal di toko sebagai entry point sistem self-checkout supermarket (proyek simulasi cloud).',
  },
  {
    title: 'Application & integration',
    body: 'Layanan checkout, pembayaran, dan integrasi — lapisan tengah pada diagram arsitektur.',
  },
  {
    title: 'Data & persistence',
    body: 'Database dan penyimpanan untuk katalog, transaksi, dan data operasional.',
  },
];

export const ArchitectureExplorer: React.FC = () => {
  return (
    <section id="architecture-explorer" className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <header className="mb-8 max-w-2xl">
          <p className="section-eyebrow">Expertise</p>
          <h2 className="type-section mb-3">
            Core <span>services</span>
          </h2>
          <p className="type-body-tight">
            Fokus layanan dan pola arsitektur dari proyek cloud infrastructure simulation pada CV.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <article key={topic.title} className="glass-card p-5">
              <h3 className="type-block-title mb-2">{topic.title}</h3>
              <p className="type-body-tight">{topic.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
