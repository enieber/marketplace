import React, { Component } from 'react';
import Product from './Product';

class ListProduct extends Component {
   constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
    };
  }

  componentWillMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('http://enieber.com.br/product.json')
    .then(result => result.json())
    .then(json => {
      this.setState({
        listProduct: json
      });
    })
    .catch(err => console.warn(err))

  }

  render() {
    return (
      <div>
        { this.state.listProduct.map(product => (
        <Product
          key={product.id}
          {...product} 
          />)
        )}        
      </div>
    )
  }
}

export default ListProduct;

