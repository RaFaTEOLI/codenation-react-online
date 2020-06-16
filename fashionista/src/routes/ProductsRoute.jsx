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

import Products from '../components/Products/Products';
import TopBar from '../components/TopBar/TopBar';

const { getProducts } = endpoints;

const ProductsRoute = () => {
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
        <Products data={content.products} />
      </Switch>
    </React.Fragment>
  );
};

export default ProductsRoute;
