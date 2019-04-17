import React from 'react';
import './items-after.scss';

const ItemsAfter = () => (
  <div className="col items-after">
    <button type="button" className="btn btn-secondary items-after__load">
      <span
        className="spinner-border spinner-border-sm btn__loader"
        role="status"
        aria-hidden="true"
      />
      Load more
    </button>
  </div>
);

export default ItemsAfter;
