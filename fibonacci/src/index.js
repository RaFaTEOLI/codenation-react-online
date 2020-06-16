"use strict";

const fibonacci = () => {
  const fibonacci = [];

  let fbN = 0;
  for (let i = 0; fbN <= 350; i++) {
    if (i <= 1) {
      fibonacci.push(i);
    } else {
      fbN = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
      fibonacci.push(fbN);
    }
  }
  return fibonacci;
};

const isFibonnaci = num => {
  return fibonacci().includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
