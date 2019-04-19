import React from 'react';
import './items-after.scss';

const ItemsAfter = props => (
  <div className="col items-after">
    <button
      type="button"
      className="btn btn-secondary items-after__load"
      onClick={() => {
        alert('fdfdf');
      }}
    >
      <span
        className="spinner-border spinner-border-sm btn__loader"
        role="status"
        aria-hidden="true"
      />
      {props.value}
    </button>
  </div>
);

export default ItemsAfter;
