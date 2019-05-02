import React from 'react';
import './AddProductTd.scss';
import ItemsAfter from '../../../../Main/items/ItemsAfter/ItemsAfter';

const AddProductTd = props => (
  <tr>
    <td scope="col">{props.id}</td>
    <td scope="col">{props.title}</td>
    <td scope="col">{props.description}</td>
    <td scope="col">{props.price}</td>
    <td scope="col">
      <img src={props.picture} alt="laptop" />
    </td>
    <td scope="col">{props.tags}</td>
    <td scope="col">
      <ItemsAfter value="Remove" />
    </td>
  </tr>
);

export default AddProductTd;
