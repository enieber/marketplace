import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

describe('Product tests', () => {
  let product;

  beforeEach(() => {
    product = shallow(
        <Product
          name={'vela branca'}
          description={'test this component'}
          addCart={() => console.log('oi')}
          price={'200,00'}          
         />
    ); 
  })

  it('should have name with => vela branca', () => {
    expect(
      product
      .contains('vela branca')).toBe(true);
  });

  it('should have description => test this component', () => {
    expect(
      product
      .contains('test this component')).toBe(true);
  })

  it('should have price => 200,00', () => {
    expect(
      product
      .contains('R$ 200,00')).toBe(true);
  });
});

