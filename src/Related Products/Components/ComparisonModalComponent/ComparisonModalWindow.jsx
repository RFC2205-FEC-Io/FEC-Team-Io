import React, { Fragment, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import ComparisonModalTable from './ComparisonModalTable.jsx';


function ComparisonModalWindow (props) {

  return (
    <Modal show={props.show} size="lg">
      <Modal.Header>
        <Modal.Title>
          Product Comparison
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <ComparisonModalTable />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.WindowClickHandler}>
          Close Button
        </Button>

      </Modal.Footer>
    </Modal>
  )
}

export default ComparisonModalWindow