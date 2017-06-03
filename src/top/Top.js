import React, { PureComponent } from 'react';
import FaBars from 'react-icons/lib/fa/bars';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

class Top extends PureComponent {
  render() {
    let styles = {
      container: {
        display: 'flex',
        height: 80,
        width: '100%',
        background: '#FFAAAA',
        flexDirection: 'row',
        justifyContent:'space-around',
      },
      icons: {
        alignSelf: 'center',
      },
      title: {
        alignSelf: 'center',
      }
    }
    return (
      <div
        style={styles.container}>
        <div
          style={styles.icons}>
          <FaBars size="30" color="#463239"/> 
        </div>
        <div
          style={styles.title}
        >
          <p
           style={{
             textAlign: 'center',
             color: '#463239',
             fontSize: '1.5em',
           }} > {`Marketplace `} {this.props.title || 'title'} </p>
        </div>
        <div
          style={styles.icons} 
         >      
         <FaShoppingCart size="40" color="#463239"/>
        </div>
      </div>
    );
  }
}

export default Top;

