import { IconSchool, IconCertificate } from '@tabler/icons-react';
import { education } from '../data/education';
import FadeInSection from './FadeInSection';
import '../styles/Education.css';

const icons = {
  'Ph.D.': IconSchool,
  'B.Eng.': IconCertificate,
};

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <FadeInSection>
          <h2 className="section__title">Education</h2>
          <div className="education__timeline">
            {education.map((item, i) => {
              const Icon = icons[item.degree] || IconSchool;
              return (
                <div className="edu-card" key={i}>
                  <div className="edu-card__marker">
                    <div className="edu-card__icon">
                      <Icon size={22} />
                    </div>
                    {i < education.length - 1 && <div className="edu-card__line" />}
                  </div>
                  <div className="edu-card__content">
                    <h3 className="edu-card__degree">{item.degree}</h3>
                    <p className="edu-card__institution">{item.institution}</p>
                    {item.department && (
                      <p className="edu-card__department">{item.department}</p>
                    )}
                    <p className="edu-card__period">{item.period}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
