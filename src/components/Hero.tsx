import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BIODATA } from '../data/cvData';
import { ProfileSocialLinks } from './ProfileSocialLinks';

interface HeroProps {
  profileImage: string;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profileImage, onOpenCv }) => {
  const nameParts = BIODATA.fullName.split(' ');

  return (
    <section id="hero" className="section-pad pt-6 sm:pt-14 overflow-hidden">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-center hero-layout">
          <div className="space-y-6 sm:space-y-8 min-w-0 order-2 lg:order-1">
            <header className="hero-enter min-w-0">
              <p className="type-hero-greet">Hi, I&apos;m</p>
              <h1 className="type-hero-title">
                {nameParts.slice(0, 2).join(' ')}
                <br />
                {nameParts.slice(2).join(' ') || nameParts[1]}
              </h1>
              <p className="type-body max-w-xl mt-4 sm:mt-5">
                <span className="text-ink font-semibold">{BIODATA.headline}</span>
                <span className="text-muted"> · {BIODATA.location}</span>
              </p>
              <p className="hero-tagline mt-4 max-w-xl text-secondary">{BIODATA.tagline}</p>
              <ProfileSocialLinks className="mt-5" size="sm" />
            </header>

            <div className="btn-stack-mobile hero-enter hero-enter-delay-1 pt-1">
              <a href="#projects" className="btn-solid focus-ring btn-full-mobile">
                View Projects
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
              </a>
              <button
                type="button"
                onClick={onOpenCv}
                className="btn-pill-border focus-ring btn-full-mobile"
              >
                Download CV
              </button>
              <a href="#contact" className="btn-pill-border focus-ring btn-full-mobile">
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end hero-enter hero-enter-delay-2 order-1 lg:order-2 w-full min-w-0">
            <div className="hero-photo-wrap">
              <img
                src={profileImage}
                alt={BIODATA.fullName}
                className="hero-photo-img"
                width={320}
                height={400}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 1024px) 72vw, 320px"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
