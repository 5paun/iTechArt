import React from 'react';
import './ItemRating.scss';
import ItemRatingStars from './ItemRatingStars/ItemRatingStars';

const ItemRating = () => (
  <div className="item-rating" data-product-id="1">
    <ItemRatingStars icon="&#xf8;" />
    <ItemRatingStars icon="&#9733;" />
    <ItemRatingStars icon="&#9733;" />
    <ItemRatingStars icon="&#9733;" />
    <ItemRatingStars icon="&#9733;" />
    <ItemRatingStars icon="&#9733;" />
  </div>
);

export default ItemRating;
