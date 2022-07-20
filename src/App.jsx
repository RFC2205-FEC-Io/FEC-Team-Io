import React, {useState} from "react";
import StyleSelector from './Overview/components/StyleSelector.jsx';
import ReviewsApp from "./Reviews/ReviewsApp.jsx"
import RPP from "./Related Products/RPP.jsx";

function App (props) {
  const [productId, setProductId] = useState(66646);
    return (
      <div>
        <StyleSelector product_id={productId}/>
        {/* <RPP product_id={productId}/>
        <ReviewsApp product_id={productId}/> */}
      </div>
    );
}

export default App;
