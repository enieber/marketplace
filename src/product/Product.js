import React, { PureComponent } from 'react';

class Product extends PureComponent {

  render() {
    return (
      <div
        style={{
          display: 'inline',
          border: '1px solid #ddd',
          margin: 10,
          textAlign: 'center',
          flexDirection: 'column',
       }}>
        <img
          src={this.props.image}
          style={{
           width: '80%',
          }}
        />
        <h2
          style={{
            alingText: 'center',
          }}>
          { this.props.name } 
        </h2>
        <p>
          { this.props.description }
        </p>
        <p>
        {
          `R$ ${this.props.price}` 
        }
        </p>        
        <button
          style={{
            border: '1px solid orange',
            backgroundColor: 'orange',
            color: 'white',
          }}>
          Add in Card
        </button>
      </div>
    );
  }
}

export default Product;

