import React from 'react';
import './Item.scss';
import ItemImg from './ItemImg/ItemImg';
import ItemContent from './ItemContent/ItemContent';

const Item = () => (
  <div className="item">
    <ItemImg />
    <ItemContent />
  </div>
);

export default Item;
