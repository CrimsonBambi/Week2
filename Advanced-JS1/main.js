import components from './components.js';

const main = async () => {
  await components.getAllRestaurants();
  components.sortAlphabeticly();
  components.createTable();
};

main();