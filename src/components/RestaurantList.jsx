import React from 'react';
import PropTypes from 'prop-types';
import RestaurantItem, { RestaurantProps } from './RestaurantItem';

function RestaurantList({ restaurants }) {
  return (
    <section>
      <h1>Daftar Restoran</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            rating={restaurant.rating}
            city={restaurant.city}
            pictureUrl={restaurant.pictureUrl}
          />
        ))}
      </div>
    </section>
  );
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape(RestaurantProps),
  ).isRequired,
};

export default RestaurantList;
