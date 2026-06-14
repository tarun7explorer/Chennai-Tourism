import React from 'react';

const Hero = ({ onSearchClick }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchClick(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>🌅 Explore Chennai</h1>
        <p>Discover the vibrant beaches, historic temples, delicious food, and amazing sightseeing spots</p>
        <button className="btn btn-primary" onClick={() => document.getElementById('places').scrollIntoView({ behavior: 'smooth' })}>
          <i className="fas fa-arrow-down"></i> Start Exploring
        </button>
      </div>
    </section>
  );
};

export default Hero;
