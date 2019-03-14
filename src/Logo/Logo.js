import React, { Component } from 'react';
import './Logo.css';

import weatherBalloonSrc from '../images/weather_balloon.jpg';

class Logo extends Component {
  render() {
    var backgroundImgStyle = {
      background: "url(" + weatherBalloonSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: "center 30%",
    };

    return (
      <div className="Logo" ref="logo">
        <div className="LogoBackgroundImg" style={backgroundImgStyle} />
        <div className="LogoTitle">Comran Morshed</div>
      </div>
    );
  }
}

export default Logo;
