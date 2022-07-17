import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComparisonModalStyles.css'
import StaticStarRating from '../ReusableMiniComponents/StaticStarRating.jsx';

function ComparisonModalTable() {
  return (
    <Table striped="columns" size="sm">
      <thead>
        <tr>
          <th>Air Mini's 250</th>
          <th>Characteristic</th>
          <th>Heir Force Ones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="Onesie_image.png" className="modal-image-wrapper" />
          </td>
          <td>Picture</td>
          <td>
            <img src="Smiley Shades.png" className="modal-image-wrapper" />
          </td>
        </tr>
        <tr>
          <td>Shoes</td>
          <td>Category</td>
          <td>Shoes</td>
        </tr>
        <tr>
          <td>
            <StaticStarRating averageRating={3.4} className="modal-image-wrapper"/>
          </td>
          <td>Average Overall Rating</td>
          <td>
          <StaticStarRating averageRating={1.4}/>
          </td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Price</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Fabric</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Buttons</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Lenses</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>UV Protection</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Frames</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ComparisonModalTable;