function getProductLooks(productIds, productList) {
  return getProductsByIds(productIds, productList).map(element => {
    return element.category;
  });
}

function getLook(looks) {
  let equalCount = 0;
  looks.forEach((look, index) => {
    if (index > 0) {
      if (look == looks[--index]) {
        equalCount++;
      }
    }
  });
  if (looks.length - equalCount == 1) {
    return 'SINGLE LOOK';
  } else if (looks.length - equalCount == 2) {
    return 'DOUBLE LOOK';
  } else if (looks.length - equalCount === 3) {
    return 'TRIPLE LOOK';
  } else if (looks.length - equalCount > 3) {
    return 'FULL LOOK';
  }
}

function getDiscountPercentage(totalPrice, discountValue) {
  return (discountValue / totalPrice) * 100;
}

function getPrices(productIds, promotion, productList) {
  let sum = 0;
  let sumNoDiscount = 0;

  const hasLook = elem => {
    const newAr = elem.promotions.filter(look =>
      look.looks.includes(promotion)
    );

    let price = 0;

    newAr.forEach(elem => {
      price = elem.price;
    });
    return price;
  };

  const allProductsFormatted = getProductsByIds(productIds, productList).map(
    elem => {
      return {
        name: elem.id,
        category: elem.category,
        price: elem.regularPrice,
        discountPrice: hasLook(elem),
      };
    }
  );

  allProductsFormatted.forEach(elem => {
    sumNoDiscount += elem.price;
    if (elem.discountPrice === 0) {
      sum += elem.price;
    } else {
      sum += elem.discountPrice;
    }
  });
  const retorno = {
    totalPrice: sum,
    discountValue: sumNoDiscount - sum,
    discountPercentage: getDiscountPercentage(
      sumNoDiscount,
      sumNoDiscount - sum
    ),
  };
  return retorno;
}

function getProductsByIds(productIds, productList) {
  return productList.filter(product => {
    return productIds.includes(product.id);
  });
}

function getProducts(productIds, productList) {
  const productsMap = getProductsByIds(productIds, productList).map(element => {
    return { name: element.name, category: element.category };
  });
  return productsMap;
}

function buildFinalArray(productIds, productList) {
  const arrayProducts = { products: [] };
  const productsMap = getProducts(productIds, productList);

  const productLooks = getProductLooks(productIds, productList);
  const promotion = getLook(productLooks);
  const prices = getPrices(productIds, promotion, productList);

  arrayProducts.products = productsMap;
  arrayProducts.promotion = promotion;
  arrayProducts.totalPrice = prices.totalPrice.toFixed(2);
  arrayProducts.discountValue = prices.discountValue.toFixed(2);
  arrayProducts.discount = prices.discountPercentage.toFixed(2) + '%';
  return arrayProducts;
}

module.exports = {
  buildFinalArray,
};
