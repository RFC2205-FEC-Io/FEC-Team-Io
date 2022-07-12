// import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import ProductInfo from '/Users/lawrence/FEC-Team-Io/src/Overview/components/ProductInfo.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
describe('first snapshot test', () => {
  it ('renders the AddToCart component correctly', () => {
    const wrapper = shallow(<ProductInfo/>);
    expect(wrapper).toMatchSnapshot();
  });
});

