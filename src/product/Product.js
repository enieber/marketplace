import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ addCart, image, price, name, description }) => (
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
          src={image}
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
          { name } 
        </h2>
        <p
          style={{
            color: '#463239',
          }}>
          { description }
        </p>
        <p
          style={{
            color: '#463239',
            }}>
            {
              `R$ ${ price }` 
          }
        </p>        
        <div
          style={{            
           justifyContent: 'center',
          }}
        >
 
        <button
          onClick={() => addCart()}
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

Product.propTypes = {
  addCart: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default Product;

