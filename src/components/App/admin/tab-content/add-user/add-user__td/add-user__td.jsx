import React from 'react';
import './add-user__td.scss';
import ItemsAfter from '../../../../main/items/items-after/items-after';

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
