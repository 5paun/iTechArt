import React from 'react';
import './add-product.scss';
import AddProductTd from './add-product__td/add-product__td';

const AddProduct = () => (
  <tbody id="add-user">
    <tr>
      <AddProductTd title="#" />
      <AddProductTd title="First Name" />
      <AddProductTd title="Last Name" />
      <AddProductTd title="Email" />
      <AddProductTd title="Remove request" />
      <AddProductTd title="Remove user" />
    </tr>
  </tbody>
);

export default AddProduct;
