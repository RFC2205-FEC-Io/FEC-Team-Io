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


axios.defaults.headers.common['Authorization'] = API_KEY;


app.get("/reviews", (req, res) => {
  //console.log('req.query: ', req.query);
  const product_id = req.query.product_id;
  const count = req.query.count;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/?product_id=${product_id}&count=${count}`)
  .then(response => {
    // console.log('data: ', data);
    res.json(response.data);
  })
  .catch(err => {console.log('Error: ', err)})
})

app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});

/* == OVERVIEW == */
app.get('/overview', (req, res) => {
  // console.log('req.query:', req.query);
  const page = req.query.page;
  const count = req.query.count;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/?page=${page}&count=${count}`)
    .then((response) => {
      //console.log('GET sent, products retreived!:', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      throw err;
    });
})

app.get('/styles', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66642/styles')
    .then((response) => {
      //console.log('GET sent, Styles retreived!:', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      throw err;
    });
})


//----------------API Handlers and Requests for Related Products Widget---------------//

/*Handler and request for related product Ids*/
app.get('/related', (req, res) => {
  const product_id = req.query.product_id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${product_id}/related`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    throw err;
  });
})


/*Handler and request for products based on input ids */
app.get('/products', (req, res) => {
  const product_id = req.query.product_id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${product_id}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    throw err;
  });
})
/*WORKS! Responds with one product object*/

