import React from 'react';

const topics = [
  {
    title: 'Self-checkout clients',
    body:
      'In-store terminals as the entry point for the supermarket self-checkout system described in the cloud infrastructure simulation project.',
  },
  {
    title: 'Application & integration layer',
    body:
      'Services that handle checkout logic, payments, and integrations — the middle tier in the architecture diagram.',
  },
  {
    title: 'Data & persistence',
    body:
      'Databases and storage backing catalog, transactions, and operational data for the self-checkout flow.',
  },
];

export const ArchitectureExplorer: React.FC = () => {
  return (
    <section id="architecture-explorer" className="section-pad border-b border-line bg-surface-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <header className="mb-6 max-w-2xl">
          <h2 className="type-section section-heading">Want to explore</h2>
          <p className="type-body-tight mt-3">
            Lapisan arsitektur dari proyek simulasi cloud infrastructure (supermarket self-checkout), sesuai
            bagian Experience pada CV.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="card-frame p-4 sm:p-5"
            >
              <h3 className="type-block-title mb-2">{topic.title}</h3>
              <p className="type-body-tight">{topic.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
