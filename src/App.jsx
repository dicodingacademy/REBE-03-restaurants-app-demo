import React from 'react';
import { getRestaurants } from './data/local';
import RestaurantList from './components/RestaurantList';

function App() {
  const restaurants = getRestaurants();

  return (
    <RestaurantList restaurants={restaurants} />
  );
}

export default App;
