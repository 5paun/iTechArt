import React from 'react';
import './item.scss';
import ItemImg from './item__img/item__img';
import ItemContent from './item-content/item-content';

const Item = () => (
  <div className="item">
    <ItemImg />
    <ItemContent />
  </div>
);

export default Item;
