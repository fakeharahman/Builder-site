import classes from './ProjectCard.module.css'
import React from 'react'
// import Img from '../../assets/1.jpg'
// import { Box } from '@material-ui/core'

export default function ProjectCard(props) {
    return (
        <div className={classes.ProjectCard}>
            <img src={props.img} alt="proj 1" />
            <div className={classes.text}>
                <h3>{props.title}</h3>
                <p>Location: {props.location}.</p>
                <p>Details: {props.details}</p>
                <br />
                <p><a href='/'>Learn More!</a></p>
            </div>
            {/* <Box className={classes.space} /> */}
        </div>
    )
}
