import React, { Component } from 'react';
import CoolBox from '../CoolBox/CoolBox';
import './App.css';

class App extends Component {

  state = {
    coolBoxList: []
  }

  componentDidMount() {
    this.newBoxDOM = React.createRef();
  }

  addCoolBoxClick = () => {
    
    // prepare to add a new box to the DOM
    // and make items easy to read
    const coolBoxes = this.state.coolBoxList;
  
    const newBox = <CoolBox key={ coolBoxes.length }
                            // TBD alter with offsetHeight
                            class={ 'coolBox' }
                            ref={ this.newBoxDOM }
                            text={ coolBoxes.length } />;


    // bla
    this.setState({
      coolBoxList: coolBoxes.concat( newBox )
    });

    this.calcPosition();
  }

  calcPosition = () => {
    console.log( 'gottenbydom: ', this.newBoxDOM );
    // why 
    //node.offsetHeight    
  }
  
  render() {    
    return (
      <div className="container">
        <button onClick={ this.addCoolBoxClick }>Add a Box!</button>
        <div>{ this.state.coolBoxList }</div>
      </div>
    );
  }
}

export default App;

/*

  constructor(props) {
    super(props);
    this.state = {
        height: null
    };
    this.columns = ['hello', 
                    'this is a bit more text', 
                    'this is a bit more text ... and even more'];
}

render(){
    return <div ref={(node) => this.calcHeight(node)}>
             {
                this.columns.map((column) => {
                    return <div style={{height: this.state.height}}>{column}</div>
                })
             }
           </div>;
}

calcHeight(node) {
    if (node && !this.state.height) {
            this.setState({
                height: node.offsetHeight
            });
  
*/