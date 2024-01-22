function RestaurantBody({ name, description, city }) {
  return (
    <section className="restaurant-body">
      <h2 className="restaurant-name">{name}</h2>
      <p className="restaurant-city">{city}</p>
      <p className="restaurant-description">{description}</p>
    </section>
  );
}

export default RestaurantBody;
