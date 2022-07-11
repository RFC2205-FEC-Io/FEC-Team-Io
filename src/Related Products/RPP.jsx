import React from 'react';
import './Components/RelatedProductStyles.css';
import InteractiveStarRating from './Components/InteractiveStarRating.jsx';
import StaticStarRating from './Components/StaticStarRating.jsx';

function RPP () {
  return (
    <div className="RPP">
      <StaticStarRating />
    </div>
  );
}

export default RPP;