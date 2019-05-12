const LAPTOP_LOADED = 'LAPTOP_LOADED';

const laptopLoaded = newLaptop => ({
  type: LAPTOP_LOADED,
  payload: newLaptop,
});

export { laptopLoaded };
