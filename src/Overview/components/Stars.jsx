import React from 'react';
const axios = require('axios');
class Stars extends React.Component {
  constructor (props) {
    super (props);
      this.state = {
        reviews: []
      }
  }

  componentDidMount () {
    // console.log('Stars mounted!');
  }

  avgRating () {

  }

  render (props) {
    return (
      <div id='stars'>
        Stars
      </div>
    );
  }
}

export default Stars;