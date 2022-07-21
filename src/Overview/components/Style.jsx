import React from 'react';
import check_mark from '../../../dist/check_mark.png';
const Style = ({styles, styleClick, clicked, name}) => {
  var addStyle = () => {
    return styles.map ((style) => {
      if (style.name === name && clicked) {
        return (
          <div
            key={style.name}
            id='style-img'
            style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}}
            onClick={(event, name, styleObj, originalPrice, salePrice, img) => {
              styleClick (event, style.name, style, style.original_price, style.sale_price, style.photos[0].url);
            }}
            >
          <img class='check-mark 'src={check_mark}></img>
          </div>
          );
      } else {
      return (
        <div
          id='style-img'
          key={style.name}
          style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}}
          onClick={(event, name, styleObj, originalPrice, salePrice, img) => {
            styleClick (event, style.name, style, style.original_price, style.sale_price, style.photos[0].url);
          }}
          >
        </div>
        );
    }
  })
}
  return (
    <div id='styles'>
      {addStyle()}
    </div>
  );
}

export default Style;