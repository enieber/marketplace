import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const Box = styled.div`
    display: 'flex';
    flex: 1;
    margin: 15;
    backgroundColor: '#fbe1e0';
    textAlign: 'center';

    ${media.lessThan('medium')`
	    flexDirection: 'column';
	    `}

    ${media.between('medium', 'large')`
	    flexDirection: 'row';
	    `}

    ${media.greaterThan('lager')`
	    background: 'red';
	    `}

`;

const Product = ({ addCart, image, price, name, description }) => (
      <Box>
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
      </Box>
);  

Product.propTypes = {
  addCart: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default Product;

