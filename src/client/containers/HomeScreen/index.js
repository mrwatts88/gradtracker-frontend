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
        <Carousel autoplay>
          <div>
            <img src={require('../../img/nm.jpg')} />
          </div>
          <div>
            <img src={require('../../img/campus.jpg')} />
          </div>
          <div>
            <img src={require('../../img/collab.jpg')} />
          </div>
          <div>
            <img src={require('../../img/dog.jpg')} />
          </div>
        </Carousel>
      </React.Fragment>);
  }
}

export default HomeScreen;
