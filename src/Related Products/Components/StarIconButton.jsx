import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarIconButton = (props) => {
  return (
    <div>
        <label>
          <button
            type="submit"
            name="compareProducts"
            onClick={() => props.StarIconButtonClickHandler()}
          />
          <FaStar
          className="starIcon"
          color="#ffc107"
          size={100}/>
        </label>
    </div>
  )
};

export default StarIconButton;