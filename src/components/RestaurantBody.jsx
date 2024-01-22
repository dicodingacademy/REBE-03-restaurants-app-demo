import React from 'react';
import PropTypes from 'prop-types';

function RestaurantBody({ name, description, city }) {
  return (
    <section className="restaurant-body">
      <h2 className="restaurant-name">{name}</h2>
      <p className="restaurant-city">{city}</p>
      <p className="restaurant-description">{description}</p>
    </section>
  );
}

RestaurantBody.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default RestaurantBody;
