import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import ContentBlock from '../ContentBlock/ContentBlock'
import Footer from '../Footer/Footer'
import weatherBalloon from '../images/weather_balloon.jpg';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div id="top">
          <Navigation />
          <Logo />
        </div>
        <div id="content">
          <ContentBlock title="Welcome">
            <p>I am a software engineering undergraduate student, currently
                studying Computer Science and Engineering at UCLA. This website
                is a collection of past and current projects that I am working
                on, as well as other things that I would like to showcase.</p>

            <br/>
            <p>This website is continuously under construction, so there may be
                some elements that are still under being worked on...</p>
          </ContentBlock>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
