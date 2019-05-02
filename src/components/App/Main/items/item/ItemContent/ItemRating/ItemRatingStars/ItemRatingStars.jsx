import React from 'react';
import './ItemRatingStars.scss';
/* className="zero" */
const ItemRatingStars = props => (
  <div className="item-rating__stars" data-rat-val="0">
    {props.icon}
  </div>
);

export default ItemRatingStars;
