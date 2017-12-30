import React, { Component } from 'react';
import './Footer.css';

import mountainSrc from '../images/mountain_bw.gif';

class Footer extends Component {
  render() {
    var mountainImgStyle = {
      display: "block",
      width: "100%",
      height: "30vmin",
      background: "url(" + mountainSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: "center 60%",
      backgroundRepeat: "no-repeat"
    };

    return (
      <div className="Footer">
        <div id="mountain" style={mountainImgStyle} />
        <div id="footerText">
          <p>&copy; {(new Date().getFullYear())} Comran Morshed</p>
        </div>
      </div>
    );
  }
}

export default Footer;
