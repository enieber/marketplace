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
          }}
        >
        <Top />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#fbe1e0',
          }}>

          <ListProduct
            data={this.state.listProduct}
          />
        </div>
      </div>	
    );
  }
}

export default App;
