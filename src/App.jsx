import React from 'react';
import { getRestaurants } from './data/local.js';
import RestaurantList from './components/RestaurantList.jsx';

function App() {
  const restaurants = getRestaurants();

  return (
    <RestaurantList restaurants={restaurants} />
  );
}

export default App;
