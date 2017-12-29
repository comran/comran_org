import React, { Component } from 'react';
import './Logo.css';

import weatherBalloonSrc from '../images/weather_balloon.jpg';
import fadeSrc from '../images/fade.png';
import titleSrc from '../images/title.svg';

class Logo extends Component {
  state = {
    titleOffset: 0,
    backgroundOffset: 0
  }

  render() {
    var backgroundImgStyle = {
      background: "url(" + weatherBalloonSrc + ")",
      backgroundPosition: "center " + this.state.backgroundOffset + "%",
      backgroundSize: "cover",
      filter: "grayscale(" + this.state.titleGrayscale + "%)",
    };

    var logoTitleStyle = {
      top: this.state.titleOffset + "vh",
      bottom: (-1 * this.state.titleOffset) + "vh",
    };

    return (
      <div className="Logo">
        <div className="LogoBackgroundImg" style={backgroundImgStyle} />
        <div className="LogoTitle" style={logoTitleStyle}>Comran Morshed</div>
        <div className="LogoFade" />
      </div>
    );
  }

  setLogoOffset() {
    const title = document.getElementById("title");
    var titleOffset = window.scrollY / 2.0;
    titleOffset /= document.body.clientHeight;
    titleOffset *= 100;

    var backgroundOffset = window.scrollY / 2.0;
    backgroundOffset /= document.body.clientHeight;
    backgroundOffset *= 100;
    backgroundOffset += 30;

    this.setState({
      titleOffset: titleOffset,
      backgroundOffset: backgroundOffset,
    });

    this.state.titleGrayscale = Math.min(window.scrollY / 2.0, 100.0)
  }

  componentDidMount() {
    this.setLogoOffset();
    window.addEventListener('scroll', this.handleWindowChange.bind(this));
    window.addEventListener('resize', this.handleWindowChange.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowChange);
    window.removeEventListener('resize', this.handleWindowChange);
  }

  handleWindowChange(event) {
    this.setLogoOffset();
  }
}

export default Logo;
