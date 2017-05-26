import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ListProduct extends Component {
  
  render() {
    return (
      <div>
        <ul>
          <li>
            <ProductItem
              img={this.props.img}
              name={this.props.name}
              value={this.props.value}
              description={this.props.description}
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default ListProduct;

