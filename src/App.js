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
        <div>
          <Top />
        </div>
        <div>
          <ListProduct
            data={this.state.listProduct}
          />
        </div>
      </div>	
    );
  }
}

export default App;
