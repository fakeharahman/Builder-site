import React from 'react';
import { Slide } from 'react-slideshow-image';
import Img1 from '../../../assets/2.jpg'
import Img2 from '../../../assets/1.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Box } from '@material-ui/core';
import "./test.css"

const slideImages = [
    Img1,
    Img2,
    Img1
  ];

const Slideshow = () => {
    return (
      <div className='mainImg' >
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
        <Box height='10vh' />
      </div>
    )
};

export default Slideshow;