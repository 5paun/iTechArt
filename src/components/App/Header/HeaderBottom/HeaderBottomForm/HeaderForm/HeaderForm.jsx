import React from 'react';
import './HeaderForm.scss';

const HeaderForm = () => (
  <form action="/" className="header-form input-group">
    <input
      type="text"
      className="header-form__search form-control"
      placeholder="Поиск"
      aria-describedby="btnGroupAddon"
      aria-describedby="button-addon2"
    />
    <button className="header-form__submit button" type="button" id="button-addon2">
      <i className="fa fa-search" aria-hidden="true" />
    </button>
  </form>
);

export default HeaderForm;
