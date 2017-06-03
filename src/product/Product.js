import React, { PureComponent } from 'react';

class Product extends PureComponent {

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: 15,
          backgroundColor: '#fbe1e0',  
          textAlign: 'center',
          flexDirection: 'column',
       }}>
        <div
          style={{            
           justifyContent: 'center',
          }}
        >
        <img
          src={this.props.image}
          style={{
           width: '80%',
          }}
        />
        </div>
        <h2
          style={{
            alingText: 'center',
            color: '#463239',
          }}>
          { this.props.name } 
        </h2>
        <p
          style={{
            color: '#463239',
          }}>
          { this.props.description }
        </p>
        <p
          style={{
            color: '#463239',
          }}>
        {
          `R$ ${this.props.price}` 
        }
        </p>        
        <div
          style={{            
           justifyContent: 'center',
          }}
        >
 
        <button
          style={{
            width: '80%',
            height: '2.5em',
            border: 'none',
            backgroundColor: '#ed6b86',
            color: 'white',
          }}>
          Buy
        </button>
        </div>
      </div>
    );
  }
}

export default Product;

