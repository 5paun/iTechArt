import React from 'react';
import './add-product__td.scss';
import ItemsAfter from '../../../../main/items/items-after/items-after';

const AddProductTd = props => (
  <tr>
    <td scope="col">{props.id}</td>
    <td scope="col">{props.title}</td>
    <td scope="col">{props.description}</td>
    <td scope="col">{props.price}</td>
    <td scope="col">{props.picture}</td>
    <td scope="col">{props.tags}</td>
    <ItemsAfter value="Remove" />
  </tr>
);

export default AddProductTd;
