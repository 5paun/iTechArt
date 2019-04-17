import React from 'react';
import './item-rating.scss';
import ItemRatingStars from './item-rating__stars/item-rating__stars';

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
