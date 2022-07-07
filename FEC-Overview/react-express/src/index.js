import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
