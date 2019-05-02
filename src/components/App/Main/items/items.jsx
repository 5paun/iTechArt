import React from 'react';
import './Items.scss';
import Item from './Item/Item';
import ItemsAfter from './ItemsAfter/ItemsAfter';

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
