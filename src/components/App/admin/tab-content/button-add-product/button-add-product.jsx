import React from 'react';
import './button-add-product.scss';

const ButtonAddProduct = () => (
  <button
    className="btn btn-secondary add-product"
    data-toggle="modal"
    data-target="#addNewProduct"
  >
    <i className="fa fa-plus" />
    Add product
  </button>
);

export default ButtonAddProduct;
