import React from 'react';
import './user-enter.scss';
import { NavLink } from 'react-router-dom';

const UserEnter = props => (
  <NavLink to={props.link}>
    <i className={props.icon} aria-hidden="true" />
    <span>{props.text}</span>
  </NavLink>
);

export default UserEnter;
