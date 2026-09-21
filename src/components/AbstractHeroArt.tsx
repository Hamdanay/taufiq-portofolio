import React from 'react';

/** Dekorasi abstrak di belakang hero — animasi halus, non-interaktif */
export const AbstractHeroArt: React.FC = () => {
  return (
    <div className="abstract-hero-art pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="abstract-shape abstract-shape--blob-a" />
      <div className="abstract-shape abstract-shape--blob-b" />
      <div className="abstract-shape abstract-shape--dash" />
      <div className="abstract-grid" />
    </div>
  );
};
