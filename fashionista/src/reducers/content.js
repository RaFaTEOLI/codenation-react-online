import ContentConstants from '../constants/content';

const contentInitialState = {
  products: [],
  errorMessage: '',
};

const contentReducer = (state = contentInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ContentConstants.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        products: [],
        status: 'running',
      };
    case ContentConstants.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        products: payload,
        status: 'success',
      };
    case ContentConstants.GET_PRODUCTS_FAILED:
      return {
        ...state,
        products: [],
        errorMessage: payload.message,
        status: 'error',
      };
    default:
      return state;
  }
};

export default contentReducer;
