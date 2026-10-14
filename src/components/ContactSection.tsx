import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { BIODATA } from '../data/cvData';
import { useReveal } from '../hooks/useReveal';
import { ProfileSocialLinks } from './ProfileSocialLinks';

interface ContactSectionProps {
  onCopyEmail: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail }) => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-pad reveal-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="page-container">
        <div className="contact-panel">
          <div className="contact-panel__glow" aria-hidden />
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <h2 className="type-section mb-3">Let&apos;s Connect</h2>
              <p className="type-body max-w-md">
                Open to software engineering and web development internship opportunities in Bandung, Jakarta, or remote.
              </p>
              <ProfileSocialLinks className="mt-5" size="sm" />
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 contact-actions min-w-0">
              <a
                href={`mailto:${BIODATA.email}`}
                className="btn-solid focus-ring min-w-0 justify-center text-center"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden />
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
              </a>
              <button
                type="button"
                onClick={onCopyEmail}
                className="btn-pill-border focus-ring min-w-0 justify-center text-center"
                aria-label={`Copy email ${BIODATA.email} to clipboard`}
              >
                <span className="truncate max-w-full">Copy: {BIODATA.email}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
