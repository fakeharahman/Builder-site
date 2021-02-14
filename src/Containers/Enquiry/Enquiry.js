import classes from "./Enquiry.module.css";
import { Box, Button, TextField } from "@material-ui/core";
import React, { Component } from "react";

export default class Enquiry extends Component {
  render() {
    return (
      <Box className={classes.Enquiry}>
        <h1>Get in touch!</h1>
        <TextField
          fullWidth
          label="Full Name"
          required
          placeholder="Your full name here"
          color="secondary"
        />
        <TextField
          fullWidth
          label="Phone Number"
          required
          placeholder="Your Phone Number"
          color="secondary"
        />
        <TextField
          fullWidth
          label="Email"
          placeholder="Your Email id here"
          color="secondary"
        />
        <TextField
          fullWidth
          label="Specific Project Name"
          placeholder="Project name"
          color="secondary"
        />
        <TextField
          fullWidth
          label="Purpose"
          multiline
          rows={5}
          placeholder="Your purpose here"
          color="primary"
        />
        <Box p={2}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Box>
      </Box>
    );
  }
}
