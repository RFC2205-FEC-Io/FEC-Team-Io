import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductPrice = ({ product }) => {
  if (product.styles[0].sale_price === null) {
    return (
      <span>
        {'$' + product.styles[0].original_price}
      </span>
    )
  } else {
    return (
      <span>
        <span style={{color: 'red'}}>
          {'$' + product.styles[0].sale_price}
        </span>
        <span style={{textDecoration: 'line-through'}}>
          {'         $' + product.styles[0].original_price}
        </span>
      </span>
    )
  }
};


export default ProductPrice;