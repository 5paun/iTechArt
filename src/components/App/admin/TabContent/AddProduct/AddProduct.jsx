import React from 'react';
import './AddProduct.scss';
import AddProductTd from './AddProductTd/AddProductTd';

const AddProduct = (props) => {
  const productsData = props.products.map(product => (
    <AddProductTd
      id={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      picture={product.picture}
      tags={product.tags}
    />
  ));

  return <tbody id="add-product">{productsData}</tbody>;
};

export default AddProduct;
