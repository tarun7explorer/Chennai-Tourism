import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Chennai Tourism</h3>
          <p>Your ultimate guide to exploring the vibrant city of Chennai. Discover amazing places, delicious food, and unforgettable experiences.</p>
          <div className="social-links">
            <a href="#facebook" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter" title="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#instagram" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#youtube" title="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#places">Popular Places</a></li>
            <li><a href="#food">Food Recommendations</a></li>
            <li><a href="#sightseeing">Sightseeing</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Chennai, Tamil Nadu, India
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 98XXXXXX00
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@chennaitorism.com
          </p>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Most tourist spots are open daily from morning to evening.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Chennai Tourism Guide. Made with ❤️ for Chennai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
