import React, { Component } from 'react';
import Product from './Product';

class ProductItem extends Component {
  
  render() {
    return (
      <Product
        img={this.props.img}
        name={this.props.name}
        value={this.props.value}
        description={this.props.description}
      />
    )
  }
}

export default ProductItem;

