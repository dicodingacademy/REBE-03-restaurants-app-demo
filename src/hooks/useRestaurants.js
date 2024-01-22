import React from 'react';
import { getRestaurants } from '../data/network';

function useRestaurants() {
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

  return { restaurants, loading, error };
}

export default useRestaurants;
