import React from 'react';
import './popup-add-product.scss';

const PopupAddProduct = (props) => {
  const newProduct = React.createRef();

  const addProduct = () => {
    const title = newProduct.current.value;
    props.addProduct(title);
    newProduct.current.value = '';
  };

  return (
    <div
      className="modal fade"
      id="addNewProduct"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              + Add new product
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="inner-wrap">
                <label>
                  <span className="text-width">Title</span>
                  <input type="text" name="Title" ref={newProduct} />
                </label>
                <label>
                  <span className="text-width">Description</span>
                  <textarea name="Description" cols="30" rows="1" />
                </label>
                <label>
                  <span className="text-width">Price</span>
                  <input type="text" name="Price" />
                </label>
                <label>
                  <span className="text-width">Picture</span>
                  <input type="file" name="Picture" />
                </label>
                <label>
                  <span className="text-width">Tags</span>
                  <input type="text" name="Tags" />
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={addProduct}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAddProduct;
