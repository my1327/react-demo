require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        {this.props.arr.map((name)=>{
          return <Item key={name} name={name}/>
        })}
      </div>
    );
  }
}

AppComponent.defaultProps = {
  arr:['蒋丞','顾飞']
};

class Item extends React.Component{
  render(){
    return(
      <p>hello,{this.props.name}</p>
    )
  }
}

export default AppComponent;
