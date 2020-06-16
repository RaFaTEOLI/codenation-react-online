const controller = require('./controller');
//const { products } = require('./data/products');
const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
  return controller.buildFinalArray(ids, productsList);
}

//console.log(getShoppingCart([110, 130, 140, 230, 310, 330], products));

module.exports = { getShoppingCart };
