import React from 'react';

const Style = ({styles, styleClick}) => {
  return (
    <div id='styles'>
      {/* {console.log('styles:', styles)} */}
      {styles.map ((style) => {
        return (
        <div key={style.name}>
          {style.name}
          <img
          src={style.photos[0].thumbnail_url}
          id='style-img'
          onClick={(event, name, styleObj) =>{
            styleClick (event, style.name, style);
          }}
          ></img>
        </div>
        );
      })}
    </div>
  );
}

export default Style;