import React from 'react';
import RestaurantList from './components/RestaurantList';
import { getRestaurants } from './data/network';

function App() {
  const [restaurants, setRestaurants] = React.useState(() => []);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function fetchRestaurants() {
      try {
        const res = await getRestaurants();
        setRestaurants(res);
        setLoading(false);
      } catch {
        setError(true);
      }
    }

    fetchRestaurants();
  }, []);

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
