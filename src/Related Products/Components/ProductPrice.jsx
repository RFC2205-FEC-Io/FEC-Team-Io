import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductPrice = ({ product }) => {
  console.log('product: ', product);
  if (product.styles[2].sale_price === null) {
    return (
      <span>
        {'$' + product.styles[2].original_price}
      </span>
    )
  } else {
    return (
      <span>
        <span style={{textDecoration: 'line-through', color: 'red'}}>
          {'$' + product.styles[2].original_price}
        </span>
        <span>
          {'      $' + product.styles[2].sale_price}
        </span>
      </span>
    )
  }




};


export default ProductPrice;