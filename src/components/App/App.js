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


/*

Array.prototype.push() adds an element into original array and returns an integer 
which is its new array length.

Array.prototype.concat() returns a new array with concatenated element 
without even touching in original array. 
It's a shallow copy.

-----

You should use concat() function in place of push() because react does not work good 
with object mutability react people emphasize react developers to keep the state of immutable.

When you use concat() function it always returns a new object 
rather than mutating the same old object 
that is why you should never use push() function in react because 
push mutates the old object.

*/