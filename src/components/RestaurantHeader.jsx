import React from 'react';
import PropTypes from 'prop-types';

function RestaurantHeader({ name, pictureUrl, rating }) {
  return (
    <header className="restaurant-header">
      <span className="rating">{rating}</span>
      <img src={pictureUrl} alt={name} />
    </header>
  );
}

RestaurantHeader.propTypes = {
  name: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default RestaurantHeader;
