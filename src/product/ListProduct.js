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

  addCart(product) {
    console.log(product.id);
  }
  
  render() {
    return (
      <div
        style={{
          flexGrow:  3,
        }}>
        { this.state.listProduct.map(product => (
        <Product
          key={product.id}
          {...product} 
          addCart={() => this.addCart(product)}
          />)
        )}        
      </div>
    )
  }
}

export default ListProduct;

