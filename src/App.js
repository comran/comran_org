import React, { Component } from 'react';
import './App.css';

import Home from './Home/Home';
import Images from './images/Images.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: 'Home', // Default is Home
    };
  }

  renderSelection() {
    switch(this.state.optionSelected) {
      case "Images":
        return (
          <Images/>
        );
      case "Home":
      default:
        return (
          <Home />
        );
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderSelection()}
      </div>
    );
  }
}

export default App;
