import ContentConstants from '../constants/content';

/*
 * Action Creators
 * https://redux.js.org/basics/actions#action-creators
 */

/**
 * @returns {{payload: *, type: string}}
 */
export const getProductsRequest = () => ({
  type: ContentConstants.GET_PRODUCTS_REQUEST,
});

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getProductsSuccess = products => {
  return {
    type: ContentConstants.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

/**
 * @param {object} payload
 * @returns {{payload: *, type: string}}
 */
export const getProductsFailed = ({ message }) => ({
  type: ContentConstants.GET_PRODUCTS_FAILED,
  payload: { message },
});
