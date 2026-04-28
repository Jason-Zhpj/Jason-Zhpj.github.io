import { profile } from '../data/profile';
import FadeInSection from './FadeInSection';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <FadeInSection>
          <h2 className="section__title">About Me</h2>
          <p className="about__bio">{profile.bio}</p>
          <p className="about__research">{profile.researchStatement}</p>
        </FadeInSection>
      </div>
    </section>
  );
}
