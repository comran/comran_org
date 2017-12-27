import React, { Component } from 'react';
import './Home.css';
import logo from '../graphics/vector_logo.svg';
import {
  Button
} from 'react-bootstrap';

class Home extends Component {
  state = {
    isSidebarShown: true,
    followDrone: true,
    mission: this.props.appState.missions[0] || null,
    commands: []
  }

  render() {
    return (
      <div className = "Home">
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.mission && nextProps.appState.missions.length > 0) {
      this.setState({mission: nextProps.appState.missions[0]});
    }
  }

  addGotoCommand(lat, lng) {
    this.refs.sidebar.refs.missionPlanner.addGotoCommand(lat, lng);
  }

  setHomeState = (newState) => {
    this.setState(newState);
  }

  followDrone = () => {
    this.setState({followDrone: true});
  }

  toggleSidebar = () => {
    this.setState({isSidebarShown: !this.state.isSidebarShown});
  }
}

export default Home;
