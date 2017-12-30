import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <a href="/" id="navigationSelected">comran.org</a>
        <a href="https://github.com/comran">Github</a>
        <a href="https://www.linkedin.com/in/comran-morshed-2ba947126/">LinkedIn</a>
      </div>
    );
  }
}

export default Navigation;
