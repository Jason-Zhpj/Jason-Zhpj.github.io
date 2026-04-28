import { useState, useEffect } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import '../styles/Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'News', href: '#news' },
  { label: 'Honors', href: '#honors' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => ({
        id: item.href.slice(1),
        el: document.getElementById(item.href.slice(1)),
      }));

      const offset = 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#home" onClick={() => handleClick('#home')}>
          Pujian Zhan
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={`navbar__link ${active === item.href.slice(1) ? 'navbar__link--active' : ''}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
