import React, { Fragment, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import ComparisonModalTable from './ComparisonModalTable.jsx';


const ComparisonModalWindow = (props) => {
  console.log('Props: ', props);
      return (
        <Modal show={props.show} size="lg">
          <Modal.Header>
            <Modal.Title>
              Product Comparison
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ComparisonModalTable
            currentProductCardInfo={props.currentProductCardInfo}
            relatedProductCardInfo={props.relatedProductCardInfo}
            comparisonCardFeatures={props.comparisonCardFeatures}
            currentCardFeatures={props.currentCardFeatures}
            relatedCardFeatures={props.relatedCardFeatures}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.WindowClickHandler}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
  )
};

export default ComparisonModalWindow