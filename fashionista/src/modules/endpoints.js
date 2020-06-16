const defaultOptions = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  method: 'GET',
};

export const endpoints = {
  getProducts: {
    url: 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog',
    options: defaultOptions,
  },
};
