import React from 'react';
import './item-content.scss';
import ItemContentText from './item-content__text/item-content__text';
import ItemRating from './item-rating/item-rating';
import ItemContentPrice from './item-content__price/item-content__price';
import ItemContentButton from './item-content__button/item-content__button';

const ItemContent = () => (
  <div className="item-content">
    <ItemContentText text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    <ItemRating />
    <ItemContentPrice price="9900 р." />
    <ItemContentButton />
  </div>
);

export default ItemContent;
