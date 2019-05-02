import React from 'react';
import './AddUserTd.scss';
import ItemsAfter from '../../../../Main/Items/ItemsAfter/ItemsAfter';

const AddUserTd = props => (
  <tr>
    <td scope="col">{props.id}</td>
    <td scope="col">{props.firstName}</td>
    <td scope="col">{props.lastName}</td>
    <td scope="col">{props.email}</td>
    <td scope="col">{props.removeRequest}</td>
    <td>
      <ItemsAfter value="Remove" />
    </td>
  </tr>
);

export default AddUserTd;
