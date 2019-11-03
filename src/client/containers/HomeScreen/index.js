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
            <img src="https://innovation.northwesternmutual.com/img/tech-advancement/og_tech.jpg" />
          </div>
          <div>
            <img src="https://uwm.edu/wp-content/uploads/2018/05/aerial-uwmcampus-milwaukee-1500x650.jpg"/>
          </div>
          <div>
            <img src="https://previews.dropbox.com/p/thumb/AAk2c7ZzLUIIXRSF_xO97wV9lx3vSOAdX3Mspj9MSWvVo9lvDfid-ACkWh-ylgSocdBJzZDXvnAumjJS29PGh9hL8eSJLC1JpkH3t5BOP-kQniuHBMLsscLFF4hX4VuH7WyZAgIBubPcOalpmjL6hJVYqqdMUUEIihOXAdA54S__Ur0JE9nVBcgJeyzJUidhGyX5HgsOyxqZH_tERGM8ceAw-fWdXi79_FuC6U84hlZX6tgioyDAr96gxbBn4X1dEai13dK9UZpotEKaYESG6FuS8I8Z6w8JmF7ZPL8Fdyr2cWiCZjd5MYi2cyAcuyI4iWSMTF4n3-qZNZN8fLjkl11F-fimB9hNrhonmVkARlsuPFmWjJnyEjbjtwiy-7524dJWUpnShw02gHIbQ_Ned_h7pBS7l8fgmBzMmJOMd-VsQCt9FhqI9MjNOtJHHZjJUCfh9sxNdfnnwtupEtt6OzfgYORipzMU7GeiqzN8nOhGYeeMnGsSHQawHkxvDuhuo-w2WmLCeCJHuA8_O_WCfu6rl0EhyTrVHNuOnqB35b0ETaddtJmxQumlol5KtGPLUj37IF8jjNSxwUcuMCmGl3zF6bMOQ0JGWDkkH-hebYW6lCAuQsZ0A8ECylPyVB9p7P7erSGfs9q9w0DCU_m_2yCJ/p.jpeg?fv_content=true&size_mode=5"/>
          </div>
          <div>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg"/>
          </div>
        </Carousel>
      </React.Fragment>);
  }
}

export default HomeScreen;
