import React, { Component } from 'react';
import './AboutMe.css';

import Showcase from '../Showcase/Showcase'

import uclaLogoSrc from '../images/ucla_logo.svg';
import uclaSrc from '../images/ucla.jpg';

class AboutMe extends Component {
  state = {
    titleOffset: 0,
    backgroundOffset: 0
  }

  render() {
    var uclaLogoStyle = {
      height: "10vh",
      marginBottom: "3vh",
    };

    return (
      <Showcase title="About Me" imgSrc={uclaSrc} colorInvert="true">
        <table className="AboutMe">
          <tbody>
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
                <img src={uclaLogoSrc} style={uclaLogoStyle} />
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
                <h3>Adobe Photoshop, Premiere Pro</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </Showcase>
    );
  }
}

export default AboutMe;
