import React, { Component } from 'react';
import './App.css';

import pillowImage from './images/home_pillow.jpg';

class About extends Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  render() {
    return (
      <div>
        <img src={pillowImage} className="largeImage" alt="a pillow" />
        <div className="intro">
          <p>All pillows are handmade in our artisan workshop out of Pittsburgh, PA.</p>
        </div>
      </div>
    );
  }
}


export default About;
