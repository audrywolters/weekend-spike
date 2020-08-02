import React, { Component } from 'react';
import CoolBox from '../CoolBox/CoolBox';
import './App.css';

class App extends Component {

  state = {
    coolBoxList: []
  }

  addCoolBoxClick = () => {
    
    const coolBoxes = this.state.coolBoxList;

    this.setState({
      coolBoxList: coolBoxes.concat( <CoolBox key={ coolBoxes.length } 
                                              text={ coolBoxes.length } /> )
    });
  }
  
  render() {    
    return (
      <>
        <button onClick={ this.addCoolBoxClick }>Add a Box!</button>
        <div>{ this.state.coolBoxList }</div>
      </>
    );
  }
}

export default App;
