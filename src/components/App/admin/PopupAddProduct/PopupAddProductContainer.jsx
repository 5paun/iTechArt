import React from 'react';
import { addProductItemActionCreator } from '../../../../redux/reducers/adminReducer';
import PopupAddProduct from './PopupAddProduct';

const PopupAddProductContainer = (props) => {
  const addProductItem = (title, description, price, picture, tags) => {
    props.store.dispatch(
      addProductItemActionCreator(title, description, price, picture, tags)
    );
  };

  return <PopupAddProduct addProductItem={addProductItem} />;
};

export default PopupAddProductContainer;
