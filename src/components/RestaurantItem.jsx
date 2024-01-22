import React from 'react';
import PropTypes from 'prop-types';
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

export const RestaurantProps = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

RestaurantItem.propTypes = RestaurantProps;

export default RestaurantItem;
