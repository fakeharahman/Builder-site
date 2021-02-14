import { Box } from '@material-ui/core'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import classes from './Counter.module.css'
import img from '../../assets/1.jpg'

export default function Counter() {
    return (
        <Box className={classes.Counter}  background-Image={img}>
            {/* <img src={img} alt="background"/> */}
                <p>
            <ScrollAnimation animateIn="bounce" initiallyVisible>
                    <span>20+</span><br />
                </ScrollAnimation>
                    years of experiance
                </p>
                <p>
                <ScrollAnimation animateIn="bounce" initiallyVisible>
                    <span>10+</span><br />
                </ScrollAnimation>
                   completed projects
                </p>
                <p>
                <ScrollAnimation animateIn="bounce" initiallyVisible>
                    <span>4+</span><br />
                </ScrollAnimation>
                    ongoing projects
                </p>
                <p>
                <ScrollAnimation animateIn="bounce" initiallyVisible>
                    <span>2+</span><br />
                </ScrollAnimation>
                    upcoming projects
                </p>
               
            
        </Box>
    )
}
