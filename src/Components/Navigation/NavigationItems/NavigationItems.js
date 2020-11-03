import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>HOME</NavigationItem>
            <NavigationItem link="/auth">ABOUT US</NavigationItem>
            <NavigationItem link="/auth">PROJECTS</NavigationItem>
            <NavigationItem link="/auth">ENQUIRY</NavigationItem>
            <NavigationItem link="/auth">CONTACT US</NavigationItem>
        
    </ul>
)

export default navigationItems