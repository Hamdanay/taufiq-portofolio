import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AbstractHeroArt } from './AbstractHeroArt';
import { BIODATA, CV_SUMMARY, HERO_SKILL_TAGS, HERO_STATS } from '../data/cvData';

interface HeroProps {
  profileImage: string;
  onCopyEmail: () => void;
  onOpenCv: () => void;
}

const tagHref = (tag: string): string | undefined => {
  if (tag === 'GitHub') return BIODATA.githubUrl;
  if (tag === 'LinkedIn') return BIODATA.linkedinUrl;
  return undefined;
};

export const Hero: React.FC<HeroProps> = ({ profileImage, onCopyEmail, onOpenCv }) => {
  return (
    <section id="hero" className="section-pad overflow-hidden relative">
      <AbstractHeroArt />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end min-h-[calc(100vh-5rem)]">
          <div className="space-y-9 order-2 lg:order-1 pb-4">
            <header>
              <p className="section-eyebrow">Portfolio</p>
              <h1 className="type-hero-title">{BIODATA.fullName}</h1>
              <p className="type-body max-w-lg mt-5">
                <span className="text-accent font-medium">{BIODATA.headline}</span>
                <span className="text-muted"> · {BIODATA.location}</span>
              </p>
            </header>

            <div id="contact" className="input-modern">
              <input
                type="text"
                readOnly
                value={BIODATA.email}
                className="flex-1 min-w-0 px-4 py-3.5 bg-transparent text-ink text-sm border-0 focus:outline-none"
                aria-label="Email"
              />
              <button
                type="button"
                onClick={onCopyEmail}
                className="btn-icon focus-ring rounded-none"
                aria-label="Salin email ke clipboard"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-10 max-w-md">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="glass-card px-4 py-4">
                  <p className="type-stat-num">{stat.value}</p>
                  <p className="type-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {HERO_SKILL_TAGS.map((tag) => {
                const href = tagHref(tag);
                if (href) {
                  return (
                    <a
                      key={tag}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="tag-pill tag-pill-accent focus-ring"
                    >
                      {tag}
                    </a>
                  );
                }
                return (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-auto lg:min-w-[min(50vw,22rem)]">
            <div className="hero-photo-wrap mx-auto lg:mx-0">
              <img
                src={profileImage}
                alt={BIODATA.fullName}
                className="hero-photo-img"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500';
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="section-eyebrow">About</p>
          <h2 className="type-section mb-6">
            About <span>me</span>
          </h2>
          {CV_SUMMARY.split('\n\n').map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="type-body mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a href="#projects" className="btn-outline focus-ring">
              Lihat portfolio
            </a>
            <button type="button" onClick={onOpenCv} className="btn-ghost focus-ring">
              Lihat CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
