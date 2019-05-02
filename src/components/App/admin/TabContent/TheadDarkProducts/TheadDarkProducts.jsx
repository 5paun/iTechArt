import React from 'react';
import './TheadDarkProducts.scss';
import TheadDarkTh from '../TheadDarkUsers/TheadDarkTh/TheadDarkTh';

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
