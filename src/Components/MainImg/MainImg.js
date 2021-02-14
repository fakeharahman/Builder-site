import "./MainImg.css";
// import { Box } from "@material-ui/core";
import { Fade } from 'react-slideshow-image';
import React from "react";
import Image from "../../assets/mainImg.jpg";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/gilanie.jpg";
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  Img3,
  Img2,
  // Img1,
  Image
];


export default function MainImg() {
  return (
    <div className='MainImg' >
      {/* <img src={Image} /> */}
      <Fade duration ={3000} transitionDuration={1000} easing="ease-out" pauseOnHover={false}>
      {slideImages.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%", maxHeight: 'calc(100vh - 56px)' }} alt="Welcome" src={each} />
          </div>
        ))}
      </Fade>
         {/* <Slide easing="ease">
         <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide> */}
    </div>
  );
}
