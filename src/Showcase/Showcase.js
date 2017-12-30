import React, { Component } from 'react';
import './Showcase.css';

class Showcase extends Component {
  state = {
    titleOffset: 0,
    backgroundOffset: 0
  }

  render() {
    var showcaseStyle = {
      background: this.props.colorInvert === "true"
            ? "#F0F0F0"
            : "#111111",
      color: this.props.colorInvert === "true"
            ? "#333"
            : "#FFF",
    }

    var backgroundImgStyle = {
      display: "block",
      width: "100%",
      height: "100%",
      background: "url(" + this.props.imgSrc + ")",
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

    var showcaseFadeCover = {
      position: "absolute",
      top: "0",
      width: "100%",
      height: "100%",
      zIndex: "2",
      background: "rgba(0,0,0,0.2)",
    };

    return (
      <div className="Showcase" style={showcaseStyle}>
        <div className="ShowcaseImageWrapper" ref="showcaseImageWrapper">
          <div style={backgroundImgStyle} />
          <div id="title" style={titleStyle}>{this.props.title}</div>
          <div id="showcaseCover" style={showcaseFadeCover} />
        </div>
        <div className="ShowcaseContent">
          {this.props.children}
        </div>
      </div>
    );
  }

  setShowcaseOffset() {
    const showcaseImageWrapperRect = this.refs.showcaseImageWrapper.getBoundingClientRect();
    if(showcaseImageWrapperRect.top > document.body.clientHeight
          || showcaseImageWrapperRect.bottom < 0) {
      return;
    }

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
