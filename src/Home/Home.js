import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import ContentBlock from '../ContentBlock/ContentBlock'
import Showcase from '../Showcase/Showcase'
import AboutMe from '../AboutMe/AboutMe'
import ThingsIveWorkedOn from '../ThingsIveWorkedOn/ThingsIveWorkedOn'

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div id="top">
          <Navigation />
          <Logo />
        </div>
        <div id="content">
          <ContentBlock>
            <p>This website is a collection of past and current projects that I
                am working on, as well as other things that I would like to
                showcase.</p>
          </ContentBlock>
          <AboutMe />
          <ThingsIveWorkedOn />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
