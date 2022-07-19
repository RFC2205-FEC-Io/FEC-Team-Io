import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);