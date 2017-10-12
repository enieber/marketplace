  import React, { Component } from 'react';

  import Button from './button';
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
	  <div>
	      <Button>Normal Button</Button>
	      <Button primary>Primary Button</Button>
	  </div>

          <ListProduct
            data={this.state.listProduct}
          />
        </div>
      </div>	
    );
  }
}

export default App;
