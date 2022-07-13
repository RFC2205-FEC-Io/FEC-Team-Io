import React from 'react';
import { FaStar } from 'react-icons/Fa';

class StarIconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }
    this.StarIconButtonClickHandler = this.StarIconButtonClickHandler.bind(this);
  }
  StarIconButtonClickHandler (event) {
    console.log("Star Icon Button was clicked.")
   }


  render () {
    return (
      <div>
          <label>
            <button
              type="submit"
              name="compareProducts"
              onClick={() => this.StarIconButtonClickHandler()}
            />
            <FaStar
            className="starIcon"
            color="#ffc107"
            size={20}/>
          </label>
      </div>
    )
  };
};

export default StarIconButton;