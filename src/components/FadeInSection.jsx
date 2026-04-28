import { useEffect, useRef, useState } from 'react';
import '../styles/FadeInSection.css';

export default function FadeInSection({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${visible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}
