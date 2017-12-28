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
      backgroundSize: "3024px 1382px",
      backgroundPosition: "center " + this.state.backgroundOffset + "px",
      backgroundRepeat: "no-repeat"
    };

    var titleStyle = {
      display: "block",
      width: "50vw",
      height: "7vw",
      background: "url(" + titleSrc + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      left: "0px",
      right: "0px",
      top: this.state.titleOffset + "px",
      bottom: "0px",
      marginLeft: "auto",
      marginRight: "auto",
    };

    var logoFadeStyle = {
      position: "absolute",
      top: "calc(30vw - 100px)",
      width: "100%",
      height: "100px",
      background: "url(" + fadeSrc + ")",
    };

    return (
      <div className="Logo">
        <div id="weatherBalloon" style={weatherBalloonImgStyle} />
        <div id="title" style={titleStyle} />
        <div id="logoFade" style={logoFadeStyle} />
      </div>
    );
  }

  setLogoOffset() {
    this.setState({
      titleOffset: 200 + window.scrollY / 2.0,
      backgroundOffset: -200 - 1 * window.scrollY / 2.5,
    });
  }

  componentDidMount() {
    console.log("MOUNT");
    this.setLogoOffset();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setLogoOffset();
  }
}

export default Logo;
