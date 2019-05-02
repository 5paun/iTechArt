import React from 'react';
import './HeaderFormBuy.scss';

const HeaderFormBuy = props => (
  <form action="/" className="header-form-buy">
    <button className="header-form-buy__submit button" type="button">
      <i className="fa fa-shopping-cart" aria-hidden="true">
        <span>{props.price}</span>
      </i>
    </button>
  </form>
);

export default HeaderFormBuy;
