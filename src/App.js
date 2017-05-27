import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <ListProduct 
            data={this.state.listProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
