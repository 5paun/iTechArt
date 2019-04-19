import React from 'react';
import './add-user.scss';
import AddUserTd from './add-user__td/add-user__td';

const AddUser = (props) => {
  const usersData = props.users.map(user => (
    <AddUserTd
      id={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      email={user.email}
      removeRequest={user.removeRequest}
    />
  ));

  return <tbody id="add-user">{usersData}</tbody>;
};

export default AddUser;
