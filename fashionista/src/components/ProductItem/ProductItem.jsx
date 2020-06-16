import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const linkToName = link => {
  return link.toUpperCase().split('-').join(' ');
};

const ProductItem = ({ data }) => {
  const { name } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(data.filter(product => product.name === linkToName(name)));
  }, [data, name]);

  console.log(product);
  return (
    <div className="single-product">
      <figure className="product__image">
        <img
          src={
            product.length > 0
              ? product[0].image
              : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'
          }
          alt="Produto "
          title=""
        />
      </figure>
      <div className="product__content">
        <h3 className="product__name">
          {product.length > 0 ? product[0].name : ''}
        </h3>
        <div className="product__pricing">
          <span className="product__price product__price--to">R$ 199,90</span>
          <span className="product__price product__price--installments">
            em até 3x R$ 66,63
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes__title">Escolha o tamanho</p>
          <div className="product__btn-group">
            <button type="button" className="product__filter ">
              P
              <canvas
                height="0"
                width="0"
                style={{
                  borderRadius: 'inherit',
                  height: 100,
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: 100,
                }}
              ></canvas>
            </button>
            <button type="button" className="product__filter ">
              M
              <canvas
                height="0"
                width="0"
                style={{
                  borderRadius: 'inherit',
                  height: 100,
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: 100,
                }}
              ></canvas>
            </button>
            <button type="button" className="product__filter ">
              G
              <canvas
                height="0"
                width="0"
                style={{
                  borderRadius: 'inherit',
                  height: 100,
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: 100,
                }}
              ></canvas>
            </button>
          </div>
        </div>
        <div className="product__actions">
          <button type="button" className="product__add-to-cart">
            Adicionar à Sacola
            <canvas
              height="0"
              width="0"
              style={{
                borderRadius: 'inherit',
                height: 100,
                left: 0,
                position: 'absolute',
                top: 0,
                width: 100,
              }}
            ></canvas>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
