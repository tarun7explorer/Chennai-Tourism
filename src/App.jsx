import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PlaceCard from './components/PlaceCard';
import Footer from './components/Footer';
import { places } from './data/places';

function App() {
  const [activeCategory, setActiveCategory] = useState('mustVisit');
  const [filteredPlaces, setFilteredPlaces] = useState(places.mustVisit);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    filterPlaces(activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  const filterPlaces = (category, query) => {
    let data = places[category] || places.mustVisit;

    if (query.trim()) {
      data = data.filter(place =>
        place.name.toLowerCase().includes(query.toLowerCase()) ||
        (place.description && place.description.toLowerCase().includes(query.toLowerCase()))
      );
    }

    setFilteredPlaces(data);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategory = () => {
    if (activeCategory === 'mustVisit') return 'must-visit';
    if (activeCategory === 'foodSpots') return 'food';
    return 'sightseeing';
  };

  return (
    <div className="App">
      <Header scrollTo={scrollTo} />

      <Hero onSearchClick={handleSearch} />

      {/* PLACES SECTION */}
      <section className="section" id="places">
        <div className="section-title">
          <h2>✨ Explore Chennai</h2>
          <p>Discover the best destinations, food, and experiences in Chennai</p>
        </div>

        <div className="categories">
          <button
            className={`category-btn ${activeCategory === 'mustVisit' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('mustVisit')}
          >
            <i className="fas fa-star"></i> Must-Visit Places
          </button>
          <button
            className={`category-btn ${activeCategory === 'foodSpots' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('foodSpots')}
          >
            <i className="fas fa-utensils"></i> Food Spots
          </button>
          <button
            className={`category-btn ${activeCategory === 'sightseeing' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('sightseeing')}
          >
            <i className="fas fa-camera"></i> Sightseeing
          </button>
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="places-grid">
            {filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                type={getCategory()}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--gray-color)' }}>
              No places found matching your search. Try different keywords! 🔍
            </p>
          </div>
        )}
      </section>

      {/* STATS SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>50+</h3>
              <p>Amazing Places to Visit</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>100+</h3>
              <p>Food & Dining Options</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>25+</h3>
              <p>Tourist Attractions</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>10K+</h3>
              <p>Happy Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'var(--light-color)'
      }}>
        <div className="container">
          <h2>Ready to Explore Chennai?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            Start your journey with us and discover the hidden gems of Chennai. Create unforgettable memories with your family and friends!
          </p>
          <button className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Plan Your Trip
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
