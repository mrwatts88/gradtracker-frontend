import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../../less/home.less';

function onChange(a, b, c) {
  console.log(a, b, c);
}

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
            <h3>1</h3>
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

      </React.Fragment>
    );
  }
}

export default HomeScreen;
