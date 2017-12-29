import React, { Component } from 'react';
import './Showcase.css';

import weatherBalloonSrc from '../images/weather_balloon.jpg';
import fadeSrc from '../images/fade.png';
import titleSrc from '../images/title.svg';

class Showcase extends Component {
  state = {
    titleOffset: 0,
    backgroundOffset: 0
  }

  render() {
    var weatherBalloonImgStyle = {
      display: "block",
      width: "100%",
      height: "100%",
      background: "url(" + this.props.imgSrc + ") #222",
      backgroundSize: "cover",
      backgroundPosition: "center " + this.state.backgroundOffset + "%",
      backgroundRepeat: "no-repeat",
    };

    var titleStyle = {
      display: "block",
      position: "absolute",
      textAlign: "center",
      fontSize: "6vmin",
      fontWeight: "100",
      color: "#FFFFFF",
      left: "0",
      right: "0",
      top: "calc(50% - 3.5vmin)",
      marginLeft: "auto",
      marginRight: "auto",
      zIndex: "3",
      textShadow: "0px 0px 2vmin #000",
    };

    var logoFadeCover = {
      position: "absolute",
      top: "0",
      width: "100%",
      height: "100%",
      zIndex: "2",
      background: "rgba(0,0,0,0.2)"
    };

    return (
      <div className="Showcase">
        <div className="ShowcaseFadeTop" />
        <div className="ShowcaseFadeBottomImg" />
        <div className="ShowcaseFadeBottom" />
        <div className="ShowcaseImageWrapper">
          <div style={weatherBalloonImgStyle} />
          <div id="title" style={titleStyle}>{this.props.title}</div>
          <div id="logoCover" style={logoFadeCover} />
        </div>
        <div className="ShowcaseContent">
          {this.props.children}
        </div>
      </div>
    );
  }

  setShowcaseOffset() {
    const title = document.getElementById("title");
    var titleOffset = -1 * title.clientHeight / 2.0;
    titleOffset += window.scrollY / 2.0;
    titleOffset /= document.body.clientHeight;
    titleOffset *= 100;

    var backgroundOffset = window.scrollY / 3.0;
    backgroundOffset /= document.body.clientHeight;
    backgroundOffset *= 100;

    this.setState({
      titleOffset: titleOffset,
      backgroundOffset: backgroundOffset,
    });
  }

  componentDidMount() {
    this.setShowcaseOffset();
    window.addEventListener('scroll', this.handleWindowChange.bind(this));
    window.addEventListener('resize', this.handleWindowChange.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowChange);
    window.removeEventListener('resize', this.handleWindowChange);
  }

  handleWindowChange(event) {
    this.setShowcaseOffset();
  }
}

export default Showcase;
