// import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import ProductInfo from '/Users/lawrence/FEC-Team-Io/src/Overview/components/ProductInfo.jsx';
import Adapter from 'enzyme-adapter-react-15';
describe('first snapshot test', () => {
  it ('renders the AddToCart component correctly', () => {
    const wrapper = shallow(<ProductInfo/>);
    expect(wrapper).toMatchSnapshot();
  });
});

