import React from 'react';
const axios = require('axios');
class StyleSelector extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      styles: []
    }
    // this.renderStyles = this.renderStyles.bind(this);
  }
  componentDidMount() {
    console.log('StyleSelector, mounted');
    const APItoken = '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';
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66642/styles',
      headers: {
        'Authorization': APItoken,
      }
    })
    .then((res) => {
      console.log('GET sent, products retreived!:', res.data.results);
      this.setState({
        styles: res.data.results
      });
    })
    .catch((err) => {
      throw err;
    });
  }


  render (props) {
    return (
      <div id='image-gallery'>
        <h2 onClick={this.renderStyles}>Style-Selector</h2>
        {console.log('this.state.styles.results:', this.state.styles)}
        {this.state.styles.map ((style) => {
          console.log('this is prouct in the map function:', style.name);
          return <div>{style.name}</div>;
        })}
      </div>
    );
  }
}

export default StyleSelector;