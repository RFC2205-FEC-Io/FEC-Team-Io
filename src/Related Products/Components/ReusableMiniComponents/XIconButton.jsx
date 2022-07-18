import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const XIconButton = (props) => {
  return (
    <div>
        <label>
          <button
            type="submit"
            name="removeProduct"
            onClick={() => props.XIconButtonClickHandler()}
          />
          <FaTimesCircle
          className="XIcon"
          color="red"
          size={100}/>
        </label>
    </div>
  )
};

export default XIconButton;