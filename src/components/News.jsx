import { news } from '../data/news';
import FadeInSection from './FadeInSection';
import '../styles/News.css';

export default function News() {
  if (news.length === 0) return null;

  return (
    <section id="news" className="section section--alt">
      <div className="container">
        <FadeInSection>
          <h2 className="section__title">News</h2>
          <ul className="news__list">
            {news.map((item, i) => (
              <li className="news__item" key={i}>
                <span className="news__date">{item.date}</span>
                <span className="news__content">{item.content}</span>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
