import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client/dist/socket.io.js';

import Home from './Home/Home';
import Images from './images/Images.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: 'Home', // Default is Home
      droneArmedStatus: "Offline",
      droneState: "",
      telemetry: null,
      interopBtnText: "Connect to Interop",
      interopBtnEnabled: true,
      moving_obstacles: [],
      stationary_obstacles: [],
      missions: []
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
          <Home appState={this.state}
                socketEmit={this.socketEmit}/>
        );
    }
  }

  setAppState = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        {this.renderSelection()}
      </div>
    );
  }

  componentDidMount() {
  }
}

export default App;
