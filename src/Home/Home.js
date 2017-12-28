import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import weatherBalloon from '../images/weather_balloon.jpg';

class Home extends Component {
  render() {
    var weatherBalloonImgStyle = {
      maxHeight: "100%"
    };

    var huge = {
      height: "1000px",
      display: "block",
    }

    return (
      <div className="Home">
        <div className="Top">
          <Navigation />
          <Logo />
        </div>
        <div style={huge}>a</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
