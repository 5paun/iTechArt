import React from 'react';
import './tab-content.scss';
import TheadDark from './thead-dark/thead-dark';

const TabContent = () => (
  <div className="tab-content" id="my-tab-content">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <table className="table users-table">
        <TheadDark />
        <tbody id="add-user" />
      </table>
    </div>
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <button
        className="btn btn-secondary add-user"
        data-toggle="modal"
        data-target="#addNewProduct"
      >
        <i className="fa fa-plus" />
        Add product
      </button>
      <table className="table products-table">
        <TheadDark />
        <tbody id="add-product" />
      </table>
    </div>
  </div>
);

export default TabContent;
