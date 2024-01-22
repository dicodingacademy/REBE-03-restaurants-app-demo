import React from 'react';

function RestaurantHeader({ name, pictureUrl, rating }) {
  return (
    <header className="restaurant-header">
      <span className="rating">{rating}</span>
      <img src={pictureUrl} alt={name} />
    </header>
  );
}

export default RestaurantHeader;
