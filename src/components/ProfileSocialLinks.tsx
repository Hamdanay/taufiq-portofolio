import React from 'react';
import { BIODATA } from '../data/cvData';

type ProfileSocialLinksProps = {
  className?: string;
  size?: 'md' | 'sm';
};

export const ProfileSocialLinks: React.FC<ProfileSocialLinksProps> = ({
  className = '',
  size = 'md',
}) => {
  const btnClass = size === 'sm' ? 'social-link social-link--sm' : 'social-link';

  return (
    <div className={`social-links ${className}`.trim()} role="group" aria-label="Profil sosial">
      <a
        href={BIODATA.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} focus-ring`}
      >
        {BIODATA.githubLabel}
      </a>
      <a
        href={BIODATA.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} focus-ring`}
      >
        {BIODATA.linkedinLabel}
      </a>
    </div>
  );
};
