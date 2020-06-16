import React from 'react';
import { Link } from 'react-router-dom';

import './ProductBox.css';

const Badge = props => {
  if (props.discount !== '') {
    return <span className="badge badge--discount">-{props.discount}</span>;
  } else {
    return false;
  }
};

const nameToLink = name => {
  return name.toLowerCase().split(' ').join('-');
};

const ProductBox = props => (
  <React.Fragment>
    <div className="products__box">
      <Link
        to={`/produto/${nameToLink(props.name)}`}
        className="categories__item__link"
      >
        <figure className="product__image">
          <Badge discount={props.discount_percentage} />
          <img
            src={
              props.image
                ? props.image
                : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'
            }
            alt={props.name}
            title={props.title}
          />
        </figure>
        <h3 className="product__name">{props.name}</h3>
        <div className="product__pricing">
          <span className="product__price product__price--from">
            {props.regular_price > props.actual_price
              ? props.regular_price
              : ''}
          </span>
          <span className="product__price product__price--to">
            {props.actual_price}
          </span>
        </div>
      </Link>
    </div>
  </React.Fragment>
);

export default ProductBox;
