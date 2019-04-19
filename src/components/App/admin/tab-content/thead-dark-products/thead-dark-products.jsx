import React from 'react';
import './thead-dark-products.scss';
import TheadDarkTh from '../thead-dark-users/thead-dark__th/thead-dark__th';

const TheadDarkProducts = () => (
  <thead className="thead-dark">
    <tr>
      <TheadDarkTh title="#" />
      <TheadDarkTh title="Title" />
      <TheadDarkTh title="Description" />
      <TheadDarkTh title="Price" />
      <TheadDarkTh title="Picture" />
      <TheadDarkTh title="Tags" />
      <TheadDarkTh title="Remove products" />
    </tr>
  </thead>
);

export default TheadDarkProducts;
