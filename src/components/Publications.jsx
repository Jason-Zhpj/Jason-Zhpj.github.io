import { IconFileText, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { publications } from '../data/publications';
import FadeInSection from './FadeInSection';
import '../styles/Publications.css';

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section__title">Publications</h2>
          {publications.length === 0 ? (
            <p className="publications__empty">Coming soon...</p>
          ) : (
            <div className="publications__list">
              {publications.map((pub, i) => (
                <div className="pub-card" key={i}>
                  {pub.image && (
                    <div className="pub-card__image">
                      <img src={pub.image} alt={pub.title} />
                    </div>
                  )}
                  <div className="pub-card__content">
                    <h3 className="pub-card__title">{pub.title}</h3>
                    <p className="pub-card__authors">
                      {pub.authors.map((author, j) => (
                        <span key={j}>
                          {j > 0 && ', '}
                          <span className={author === 'Pujian Zhan' ? 'pub-card__self' : ''}>
                            {author}
                          </span>
                        </span>
                      ))}
                    </p>
                    <p className="pub-card__venue">
                      {pub.venue}, {pub.year}
                    </p>
                    <div className="pub-card__links">
                      {pub.links?.paper && (
                        <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                          <IconFileText size={16} /> Paper
                        </a>
                      )}
                      {pub.links?.code && (
                        <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                          <IconBrandGithub size={16} /> Code
                        </a>
                      )}
                      {pub.links?.project && (
                        <a href={pub.links.project} target="_blank" rel="noopener noreferrer">
                          <IconExternalLink size={16} /> Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </FadeInSection>
      </div>
    </section>
  );
}
