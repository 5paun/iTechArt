import React from 'react';
import './item.scss';
import ItemImg from './ItemImg/ItemImg';
import ItemContent from './ItemContent/ItemContent';

const Item = () => (
  <div className="item">
    <ItemImg />
    <ItemContent />
  </div>
);

export default Item;
