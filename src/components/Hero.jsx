import { IconBrandGithub, IconMail, IconSchool } from '@tabler/icons-react';
import { profile } from '../data/profile';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner container">
        <div className="hero__text">
          <p className="hero__greeting">Hi, I am</p>
          <h1 className="hero__name">
            {profile.name.en} <span className="hero__name-zh">({profile.name.zh})</span>
          </h1>
          <p className="hero__tagline">
            {profile.title}, {profile.affiliation}
          </p>
          <p className="hero__research">
            {profile.research.join(' · ')}
          </p>
          <div className="hero__links">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="hero__icon-link" title="Email">
                <IconMail size={22} />
              </a>
            )}
            {profile.github && (
              <a
                href={`https://github.com/${profile.github}`}
                className="hero__icon-link"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <IconBrandGithub size={22} />
              </a>
            )}
            {profile.googleScholar && (
              <a
                href={profile.googleScholar}
                className="hero__icon-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Scholar"
              >
                <IconSchool size={22} />
              </a>
            )}
          </div>
        </div>
        <div className="hero__avatar-wrapper">
          <img className="hero__avatar" src={profile.avatar} alt={profile.name.en} />
        </div>
      </div>
    </section>
  );
}
