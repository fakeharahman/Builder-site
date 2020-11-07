import classes from './ProjectCard.module.css'
import React from 'react'
import Img from '../../assets/1.jpg'
// import { Box } from '@material-ui/core'

export default function ProjectCard() {
    return (
        <div className={classes.ProjectCard}>
            <img src={Img} alt="proj 1" />
            <div className={classes.text}>
                <h3>Qamar Plaza</h3>
                <p>Location: New Patliputra colony, patna.</p>
                <p>Details: 4 floors x 4 aparments (2 two bedroom 2 three bedroom)</p>
                <p>Details: 4 floors x 4 aparments (2 two bedroom 2 three bedroom)</p>
                <br />
                <p><a href='/'>Learn More!</a></p>
            </div>
            {/* <Box className={classes.space} /> */}
        </div>
    )
}
