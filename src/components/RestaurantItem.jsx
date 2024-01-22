import RestaurantHeader from './RestaurantHeader.jsx';
import RestaurantBody from './RestaurantBody.jsx';

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
