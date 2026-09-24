import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BIODATA } from '../data/cvData';
import { useReveal } from '../hooks/useReveal';

interface ContactSectionProps {
  onCopyEmail: () => void;
  onOpenCv: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, onOpenCv }) => {
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
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
            <div>
              <h2 className="type-section mb-4">Mari berkolaborasi.</h2>
              <p className="type-body max-w-md">
                Terbuka untuk proyek cloud, web, atau eksplorasi AI. Salin email, telepon, atau unduh CV
                untuk detail lengkap.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end contact-actions min-w-0">
              <button type="button" onClick={onCopyEmail} className="btn-solid focus-ring text-left sm:text-center min-w-0">
                <span className="truncate block sm:inline max-w-full">{BIODATA.email}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
              </button>
              <a href={BIODATA.phoneHref} className="btn-outline focus-ring">
                {BIODATA.phone}
              </a>
              <a
                href={`mailto:${BIODATA.email}`}
                className="btn-ghost focus-ring sm:hidden"
              >
                Kirim email
              </a>
              <button type="button" onClick={onOpenCv} className="btn-ghost focus-ring">
                Unduh CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
