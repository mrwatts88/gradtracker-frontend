import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../../less/home.less';

export class HomeScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={
          { display: 'flex', justifyContent: 'center', marginTop: '20px', fontSize: '40px' }}>
          UWM Graduate Student Tracker
        </h1>
        <Carousel>
          <div>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg" />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </React.Fragment>);
  }
}

export default HomeScreen;
