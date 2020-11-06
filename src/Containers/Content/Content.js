import classes from './Content.module.css'
import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import MainImg from '../../Components/MainImg/MainImg'
import Completed from '../Projects/Completed/Completed'

export default class Content extends Component {
    render() {
        return (
            <div >
                <Box  py={5}   className={classes.header}>
                <h1 className={classes.h1}>Tameer Enterprises <br /> Building and Construction</h1>
                <p>Give me something to put here.</p>
                </Box>
                <MainImg />
                <AboutUs />
                <Completed />
            </div>
        )
    }
}
