import React, { Component } from 'react';
import './Footer.css';

import uclaSrc from '../images/ucla.jpg';
import fadeFlippedSrc from '../images/fade_flipped.png';
import titleSrc from '../images/title.svg';

class Footer extends Component {
  state = {
    backgroundOffset: 0
  }

  render() {
    var uclaImgStyle = {
      display: "block",
      width: "100%",
      height: "100%",
      background: "#000",
      backgroundSize: "3024px 1382px",
      backgroundPosition: "center " + this.state.backgroundOffset + "px",
      backgroundRepeat: "no-repeat"
    };

    var logoFadeStyle = {
      width: "100%",
      height: "100px",
      position: "absolute",
      top: "0px",
      background: "url(" + fadeFlippedSrc + ")",
    };

    return (
      <div id="Footer">
        <div id="ucla" style={uclaImgStyle} />
        <div id="logoFade" style={logoFadeStyle} />
      </div>
    );
  }

  setLogoOffset() {
    const footer = document.getElementById("Footer");
    var bodyOffset = document.body.getBoundingClientRect().bottom;
    var footerOffset = footer.getBoundingClientRect()
      .top;
    var offset = footerOffset - bodyOffset;

    this.setState({
      backgroundOffset: -100 -1 * (window.scrollY - offset + 400) / 6.0,
    });
    console.log(this.state.backgroundOffset);
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

export default Footer;
