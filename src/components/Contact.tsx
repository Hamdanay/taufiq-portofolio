import React from 'react';
import { BIODATA } from '../data/cvData';

interface ContactProps {
  onCopyEmail: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail }) => {
  return (
    <section id="contact" className="section-pad bg-surface border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
        <h2 className="type-section mb-5">Mari bicara</h2>
        <p className="type-body mb-9">
          Hubungi saya melalui email atau telepon sesuai data pada CV.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <a
            href={`mailto:${BIODATA.email}`}
            className="inline-flex justify-center px-5 py-2.5 type-ui bg-ink text-paper rounded-md hover:bg-accent transition-colors focus-ring"
          >
            Kirim email
          </a>
          <a
            href={BIODATA.phoneHref}
            className="inline-flex justify-center px-5 py-2.5 type-ui border border-line rounded-md hover:bg-paper transition-colors focus-ring text-ink"
          >
            Telepon
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className="inline-flex justify-center px-5 py-2.5 type-ui border border-line rounded-md hover:bg-paper transition-colors focus-ring cursor-pointer bg-transparent text-ink"
          >
            Salin email
          </button>
        </div>

        <p className="mt-8 type-meta-lg">
          <a
            href={BIODATA.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline focus-ring rounded-sm text-muted hover:text-ink"
          >
            {BIODATA.linkedinLabel}
          </a>
        </p>
        </div>
      </div>
    </section>
  );
};
