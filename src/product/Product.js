import React, { PureComponent } from 'react';

class Product extends PureComponent {

  render() {
    return (
      <div>
        <img src={this.props.img} />
        <p> { this.props.name } </p>
        <p> { this.props.value } </p>
        <p> { this.props.description } </p>
      </div>
    );
  }
}

export default Product;

