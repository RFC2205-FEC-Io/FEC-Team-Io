import React from 'react';

class StaticStarRating extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rating: 3.7
    }
  }
  //const [rating, setRating] = useState(null);
  render () {
    if (this.state.rating === 0) {
      return (
        <div>
           <img src="Star_Rating000.png" width="270px" height="54px"></img>
        </div>
      )
    } else if (this.state.rating > 0 && this.state.rating <= 0.25) {
      return (
        <div>
          <img src="Star_Rating025.png" width="270px" height="54px"></img>
        </div>
      )
    } else if (this.state.rating > 0.25 && this.state.rating <= 0.50) {
      return (
        <div>
          <img src="Star_Rating050.png" width="270px" height="54px"></img>
        </div>
      )
   } else if (this.state.rating > 0.50 && this.state.rating <= 0.75) {
    return (
      <div>
        <img src="Star_Rating075.png" width="270px" height="54px"></img>
      </div>
    )
   }  else if (this.state.rating > 0.75 && this.state.rating <= 1.00) {
    return (
      <div>
        <img src="Star_Rating100.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 1.00 && this.state.rating <= 1.25) {
    return (
      <div>
        <img src="Star_Rating125.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 1.25 && this.state.rating <= 1.50) {
    return (
      <div>
        <img src="Star_Rating150.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 1.50 && this.state.rating <= 1.75) {
    return (
      <div>
        <img src="Star_Rating175.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 1.75 && this.state.rating <= 2.00) {
    return (
      <div>
        <img src="Star_Rating200.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 2.00 && this.state.rating <= 2.25) {
    return (
      <div>
        <img src="Star_Rating225.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 2.25 && this.state.rating <= 2.50) {
    return (
      <div>
        <img src="Star_Rating250.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 2.50 && this.state.rating <= 2.75) {
    return (
      <div>
        <img src="Star_Rating275.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 2.75 && this.state.rating <= 3.00) {
    return (
      <div>
        <img src="Star_Rating300.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 3.00 && this.state.rating <= 3.25) {
    return (
      <div>
        <img src="Star_Rating325.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 3.25 && this.state.rating <= 3.50) {
    return (
      <div>
        <img src="Star_Rating350.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 3.50 && this.state.rating <= 3.75) {
    return (
      <div>
        <img src="Star_Rating375.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 3.75 && this.state.rating <= 4.00) {
    return (
      <div>
        <img src="Star_Rating400.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 4.00 && this.state.rating <= 4.25) {
    return (
      <div>
        <img src="Star_Rating425.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 4.25 && this.state.rating <= 4.50) {
    return (
      <div>
        <img src="Star_Rating450.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 4.50 && this.state.rating <= 4.75) {
    return (
      <div>
        <img src="Star_Rating475.png" width="270px" height="54px"></img>
      </div>
    )
   } else if (this.state.rating > 4.75 && this.state.rating <= 5.00) {
    return (
      <div>
        <img src="Star_Rating500.png" width="270px" height="54px"></img>
      </div>
    )
   };
  };
};

export default StaticStarRating