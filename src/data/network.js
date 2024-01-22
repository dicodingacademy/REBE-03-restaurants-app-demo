export async function getRestaurants() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();
  return restaurants.map((restaurant) => ({ ...restaurant, pictureUrl: `https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}` }));
}
