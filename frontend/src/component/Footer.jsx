import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="Helmets & Gears Logo" />
            <span>Helmets & Gears</span>
          </div>
          <p>Your trusted partner for premium safety equipment and protective gear.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon facebook"></a>
            <a href="#" aria-label="Twitter" className="social-icon twitter"></a>
            <a href="#" aria-label="Instagram" className="social-icon instagram"></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Shop All</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><span className="icon phone"></span> +1 (555) 123-4567</li>
            <li><span className="icon email"></span> info@helmetsandgears.com</li>
            <li><span className="icon location"></span> 123 Safety Street, Gear City, GC 12345</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Helmets & Gears. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
