import React from 'react';
import RestaurantItem from './RestaurantItem.jsx';

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

export default RestaurantList;
