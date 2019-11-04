import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../../less/home.less';
import Collab from '../../img/collab.jpg';

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
            <img src="https://innovation.northwesternmutual.com/img/tech-advancement/og_tech.jpg" />
          </div>
          <div>
            <img src="https://uwm.edu/wp-content/uploads/2018/05/aerial-uwmcampus-milwaukee-1500x650.jpg" />
          </div>
          <div>
            <img src={Collab} />
          </div>
          <div>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg" />
          </div>
        </Carousel>
      </React.Fragment>);
  }
}

export default HomeScreen;
