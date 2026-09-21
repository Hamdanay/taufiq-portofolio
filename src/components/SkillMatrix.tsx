import React from 'react';
import {
  CV_CERTIFICATES,
  CV_EDUCATION,
  CV_LANGUAGES,
  SKILL_CATEGORIES,
} from '../data/cvData';

export const SkillMatrix: React.FC = () => {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="section-eyebrow">Background</p>
        <h2 className="type-section mb-10">
          Skills & <span>background</span>
        </h2>

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
                    <span className="text-ink">{skill.name}</span>
                    <span className="type-meta">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="grid md:grid-cols-2 gap-4">
            <article className="glass-card p-5 sm:p-6">
              <h3 className="type-block-title mb-4">Education</h3>
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
              <h3 className="type-block-title mb-4">Certificates</h3>
              <ul className="space-y-4">
                {CV_CERTIFICATES.map((cert) => (
                  <li key={cert.title} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <p className="type-meta mb-1">{cert.period}</p>
                    <p className="text-ink text-sm">{cert.title}</p>
                    <p className="type-body-tight text-xs mt-0.5">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="glass-card p-5 sm:p-6">
            <h3 className="type-block-title mb-3">Languages</h3>
            <ul className="flex flex-wrap gap-6">
              {CV_LANGUAGES.map((lang) => (
                <li key={lang.language} className="text-sm">
                  <span className="text-ink">{lang.language}</span>
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
