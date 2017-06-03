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
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#fbe1e0',
        }}
        >
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
