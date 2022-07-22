import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComparisonModalStyles.css'
import TableStaticStarRating from './TableStaticStarRating.jsx';
import ProductPrice from '../ComparisonModalComponent/ComparisonModalTable.jsx';
import Feature from'./Feature.jsx';

function ComparisonModalTable(props) {
  return (
    <Table striped="columns" size="sm">
      <thead>
        <tr>
          <th>{props.currentProductCardInfo.name}</th>
          <th width="180">Characteristic</th>
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
          <td>
            <TableStaticStarRating averageRating={props.currentProductCardInfo.averageRating} />
          </td>
          <td>Average Overall Rating</td>
          <td>
          <TableStaticStarRating averageRating={props.relatedProductCardInfo.averageRating} className=".table-static-star-image-wrapper" />
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
        {/*<tr>
          <td colSpan={3}>Features</td>
        </tr>*/}
          {props.comparisonCardFeatures.map((feature, i) => {
            return (
              <Feature feature={feature} currentCardFeatures={props.currentCardFeatures}
              relatedCardFeatures={props.relatedCardFeatures} key={i} />
            )
            })}
        {/*<tr>
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
          </tr>*/}
      </tbody>
    </Table>
  );
}

export default ComparisonModalTable;