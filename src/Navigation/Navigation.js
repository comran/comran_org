import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <a href="/" id="navigationSelected">
          comran.org
        </a>
        <a href="https://github.com/comran">
          Github
        </a>
        <a href="https://www.linkedin.com/in/comran-morshed-2ba947126/">
          LinkedIn
        </a>
        <a href="https://drive.google.com/file/d/18v529ZeW6B23Uyr8hntnofAvvMw6fF8h/view?usp=sharing">
          R&eacute;sum&eacute;
        </a>
      </div>
    );
  }
}

export default Navigation;
