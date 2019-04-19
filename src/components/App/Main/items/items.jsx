import React from 'react';
import './items.scss';
import Item from './item/item';
import ItemsAfter from './items-after/items-after';

const Items = () => (
  <div className="items">
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <ItemsAfter value="load more" />
  </div>
);

export default Items;
