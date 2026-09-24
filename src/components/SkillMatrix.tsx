import React from 'react';
import { ExternalLink } from 'lucide-react';
import {
  CV_CERTIFICATES,
  CV_EDUCATION,
  CV_LANGUAGES,
  CV_SUMMARY,
  SKILL_CATEGORIES,
} from '../data/cvData';
import { useReveal } from '../hooks/useReveal';

interface SkillMatrixProps {
  onCopyCredential: (text: string) => void;
}

export const SkillMatrix: React.FC<SkillMatrixProps> = ({ onCopyCredential }) => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`section-pad reveal-section ${visible ? 'is-visible' : ''}`}>
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <h2 className="type-section mb-4">Tentang saya</h2>
            <p className="type-body-tight">Ringkasan dari CV — pendidikan, sertifikasi, dan keahlian teknis.</p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {CV_SUMMARY.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="type-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {SKILL_CATEGORIES.map((cat) => (
            <article key={cat.title} className="glass-card p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-4">
                <h3 className="type-block-title mb-2">{cat.title}</h3>
                <p className="type-body-tight">{cat.description}</p>
              </div>
              <ul className="lg:col-span-8 divide-y divide-line">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1 text-sm"
                  >
                    <span className="text-ink break-anywhere">{skill.name}</span>
                    <span className="type-meta">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="grid md:grid-cols-2 gap-4">
            <article className="glass-card p-5 sm:p-6">
              <h3 className="type-block-title mb-4">Pendidikan</h3>
              <ul className="space-y-4">
                {CV_EDUCATION.map((edu) => (
                  <li key={edu.period} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <p className="type-meta mb-1">{edu.period}</p>
                    <p className="text-ink text-sm">
                      {edu.title} — {edu.institution} ({edu.detail})
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-card p-5 sm:p-6">
              <h3 className="type-block-title mb-4">Sertifikat</h3>
              <ul className="space-y-4">
                {CV_CERTIFICATES.map((cert) => (
                  <li key={cert.title} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <p className="type-meta mb-1">{cert.period}</p>
                    <p className="text-ink text-sm font-semibold">{cert.title}</p>
                    <p className="type-body-tight text-xs mt-0.5">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tag-pill tag-pill-accent text-xs py-1 inline-flex items-center gap-1 focus-ring"
                        >
                          Halaman penerbit
                          <ExternalLink className="w-3 h-3" aria-hidden />
                        </a>
                      )}
                      {cert.credentialId && (
                        <button
                          type="button"
                          className="tag-pill text-xs py-1 focus-ring cursor-pointer"
                          onClick={() => onCopyCredential(cert.credentialId!)}
                        >
                          Salin ID sertifikat
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="glass-card p-5 sm:p-6">
            <h3 className="type-block-title mb-3">Bahasa</h3>
            <ul className="flex flex-wrap gap-6">
              {CV_LANGUAGES.map((lang) => (
                <li key={lang.language} className="text-sm">
                  <span className="text-ink font-semibold">{lang.language}</span>
                  <span className="text-muted"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
