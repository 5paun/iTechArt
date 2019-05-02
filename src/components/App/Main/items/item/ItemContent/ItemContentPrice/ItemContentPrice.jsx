import React from 'react';
import './ItemContentPrice.scss';

const ItemContentPrice = props => (
  <span className="item-content__price">{props.price}</span>
);

export default ItemContentPrice;
