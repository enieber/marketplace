import React, { PureComponent } from 'react';

class Product extends PureComponent {

  render() {
    return (
      <div>
       <img src={this.props.image} />
       <p> { this.props.name } </p>
       <p> { this.props.price } </p>
       <p> { this.props.tag } </p>
      </div>
    );
  }
}

export default Product;

