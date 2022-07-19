const fs = require("fs"), PNG = require("pngjs").PNG;
const zeroStar = require('./Star_Rating000.png')
// export const qrtStar = require(./)
// export const halfStar = require(./)
// export const threeQrtStar = require(./)
// export const OneStar = require(./)
// export const TwoStar = require(./)
// export const ThreeStar = require(./)
// export const FourStar = require(./)
// export const FiveStar = require(./)
// console.log(zeroStar);
module.exports = zeroStar;


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

console.log('images:', images);