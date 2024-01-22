import RestaurantHeader from './RestaurantHeader';
import RestaurantBody from './RestaurantBody';

function RestaurantItem({
  name, description, pictureUrl, city, rating,
}) {
  return (
    <article className="restaurant-item">
      <RestaurantHeader name={name} pictureUrl={pictureUrl} rating={rating} />
      <RestaurantBody name={name} description={description} city={city} />
    </article>
  );
}

export default RestaurantItem;
