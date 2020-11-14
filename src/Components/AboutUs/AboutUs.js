import classes from "./AboutUs.module.css";
import { Box } from "@material-ui/core";
import React from "react";
import DoneIcon from '@material-ui/icons/Done';

export default function AboutUs() {
  return (
    <Box py={3}  >
      <div className={classes.AboutUs}>
      <h1>About Us</h1>
      <br />
      <p>
        The journey of Tameer Engineers Private Limited has begun in the year
        2011 with a team of people specialized in different type of properties,
        and since its inception we have always strived for the best.
      </p>
      <p>
        We take every housing project as an inBoxidual effort. With an aim to
        outdo at every project, we come up with new concepts and architectural
        variations. We offer a variety of services like buying, leasing,
        developing, hiring residential and commercial complexes under a single
        roof. Every housing project is built with finesse and keeping in mind
        consumer satisfaction.
      </p>
      </div>
      <br />

      <Box width="100%" padd bgcolor='#f0e1b9ff' className={classes.WhyUs}>
      <Box>
      <br />
      <DoneIcon />

      <h2>Why us</h2>
      <p>
        •Passionate<br /> •Commitment<br /> •Impeccable<br /> •Quality<br /> •Timely Completion<br />
        •Professionalism{" "}
      </p>
      <br />
      </Box>
      <Box>
      <br />
      <DoneIcon />
      <h2>Our Core Values</h2>
      <p>
      •Honesty<br /> •Integrated<br /> •Professionalism<br /> 
      •Transparency<br /> •Reliability<br /> •Creativity<br /> •Time Management
      </p>
      < br />
      </Box>
      </Box>
    </Box>
  );
}
