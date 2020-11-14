import classes from './SmolProjectCard.module.css'
import { Box } from '@material-ui/core'
import React from 'react'


export default function SmolProjectCard(props) {
    return (
        <Box maxWidth="40vw" py={2} mx={2} >
        <div>
            <img className={classes.image} src={props.url} alt={props.title} style={{maxHeight:'35vh', maxWidth: '40vw'}} />
    <h6>{props.title}</h6>
        </div>
        </Box>
    )
}
