import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import ContentBlock from '../ContentBlock/ContentBlock'
import Showcase from '../Showcase/Showcase'

import weatherBalloonSrc from '../images/ucla.jpg';
import uclaLogo from '../images/ucla_logo.svg';

class Home extends Component {
  render() {
    var uclaLogoStyle = {
      height: "10vh",
      marginBottom: "3vh",
    };

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
          <Showcase title="About Me" imgSrc={weatherBalloonSrc}>
            <table>
              <tr>
                <td>
                  <h1>Student</h1>
                </td>
                <td>
                  <h1>Interests</h1>
                </td>
                <td>
                  <h1>Fluency</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={uclaLogo} style={uclaLogoStyle} />
                  <h2>University of California, Los Angeles</h2>
                  <h3>Computer Science and Engineering</h3>
                  <h3>2020 Expected Graduation</h3>
                  <br/>
                  <h2>Mountain View High School</h2>
                  <h3>2016 Graduation</h3>
                </td>
                <td>
                  <h2>Drones and Robotics</h2>
                  <h3>Control System Architecture</h3>
                  <h3>Computer Aided Design</h3>
                  <h3>Test-driven Development</h3>
                  <br/>
                  <h2>Computer Vision</h2>
                  <h3>Convolutional Neural Networks</h3>
                  <h3>OpenCV/Tensorflow</h3>
                  <br/>
                  <h2>Electrical Engineering</h2>
                  <h3>Circuit Design</h3>
                  <h3>Testing and Analysis</h3>
                </td>
                <td>
                  <h2>Core Languages</h2>
                  <h3>C/C++, Python, and Java</h3>
                  <br/>
                  <h2>Web Development</h2>
                  <h3>HTML/CSS/PHP/Javascript, React</h3>
                  <br/>
                  <h2>Mobile Application Development</h2>
                  <h3>Xcode (Swift)</h3>
                  <h3>Android Studio (Java)</h3>
                  <br/>
                  <h2>Software and Tools</h2>
                  <h3>Git, Subversion</h3>
                  <h3>Solidworks, Blender</h3>
                  <h3>Adobe Photoshop, Premiere Pro, and After Effects</h3>
                </td>
              </tr>
            </table>
          </Showcase>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
