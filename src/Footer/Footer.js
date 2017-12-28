import React, { Component } from 'react';
import './Footer.css';

import mountainSrc from '../images/mountain_bw.gif';
import fadeFlippedSrc from '../images/fade_flipped.png';
import titleSrc from '../images/title.svg';

class Footer extends Component {
  render() {
    var mountainImgStyle = {
      display: "block",
      width: "100%",
      height: "400px",
      background: "url(" + mountainSrc + ")",
      backgroundSize: "3754px 1276px",
      backgroundPosition: "center calc(100% + 300px)",
      backgroundRepeat: "no-repeat"
    };

    return (
      <div id="Footer">
        <div id="mountain" style={mountainImgStyle} />
        <div id="footerText">
          <p>&copy; {(new Date().getFullYear())} Comran Morshed</p>
        </div>
      </div>
    );
  }
}

export default Footer;
