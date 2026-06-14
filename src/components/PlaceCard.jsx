import React, { useState } from 'react';

const PlaceCard = ({ place, type }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderRating = (rating) => {
    return (
      <div className="rating">
        <i className="fas fa-star"></i>
        <span>{rating}</span>
      </div>
    );
  };

  const getPlaceDetails = () => {
    if (type === 'food') {
      return {
        primaryInfo: place.cuisine,
        secondaryInfo: place.avgCost,
        specialty: place.speciality
      };
    } else if (type === 'sightseeing') {
      return {
        primaryInfo: place.category,
        secondaryInfo: place.entryFee,
        timing: place.timing
      };
    } else {
      return {
        primaryInfo: place.category,
        secondaryInfo: place.bestTime,
        highlights: place.highlights
      };
    }
  };

  const details = getPlaceDetails();

  return (
    <div className="card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="card-image">
        <span>{place.image}</span>
      </div>
      <div className="card-content">
        <div className="card-header">
          <div>
            <h3 className="card-title">{place.name}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
              {details.primaryInfo}
            </p>
          </div>
          {renderRating(place.rating)}
        </div>

        <p className="card-description">{place.description}</p>

        <div className="card-meta">
          <div className="meta-item">
            <i className="fas fa-map-marker"></i>
            <span>{place.location || 'Multiple locations'}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-info-circle"></i>
            <span>{place.reviews} reviews</span>
          </div>
        </div>

        {isExpanded && (
          <div style={{
            background: 'var(--light-color)',
            padding: '1rem',
            borderRadius: 'var(--border-radius)',
            marginBottom: '1rem',
            fontSize: '0.9rem'
          }}>
            <p><strong>📍 Location:</strong> {place.location || 'Multiple locations'}</p>
            {place.bestTime && <p><strong>📅 Best Time:</strong> {place.bestTime}</p>}
            {place.timing && <p><strong>⏰ Timing:</strong> {place.timing}</p>}
            {place.entryFee && <p><strong>💰 Entry Fee:</strong> {place.entryFee}</p>}
            {place.avgCost && <p><strong>💰 Avg Cost:</strong> {place.avgCost}</p>}
            {details.specialty && (
              <p><strong>🍴 Specialty:</strong> {details.specialty.join(', ')}</p>
            )}
            {details.highlights && (
              <p><strong>✨ Highlights:</strong> {details.highlights.join(', ')}</p>
            )}
          </div>
        )}

        <div className="card-footer">
          <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', fontWeight: '600' }}>
            Click for more info {isExpanded ? '▲' : '▼'}
          </span>
          <button className="view-btn">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
