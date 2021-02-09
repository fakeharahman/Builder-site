import classes from "./AboutUs.module.css";
import { Box } from "@material-ui/core";
import React from "react";
import image from "../../assets/1.jpg";
import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";

export default function AboutUs() {
  return (
    <Box>
      <div>
        <br />
        <Box margin="1rem 3rem" className={classes.AboutUs}>
          <ScrollAnimation animateIn="bounceInLeft" >
            <img src={image} alt="building" />
          </ScrollAnimation>
          <Box>
            {/* <br /> */}
            {/* <ScrollAnimation animateIn="wobble" initiallyVisible={true}> */}
              <h1>About Us</h1>
            {/* </ScrollAnimation> */}
            <p>
              <span>
                Tameer Engineers Pvt Ltd was incorporated in the year 2010 by
                Mr. S M Ziauddin Gilani.
              </span>
              <br />
              Today, the company enjoys a strong presence in Patna and has made
              its position as one of the prominent companies in the Real Estate
              Industry. The company is a growing entity in the realty sector
              that stands out for its modern and exquisite homes & condos.
            </p>
            <p>
              With working experience of more than 20 years in Dubai, Mr. Z.
              Gilani and Mr. B. Gilani have come back to bring their experience
              & learnings to Bihar.
            </p>
            <p>
              The Company has a team of highly experienced professionals who are
              fully engrossed to ensure that the company maintains its high
              standards in quality construction. The company has always strived
              hard to keep its commitments and thus enjoys the trust of its
              customers.
            </p>
          </Box>
        </Box>
      </div>
      <br />

  
    </Box>
  );
}
