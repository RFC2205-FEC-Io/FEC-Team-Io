require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const cors = require("cors");
const API_KEY = process.env.REACT_APP_API_KEY;

console.log('API_KEY: ', API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));


app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});

//----------------API Requests for Related Products---------------//

/* Handler for related product IDs requests*/
app.get('/:product_id/related', (req, res) => {
  console.log('Incoming request: ', req);
  getRelatedProductIds()
  .then (function (idArray) {
    console.log('Related product id numbers acquired!')
    return res.json(idArray)
  })
  .catch (function (err) {
    console.log('Uh-oh! API request error: ' + err);
    return res.sendStatus(500);
  })
})

/*Request function for related product IDs requests*/
getRelatedProductIds = (productID) => {
  var config = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/'${productID}'/related`,
    headers: {
      'Authorization': API_KEY
    }
  };
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
};

