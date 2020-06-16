import React from 'react';
import PropTypes from 'prop-types';

import './Products.css';
import ProductBox from '../ProductBox/ProductBox';

let count = 0;

const Products = ({ data }) => (
  <React.Fragment>
    <section className="products">
      <div className="app__container">
        <div className="header__title">22 items</div>
        <div className="products__grid">
          {data.length &&
            data.map(product => (
              <ProductBox
                key={count++}
                image={product.image}
                name={product.name}
                title={product.title}
                regular_price={product.regular_price}
                actual_price={product.actual_price}
                discount_percentage={product.discount_percentage}
              />
            ))}
        </div>
      </div>
    </section>
  </React.Fragment>
);

Products.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Products;
