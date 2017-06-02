import React, { Component } from 'react';

import ListProduct from './product/ListProduct';
import Top from './top/Top';

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
        <Top/>
        <ListProduct
          data={this.state.listProduct}
        />
      </div>
    );
  }
}

export default App;
