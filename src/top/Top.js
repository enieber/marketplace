import React, { PureComponent } from 'react';

class Top extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          height: 80,
          background: '#FFAAAA',
          marginBottom: 10,
        }}>
        <div>
          
        </div>
        <div
          style={{
            flex:2,            
          }}
        >
          <p
           style={{
             textAlign: 'center',
             color: '#463239',
             fontSize: '1.5em',
           }} > {`Marketplace `} {this.props.title || 'title'} </p>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Top;

