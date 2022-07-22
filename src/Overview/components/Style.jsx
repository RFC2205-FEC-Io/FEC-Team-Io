import React from 'react';
import check_mark from '../../../dist/check_mark.png';
const Style = ({styles, styleClick, clicked, name}) => {
  var addStyle = () => {
    var placeholder = '/Smiley%20Shades.png';
      // ------------Sets the style gallery if there asre FEWER THAN 5 THUMNBAILS------------
    if (styles.length <= 4) {
      return styles.map ((style) => {
        if (style.name === name && clicked) {
          console.log('style:', style);
          // ------------IF THE THUMBNAIL URL IS NULL-----------
          if (!style.photos[0].url) {
            return (
              <div
                key={style.name}
                id='style-img'
                style={{backgroundImage: `url(${placeholder})`}}
                onClick={(event, name, styleObj, originalPrice, salePrice, img) => {
                  styleClick (event, style.name, style, style.original_price, style.sale_price, style.photos[0].url);
                }}
                >
              <img class='check-mark 'src={check_mark}></img>
              </div>
            );
          }
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
          // ------------IF THE THUMBNAIL URL IS NULL-----------
          if (!style.photos[0].url) {
            return (
              <div
                key={style.name}
                id='style-img'
                style={{backgroundImage: `url(${placeholder})`}}
                onClick={(event, name, styleObj, originalPrice, salePrice, img) => {
                  styleClick (event, style.name, style, style.original_price, style.sale_price, style.photos[0].url);
                }}
                >
              </div>
            );
          }
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
  } else {
        // ------------Sets the style gallery if there asre MORE THAN 5 THUMNBAILS------------
    var slicepoint = styles.length - 4;
    var styleThumbArr1 = styles.slice(0, 4);
    var styleThumbArr2 = styles.slice(-slicepoint, styles.length);
    var count = 0;
    return (
    <div id='split-styles-thumb'>
      <div id='thumb1'>
      {styleThumbArr1.map((style) => {
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
        key={style.name}
        id='style-img'
        style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}}
        onClick={(event, name, styleObj, originalPrice, salePrice, img) => {
          styleClick (event, style.name, style, style.original_price, style.sale_price, style.photos[0].url);
        }}
        >
      </div>
      );
    }
  })}
      </div>
      <div id='thumb2'>
        {console.log('styleThumbArr2:', styleThumbArr2, 'slicepoint:', slicepoint)}
      {styleThumbArr2.map((style) => {
        count++;
        console.log('count:', count);
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
        key={style.name}
        id='style-img'
        style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}}
        onClick={(event, name, styleObj, originalPrice, salePrice, img) => {
          styleClick (event, style.name, style, style.original_price, style.sale_price, style.photos[0].url);
        }}
        >
      </div>
      );
    }
  })}
      </div>
    </div>
    );
  }
}
  return (
    <div id='styles'>
      {addStyle()}
    </div>
  );
}

export default Style;
