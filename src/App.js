import React, { Component } from 'react';
import ListProduct from './product/ListProduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
    }
  }

  render() {
    return (
      <div>
        <ListProduct
          data={this.state.listProduct}
        />
      </div>
    );
  }
}

export default App;
