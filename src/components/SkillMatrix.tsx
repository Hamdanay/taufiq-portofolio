import React from 'react';
import {
  CV_CERTIFICATES,
  CV_EDUCATION,
  CV_LANGUAGES,
  SKILL_CATEGORIES,
} from '../data/cvData';

export const SkillMatrix: React.FC = () => {
  return (
    <section id="about" className="section-pad bg-surface border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <header className="mb-8">
          <h2 className="type-section">Skills</h2>
        </header>

        <div className="space-y-4">
          {SKILL_CATEGORIES.map((cat) => (
            <article
              key={cat.title}
              className="border border-line rounded-lg p-4 sm:p-5 bg-paper grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <h3 className="type-block-title mb-1">{cat.title}</h3>
                <p className="type-body-tight">{cat.description}</p>
              </div>

              <ul className="lg:col-span-8">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 py-2.5 border-b border-line last:border-b-0"
                  >
                    <span className="type-body-ink">{skill.name}</span>
                    <span className="type-meta sm:text-right sm:max-w-[10rem]">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="border border-line rounded-lg p-4 sm:p-5 bg-paper">
            <h3 className="type-block-title mb-3">Education</h3>
            <ul className="space-y-3">
              {CV_EDUCATION.map((edu) => (
                <li key={edu.period} className="type-body-tight border-b border-line last:border-b-0 pb-3 last:pb-0">
                  <p className="type-meta mb-1">{edu.period}</p>
                  <p className="type-body-ink font-normal">
                    {edu.title} — {edu.institution} ({edu.detail})
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-line rounded-lg p-4 sm:p-5 bg-paper">
            <h3 className="type-block-title mb-3">Certificates</h3>
            <ul className="space-y-3">
              {CV_CERTIFICATES.map((cert) => (
                <li key={cert.title} className="type-body-tight border-b border-line last:border-b-0 pb-3 last:pb-0">
                  <p className="type-meta mb-1">{cert.period}</p>
                  <p className="type-body-ink font-normal">{cert.title}</p>
                  <p className="type-body-tight mt-0.5">{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className="type-meta mt-1">Credential ID: {cert.credentialId}</p>
                  )}
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-line rounded-lg p-4 sm:p-5 bg-paper">
            <h3 className="type-block-title mb-3">Languages</h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {CV_LANGUAGES.map((lang) => (
                <li key={lang.language} className="type-body-tight">
                  <span className="type-body-ink font-normal">{lang.language}</span>
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
