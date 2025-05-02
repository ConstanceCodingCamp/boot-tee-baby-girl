import { FaHome, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="app-footer">
      <Link to="/" aria-label="Home" className="footer-icon">
        <FaHome size={30} />
      </Link>
      <Link to="/about" aria-label="About" className="footer-icon">
        <FaQuestion size={30} />
      </Link>
    </footer>
  );
}

export default Footer;
