import { IconAward } from '@tabler/icons-react';
import { honors } from '../data/honors';
import FadeInSection from './FadeInSection';
import '../styles/Honors.css';

export default function Honors() {
  return (
    <section id="honors" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section__title">Honors & Awards</h2>
          <div className="honors__list">
            {honors.map((item, i) => (
              <div className="honor-card" key={i}>
                <div className="honor-card__icon">
                  <IconAward size={24} />
                </div>
                <div className="honor-card__content">
                  <h3 className="honor-card__title">{item.title}</h3>
                  <div className="honor-card__meta">
                    <span className="honor-card__year">{item.year}</span>
                    {item.note && <span className="honor-card__note">{item.note}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
