import React from 'react';
import './item-rating__stars.scss';
/* className="zero" */
const ItemRatingStars = props => (
  <div className="item-rating__stars" data-rat-val="0">
    {props.icon}
  </div>
);

export default ItemRatingStars;
