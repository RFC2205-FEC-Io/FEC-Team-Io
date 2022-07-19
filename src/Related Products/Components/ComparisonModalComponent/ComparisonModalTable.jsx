import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComparisonModalStyles.css'
import TableStaticStarRating from './TableStaticStarRating.jsx';
import ProductPrice from '../ComparisonModalComponent/ComparisonModalTable.jsx';

function ComparisonModalTable(props) {
  console.log('Props: ', props)
  return (
    <Table striped="columns" size="sm">
      <thead>
        <tr>
          <th>{props.currentProductCardInfo.name}</th>
          <th>Characteristic</th>
          <th>{props.relatedProductCardInfo.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={props.currentProductCardInfo.styles[0].photos[0].thumbnail_url || "Smiley Shades.png"} className="modal-image-wrapper" />
          </td>
          <td>Picture</td>
          <td>
          <img src={props.relatedProductCardInfo.styles[0].photos[0].thumbnail_url || "Smiley Shades.png"} className="modal-image-wrapper" />
          </td>
        </tr>
        <tr>
          <td>{props.currentProductCardInfo.category}</td>
          <td>Category</td>
          <td>{props.relatedProductCardInfo.category}</td>
        </tr>
        <tr>
          <td>{props.currentProductCardInfo.default_price}</td>
          <td>Price</td>
          <td>{props.relatedProductCardInfo.default_price}</td>
        </tr>
        <tr>
          <td>Canvas</td>
          <td>Fabric</td>
          <td>Leather</td>
        </tr>
        <tr>
          <td>Brass</td>
          <td>Buttons</td>
          <td>Pearl</td>
        </tr>
        <tr>
          <td>Not applicable</td>
          <td>Lenses</td>
          <td>Polarizing</td>
        </tr>
        <tr>
          <td>50 spf</td>
          <td>UV Protection</td>
          <td>25 spf</td>
        </tr>
        <tr>
          <td>Blue</td>
          <td>Frames</td>
          <td>Gold</td>
        </tr>
        <tr>
          <td colSpan={3}>Average Ratings</td>
        </tr>
        <tr>
          <td>
            <TableStaticStarRating averageRating={props.currentProductCardInfo.averageRating} />
          </td>
          <td>Average Overall Rating</td>
          <td>
          <TableStaticStarRating averageRating={props.relatedProductCardInfo.averageRating} className=".table-static-star-image-wrapper" />
          </td>
        </tr>
        <tr>
          <td>
            <TableStaticStarRating averageRating={1.2} className=".table-static-star-image-wrapper"/>
          </td>
          <td>Size</td>
          <td>
          <TableStaticStarRating averageRating={3.3} className=".table-static-star-image-wrapper" />
          </td>
        </tr>
        <tr>
          <td>
            <TableStaticStarRating averageRating={2.7} className=".table-static-star-image-wrapper"/>
          </td>
          <td>Width</td>
          <td>
          <TableStaticStarRating averageRating={.5} className=".table-static-star-image-wrapper" />
          </td>
        </tr>
        <tr>
          <td>
            <TableStaticStarRating averageRating={2.4} className=".table-static-star-image-wrapper"/>
          </td>
          <td>Comfort</td>
          <td>
          <TableStaticStarRating averageRating={3.7} className=".table-static-star-image-wrapper" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ComparisonModalTable;