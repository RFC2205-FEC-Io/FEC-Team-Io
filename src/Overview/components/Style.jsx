import React from 'react';

const Style = ({styles, styleClick}) => {
  return (
    <div id='styles'>
      {styles.map ((style) => {
        // console.log('Style.jsx style:', style.original_price, style.sale_price)
        return (
        <div key={style.name}>
          <img
          src={style.photos[0].thumbnail_url}
          id='style-img'
          onClick={(event, name, styleObj, originalPrice, salePrice) =>{
            styleClick (event, style.name, style, style.original_price, style.sale_price);
          }}
          ></img>
        </div>
        );
      })}
    </div>
  );
}

export default Style;