import React from 'react';
import './ItemContent.scss';
import ItemContentText from './ItemContentText/ItemContentText';
import ItemRating from './ItemRating/ItemRating';
import ItemContentPrice from './ItemContentPrice/ItemContentPrice';
import ItemContentButton from './ItemContentButton/ItemContentButton';

const ItemContent = () => (
  <div className="item-content">
    <ItemContentText text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    <ItemRating />
    <ItemContentPrice price="9900 р." />
    <ItemContentButton />
  </div>
);

export default ItemContent;
