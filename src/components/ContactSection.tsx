import React from 'react';
import { BIODATA } from '../data/cvData';
import { useReveal } from '../hooks/useReveal';

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
              <h2 className="type-section mb-4">Let&apos;s work together</h2>
              <p className="type-body max-w-md">
                Open to cloud and web development internships. Copy my email below to reach out.
              </p>
            </div>
            <div className="flex flex-col gap-3 contact-actions min-w-0">
              <button
                type="button"
                onClick={onCopyEmail}
                className="btn-solid focus-ring min-w-0 justify-center"
                aria-label={`Copy email ${BIODATA.email} to clipboard`}
              >
                <span className="truncate max-w-full">{BIODATA.email}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
