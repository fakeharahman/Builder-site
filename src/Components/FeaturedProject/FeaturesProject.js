import { Box } from "@material-ui/core";
import React from "react";
import image from "../../assets/gilanie.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import classes from "./FeaturedProject.module.css";

export default function FeaturesProject() {
  return (
    <Box>
      <div>
        <br />
        <Box margin="1rem 3rem" className={classes.FeaturedProject}>
        <ScrollAnimation animateIn="bounceInRight">
            <img src={image} alt="building" />
          </ScrollAnimation>
          <Box>
            {/* <br /> */}
            {/* <ScrollAnimation animateIn="wobble" initiallyVisible={true}> */}
            <h1>Featured Ongoing Project</h1>
            {/* <br /> */}
            {/* </ScrollAnimation> */}
            <p>
              <span>
                Our latest township project-Gilani Tower, spread over several acres
                of land is the sheer brilliance of urban living architecture,
                designed by a team of renowned architects.
              </span>
              <br />
            </p>
            <br />
           <h4>Unique features of our project</h4>
           <ul>
               <li>STRUCTURE • Earthquake resistant Structure according to latest seismic code. RCC framed structure with walls of bricks. </li>
               {/* <li>WALL FINISH • Internal: -Plaster with wall putty •External: - Permanent finish with wall putty and water proof paint </li> */}
               <li>FLOORING • Anti-skid vitrified tiles for flat. Granite for stair case. </li>
               {/* <li>RAILING • Stainless steel/Iron </li> */}
               <li>KITCHEN •Granite top with stainless steel sink and glared tilling up to Dado. Provision for hot and cold water system. </li>
               {/* <li>TOILET •Ceramic the flooring and wall cladding with ceramic fixtures and CP fittings, C PVC Plumbing </li> */}
               <li>DOORS •Entrance & Internal - Flushdoors. fire proof doors wherever required. </li>
               <li>WINDOWS •Aluminum / anodlaed framed Windows with Glass.</li>
               {/* <li>ELECTRICAL Modular switches. copper electrical Wring throughout in concealed conduit with provision for light - points. power - points, TV and telephone sockets. Power backup(through silent generator) not exceeding 400 watts per flat. </li> */}
               <li>SECURITY Provision for intercom connected to every flat. CCTV surveillance in commas areas. </li>
           </ul>
          </Box>
          
        </Box>
      </div>
      <br />
    </Box>
  );
}
