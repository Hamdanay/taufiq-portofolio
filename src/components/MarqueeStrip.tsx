import React from 'react';
import { HERO_SKILL_TAGS } from '../data/cvData';

const items = HERO_SKILL_TAGS.filter((t) => !['GitHub', 'LinkedIn'].includes(t));

export const MarqueeStrip: React.FC = () => {
  const track = [...items, ...items];

  return (
    <div className="marquee-band border-y border-line" aria-hidden>
      <div className="marquee-track">
        {track.map((label, i) => (
          <span key={`${label}-${i}`} className="marquee-item">
            {label}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
};
