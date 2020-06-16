import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import {
  getProductsFailed,
  getProductsRequest,
  getProductsSuccess,
} from '../actions';

import { endpoints } from '../modules/endpoints';
import { request } from '../modules/request';

import ProductItem from '../components/ProductItem/ProductItem';
import TopBar from '../components/TopBar/TopBar';

const { getProducts } = endpoints;

const ProductRoute = () => {
  const { auth, content } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getProducts.options,
    };

    dispatch(getProductsRequest());

    request(getProducts.url, requestOptions)
      .then(data => {
        dispatch(getProductsSuccess(data));
      })
      .catch(error => {
        dispatch(getProductsFailed(error));
        console.log('Erro:', error);
      });
  }, [auth, dispatch]);

  return (
    <React.Fragment>
      <TopBar />
      <Switch>
        <ProductItem data={content.products} />
      </Switch>
    </React.Fragment>
  );
};

export default ProductRoute;
