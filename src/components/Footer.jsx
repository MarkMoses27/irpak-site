import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-about">
        <h4>About IRPAK</h4>
        <p>
          International Relief Programme Africa Kenya is dedicated to empowering communities
          through sustainable initiatives and humanitarian support.
        </p>
      </div>
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <h4>Connect</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/fopack.fopack.2025" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/irpakofficial" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/channel/IRPAKOfficial" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/company/irpak" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} IRPAK. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
