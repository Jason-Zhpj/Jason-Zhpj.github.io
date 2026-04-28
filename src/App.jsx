import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import News from './components/News';
import Honors from './components/Honors';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Publications />
        <News />
        <Honors />
        <Education />
      </main>
      <Footer />
    </>
  );
}
