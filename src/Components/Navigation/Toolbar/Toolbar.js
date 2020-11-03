import React from 'react'
import classes from './Toolbar.module.css'
// import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DehazeIcon from '@material-ui/icons/Dehaze';
// import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/* <SideDrawerToggle clicked={props.drawerOpen} /> */}
            <DehazeIcon />
        <div className={classes.Logo}>
        </div>
        <nav className={classes.DesktopOnly}><NavigationItems /></nav>
    </header>
)



export default toolbar;