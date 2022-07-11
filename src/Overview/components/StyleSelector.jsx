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
      console.log('GET sent, styles retreived!:', res.data.results);
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
      <div id='style-selector'>
        <h3>Style > Select a Style a style</h3>

          {/* {console.log('this.state.styles.results:', this.state.styles)} */}
          {this.state.styles.map ((style) => {
            // console.log('this is prouct in the map function:', style.photos[0].thumbnail_url);
            return (
            <div key={style.name}>
              {style.name}
              <img src={style.photos[0].thumbnail_url} id='style-img'></img>
            </div>
            );
          })}
        </div>
    );
  }
}

export default StyleSelector;