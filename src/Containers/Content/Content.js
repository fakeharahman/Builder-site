import classes from './Content.module.css'
import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import MainImg from '../../Components/MainImg/MainImg'
import Completed from '../Projects/Completed/Completed'
import Ongoing from '../Projects/Ongoing/Ongoiong'
import Enquiry from '../Enquiry/Enquiry'
import ContactUs from '../../Components/ContactUs/ContactUs'
import WhyUs from '../../Components/WhyUs/WhyUs'

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
                <WhyUs />
                <Completed />
                <Ongoing />
                <Enquiry />
                <ContactUs />
            </div>
        )
    }
}
