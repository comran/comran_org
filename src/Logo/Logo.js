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
    var weatherBalloonImgStyle = {
      display: "block",
      width: "100%",
      height: "100%",
      background: "url(" + weatherBalloonSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: "center " + this.state.backgroundOffset + "%",
      backgroundRepeat: "no-repeat",
      boxShadow: "0 12px 15px -15px #FF0000"
    };

    var titleStyle = {
      display: "block",
      position: "absolute",
      textAlign: "center",
      fontSize: "10vmin",
      fontWeight: "100",
      color: "#FFFFFF",
      left: "0",
      right: "0",
      top: "calc(50% + " + this.state.titleOffset + "vmin)",
      marginLeft: "auto",
      marginRight: "auto",
      textShadow: "0px 0px 2vmin #000",
    };

    var logoFadeStyle = {
      position: "absolute",
      top: "34vmin",
      width: "100%",
      height: "6.1vmin",
      background: "linear-gradient(rgba(240,240,240,0), rgba(240,240,240,0.8))"
    };

    return (
      <div id="Logo">
        <div id="weatherBalloon" style={weatherBalloonImgStyle} />
        <div id="title" style={titleStyle}>Comran Morshed</div>
        <div id="logoFade" style={logoFadeStyle} />
      </div>
    );
  }

  setLogoOffset() {
    const title = document.getElementById("title");
    var titleOffset = -1 * title.clientHeight / 2.0;
    titleOffset += window.scrollY / 2.0;
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
