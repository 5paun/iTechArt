import React from 'react';
import './ItemContentButton.scss';

const ItemContentButton = () => (
  <button className="button item-content__button">
    +<i className="fa fa-shopping-cart" />
    Добавить в корзину
  </button>
);

export default ItemContentButton;
