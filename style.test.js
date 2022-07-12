// import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import PrductInfo from '../../components/ProductInfo.jsx';

describe('first snapshot test', () => {
  it ('renders the AddToCart component correctly', () => {
    const wrapper = shallow(<AddToCart/>);
    expect(wrapper).toMatchSnapshot();
  });
});

// import renderer from 'react-test-renderer';
// import PrductInfo from '../../components/ProductInfo.jsx';

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<AddToCart/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });