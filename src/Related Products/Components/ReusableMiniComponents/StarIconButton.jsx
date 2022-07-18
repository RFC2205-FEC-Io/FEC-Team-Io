import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarIconButton = (props) => {
    return (
      <span>
          <label>
            <button
              type="submit"
              name="compareProducts"
              onClick={() => props.CardClickHandler()}
            />
            <FaStar
            className="starIcon"
            color="#ffc107"
            size={20}/>
          </label>
      </span>
    )
};

export default StarIconButton;