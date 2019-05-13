import React from 'react';
import './PopupAddProduct.scss';

const PopupAddProduct = (props) => {
  const newProductTitle = React.createRef();
  const newProductDescription = React.createRef();
  const newProductPrice = React.createRef();
  const newProductPicture = React.createRef();
  const newProductTags = React.createRef();

  const onAddProductItem = () => {
    const title = newProductTitle.current.value;
    const description = newProductDescription.current.value;
    const price = newProductPrice.current.value;
    const picture = newProductPicture.current.value;
    const tags = newProductTags.current.value;

    props.addProductItem(title, description, price, picture, tags);
    newProductTitle.current.value = '';
    newProductDescription.current.value = '';
    newProductPrice.current.value = '';
    newProductPicture.current.value = '';
    newProductTags.current.value = '';
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
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="inner-wrap">
                <label>
                  <span className="text-width">Title</span>
                  <input type="text" name="Title" ref={newProductTitle} />
                </label>
                <label>
                  <span className="text-width">Description</span>
                  <textarea
                    name="Description"
                    cols="30"
                    rows="1"
                    ref={newProductDescription}
                  />
                </label>
                <label>
                  <span className="text-width">Price</span>
                  <input type="text" name="Price" ref={newProductPrice} />
                </label>
                <label>
                  <span className="text-width">Picture</span>
                  <input type="text" name="Picture" ref={newProductPicture} />
                </label>
                <label>
                  <span className="text-width">Tags</span>
                  <input type="text" name="Tags" ref={newProductTags} />
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onAddProductItem}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAddProduct;
