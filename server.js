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

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/dist/index.html"));
// });

axios.defaults.headers.common['Authorization'] = API_KEY;


app.get("/reviews", (req, res) => {
  // console.log('req.query: ', req.query);
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
