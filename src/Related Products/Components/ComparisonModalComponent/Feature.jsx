import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComparisonModalStyles.css'

function Feature (props) {
  return (
    <tr>
      <td>{props.currentCardFeatures[props.feature] || 'Not Applicable'}</td>
      <td>{props.feature}</td>
      <td>{props.relatedCardFeatures[props.feature] || 'Not Applicable'}</td>
    </tr>

  )
}
export default Feature;