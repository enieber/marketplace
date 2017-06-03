import React, { PureComponent } from 'react';

class Top extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          background: 'red',
          marginBottom: 10,
        }}>

        <p
         style={{
           flex: 2,
          textAlign: 'center', 
         }} > {`Marketplace `} {this.props.title || 'title'} </p>
      </div>
    );
  }
}

export default Top;

