import classes from "./MainImg.module.css";
// import { Box } from "@material-ui/core";
import React from "react";
import Image from "../../assets/mainImg.jpg";

export default function MainImg() {
  return (
    <div className={classes.MainImg}>
      <img src={Image} alt="Welcome" />
    </div>
  );
}
