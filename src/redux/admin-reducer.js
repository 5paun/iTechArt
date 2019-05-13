const ADD_PRODUCT_ITEM = 'ADD-PRODUCT-ITEM';

const adminReducer = (state, action) => {
  const { title, description, price, picture, tags } = action;
  switch (action.type) {
    case ADD_PRODUCT_ITEM:
      const newProduct = {
        id: 13,
        title,
        description,
        price,
        picture,
        tags,
      };
      state.products.push(newProduct);
      break;
    default:
      return state;
  }
};

export const addProductItemActionCreator = (
  title,
  description,
  price,
  picture,
  tags
) => ({
  type: ADD_PRODUCT_ITEM,
  title,
  description,
  price,
  picture,
  tags,
});

export default adminReducer;
