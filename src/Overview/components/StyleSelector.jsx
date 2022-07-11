import React from 'react';
import Style from './Style.jsx';
const axios = require('axios');
class StyleSelector extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      styles: [],
      styleClicked: false,
      styleName: ''
    }
    this.styleClickEvent = this.styleClickEvent.bind(this);
    this.styleHeader = this.styleHeader.bind(this);
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

  styleClickEvent (event, name) {
    event.preventDefault();
    console.log('name:', name);
    this.setState({
      styleClicked: true,
      styleName:name
    });
  }

  styleHeader(name) {
    if (!this.state.styleClicked) {
      return  (
        <div>
          <h3>Style > Select a Style a style</h3>
        </div>
      );
    } else {
      return  (
        <div>
          <h3>Style >{this.state.styleName}</h3>
        </div>
      );
    }
  }

  render (props) {
    return (
      <div id='style-selector'>
        {this.styleHeader()}
        <Style styles={this.state.styles} styleClick={this.styleClickEvent}/>
      </div>
    );
  }
}

export default StyleSelector;