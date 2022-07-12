require("dotenv").config();
const axios = require('axios');
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const API_KEY = process.env.REACT_APP_OVERVIEW_API_KEY;
console.log('API_KEY:', API_KEY);
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));


app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});

const header = {
  headers: {
    Authorization: API_KEY
  }
}
// console.log('header:', header);
/* == OVERVIEW == */
app.get('/overview', (req, res) => {
  // console.log('req.query:', req.query);
  const page = req.query.page;
  const count = req.query.count;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/??page=${page}&count=${count}`, header)
    .then((response) => {
      console.log('GET sent, products retreived!:', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      throw err;
    });
})

app.get('/styles', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66642/styles', header)
    .then((response) => {
      console.log('GET sent, Styles retreived!:', response.data);
      res.send(response.data);
    })
    .catch((err) => {
      throw err;
    });
})

module.exports = {API_KEY};

