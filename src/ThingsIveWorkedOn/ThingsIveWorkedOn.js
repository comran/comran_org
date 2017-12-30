import React, { Component } from 'react';
import './ThingsIveWorkedOn.css';

import Showcase from '../Showcase/Showcase'

import droneSrc from '../images/drone.jpg';

class ThingsIveWorkedOn extends Component {
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
      <Showcase title="Things I've Worked On"
          imgSrc={droneSrc}
          colorInvert="true">
        <table className="ThingsIveWorkedOn">
          <tr>
            <td>
              <h1>Unmanned Aerial Systems</h1>
              <h2>Software Lead (2017 - Present)</h2>
            </td>
            <td>
              <div className="DisplayContainer">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/CL5NuTDE-d8?rel=0"
                    frameborder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowfullscreen>
                </iframe>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="DisplayContainer">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/4bN6adKrHxQ?rel=0"
                    frameborder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowfullscreen>
                </iframe>
              </div>
            </td>
            <td>
              <h1>Drone Swarms</h1>
              <h2>2017 Summer Internship</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h1>Weather Balloons</h1>
              <h2>Software and Electronics Lead</h2>
            </td>
            <td>
              <div className="DisplayContainer">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ALnWUP6lVUU?rel=0"
                    frameborder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowfullscreen>
                </iframe>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="DisplayContainer">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/CMX4ynSQsyI?rel=0"
                    frameborder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowfullscreen>
                </iframe>
              </div>
            </td>
            <td>
              <h1>FIRST Robotics Competition</h1>
              <h2>Team 971 President (2015 - 2016)</h2>
            </td>
          </tr>
        </table>
      </Showcase>
    );
  }
}

export default ThingsIveWorkedOn;
