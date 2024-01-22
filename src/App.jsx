import React from 'react';
import RestaurantList from './components/RestaurantList';
import useRestaurants from './hooks/useRestaurants';

function App() {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) {
    return (
      <p>Loading ...</p>
    );
  }

  if (error) {
    return (
      <p>error showing restaurant</p>
    );
  }

  return (
    <RestaurantList restaurants={restaurants} />
  );
}

export default App;
