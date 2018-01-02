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
            <td colspan="2">
              <p>Major Projects</p>
            </td>
          </tr>
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
                    src="https://www.youtube.com/embed/LALDdnUB62M?rel=0"
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
              <h2>Summer Internship (2017)</h2>
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
          <tr>
            <td colspan="2">
              <br/>
              <p>Other Things Worth Mentioning</p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <ul>
                <li><a href="https://github.com/comran/miranda-dashboard">Car
                    RPM meter,</a> which interfaces with most modern cars via
                    the OBD2 diagnostics port</li>
                <li><a href="https://github.com/comran/cs32/tree/master/project_4">
                    Turn-by-turn navigator program,</a> implemented in UCLA's
                    CS32 class using real OpenStreetMap road segment data for
                    the greater Westwood area in Los Angeles</li>
                <li><a href="https://github.com/comran/tdx_lights">LED strip
                    client, server, and web interface</a> for creating light
                    animations remotely, which is currently being used to
                    illuminate the outdoor greek letters on UCLA&#39;s Theta
                    Delta Chi fraternity house at night</li>
                <li><a href="https://github.com/comran/comran_org">This
                    website,</a> which was scratch-built in React as a side
                    project to familiarize myself with the framework</li>
              </ul>
            </td>
          </tr>
        </table>
      </Showcase>
    );
  }
}

export default ThingsIveWorkedOn;
