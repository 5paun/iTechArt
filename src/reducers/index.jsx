const LAPTOP_LOADED = 'LAPTOP_LOADED';

const initialState = {
  laptop: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LAPTOP_LOADED:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
