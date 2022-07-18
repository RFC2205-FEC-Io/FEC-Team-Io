import React from "react";
import ReviewsList from "./ReviewsList";
import ReviewForm from "./ReviewForm.jsx";
import "./ReviewStyles.css"
import PropTypes from "prop-types";

function FormModal ({show, children, onClose}) {

    if (!show) {
      return null;
    }
    return (
      {children}
    )
  }

export default FormModal;