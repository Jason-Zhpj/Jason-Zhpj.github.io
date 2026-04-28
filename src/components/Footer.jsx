import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Pujian Zhan. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}
