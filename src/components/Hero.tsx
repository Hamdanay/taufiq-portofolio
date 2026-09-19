import React from 'react';
import { BIODATA, CV_SUMMARY } from '../data/cvData';

interface HeroProps {
  profileImage: string;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profileImage, onCopyEmail }) => {
  return (
    <section id="hero" className="section-pad border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_11.5rem] lg:grid-cols-[minmax(0,1fr)_13.5rem] gap-8 md:gap-10 items-center">
          <div className="space-y-6 min-w-0">
            <header>
              <h1 className="type-display text-balance">{BIODATA.fullName}</h1>
              <p className="type-lead mt-3">{BIODATA.headline}</p>

              <dl className="mt-5 space-y-2 type-body-tight">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <dt className="type-stat-label shrink-0">Telepon</dt>
                  <dd>
                    <a href={BIODATA.phoneHref} className="type-body-ink font-normal link-underline focus-ring rounded-sm">
                      {BIODATA.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <dt className="type-stat-label shrink-0">Email</dt>
                  <dd>
                    <button
                      type="button"
                      onClick={onCopyEmail}
                      className="type-body-ink font-normal link-underline focus-ring rounded-sm cursor-pointer bg-transparent border-0 p-0 text-left"
                    >
                      {BIODATA.email}
                    </button>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <dt className="type-stat-label shrink-0">LinkedIn</dt>
                  <dd>
                    <a
                      href={BIODATA.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="type-body-ink font-normal link-underline focus-ring rounded-sm"
                    >
                      {BIODATA.linkedinLabel}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <dt className="type-stat-label shrink-0">Lokasi</dt>
                  <dd className="type-body-ink font-normal">
                    {BIODATA.location} · {BIODATA.country}
                  </dd>
                </div>
              </dl>
            </header>

            <div className="space-y-3 border-t border-line pt-6">
              <h2 className="type-label">Summary</h2>
              {CV_SUMMARY.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="type-body">
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-2.5 type-ui bg-ink text-paper rounded-md hover:bg-accent transition-colors focus-ring"
            >
              Lihat pengalaman & proyek
            </a>
          </div>

          <div className="mx-auto md:ml-auto md:mr-0 w-full max-w-[13.5rem] shrink-0">
            <div className="rounded-2xl border-2 border-line bg-surface p-2 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-paper">
                <img
                  src={profileImage}
                  alt={BIODATA.fullName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
