import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <a href="/" id="navigationSelected">
          comran.org
        </a>
        <a href="http://www.google.com/recaptcha/mailhide/d?k=01Vqfh9rRP9NgC6WvGYH878A==&amp;c=IDRVpJ9YTVJikn_lyCgHrOrNyyfptjzB3GtfN43o_eo=" onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01Vqfh9rRP9NgC6WvGYH878A\x3d\x3d\x26c\x3dIDRVpJ9YTVJikn_lyCgHrOrNyyfptjzB3GtfN43o_eo\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;">
          Email
        </a>
        <a href="https://github.com/comran">
          Github
        </a>
        <a href="https://www.linkedin.com/in/comran-morshed-2ba947126/">
          LinkedIn
        </a>
      </div>
    );
  }
}

export default Navigation;
