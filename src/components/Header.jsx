import React, { useState } from 'react';

const Header = ({ scrollTo }) => {
  const [activeNav, setActiveNav] = useState('home');

  const handleNavClick = (section) => {
    setActiveNav(section);
    scrollTo(section);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <i className="fas fa-map-location-dot"></i>
          Chennai Tourism
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                className={activeNav === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home')}
              >
                🏠 Home
              </a>
            </li>
            <li>
              <a
                href="#places"
                className={activeNav === 'places' ? 'active' : ''}
                onClick={() => handleNavClick('places')}
              >
                📍 Places
              </a>
            </li>
            <li>
              <a
                href="#food"
                className={activeNav === 'food' ? 'active' : ''}
                onClick={() => handleNavClick('food')}
              >
                🍽️ Food
              </a>
            </li>
            <li>
              <a
                href="#sightseeing"
                className={activeNav === 'sightseeing' ? 'active' : ''}
                onClick={() => handleNavClick('sightseeing')}
              >
                🎭 Sightseeing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeNav === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                💬 Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
