import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BIODATA, HERO_STATS } from '../data/cvData';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const ROTATING_ROLES = [
  'Infrastruktur cloud',
  'Pengembangan web',
  'Eksplorasi AI & LLM',
  'Rekayasa perangkat lunak',
];

interface HeroProps {
  profileImage: string;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profileImage, onOpenCv }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROTATING_ROLES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const nameParts = BIODATA.fullName.split(' ');
  const displayRole = reducedMotion ? ROTATING_ROLES[0] : ROTATING_ROLES[roleIndex];

  return (
    <section id="hero" className="section-pad pt-6 sm:pt-12 overflow-hidden">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-center hero-layout">
          <div className="space-y-6 sm:space-y-8 min-w-0 order-2 lg:order-1">
            <header className="hero-enter min-w-0">
              <p className="type-hero-greet">Halo 👋</p>
              <h1 className="type-hero-title">
                {nameParts.slice(0, 2).join(' ')}
                <br />
                {nameParts.slice(2).join(' ') || nameParts[1]}
              </h1>
              <p className="type-body max-w-xl mt-4 sm:mt-6">
                <span className="text-ink font-semibold">{BIODATA.headline}</span>
                <span className="text-muted"> — {BIODATA.location}</span>
              </p>
              <p className="mt-3 sm:mt-4 text-sm font-semibold text-secondary hero-focus-line">
                <span>Fokus saat ini:</span>
                <span className="role-rotator" aria-live={reducedMotion ? 'off' : 'polite'}>
                  <span key={displayRole} className="role-rotator__word">{displayRole}</span>
                </span>
              </p>
            </header>

            <div className="btn-stack-mobile hero-enter hero-enter-delay-1">
              <a href="#projects" className="btn-solid focus-ring btn-full-mobile">
                Lihat karya
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
              </a>
              <button type="button" onClick={onOpenCv} className="btn-outline focus-ring btn-full-mobile">
                Unduh CV
              </button>
              <a href="#contact" className="btn-ghost focus-ring btn-full-mobile">
                Hubungi saya
              </a>
            </div>

            <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-3 sm:gap-4 hero-enter hero-enter-delay-2">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="glass-card px-4 py-3.5 sm:px-5 sm:py-4 min-w-0">
                  <p className="type-stat-num">{stat.value}</p>
                  <p className="type-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end hero-enter hero-enter-delay-3 order-1 lg:order-2 w-full min-w-0">
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
