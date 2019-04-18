import React from 'react';
import './add-user.scss';
import AddUserTd from './add-user__td/add-user__td';

const AddUser = () => (
  <tbody id="add-user">
    <tr>
      <AddUserTd title="#" />
      <AddUserTd title="First Name" />
      <AddUserTd title="Last Name" />
      <AddUserTd title="Email" />
      <AddUserTd title="Remove request" />
      <AddUserTd title="Remove user" />
    </tr>
  </tbody>
);

export default AddUser;
