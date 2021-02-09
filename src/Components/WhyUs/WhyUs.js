import React from 'react'
import classes from "./WhyUs.module.css";
import { Box } from '@material-ui/core';
import DoneIcon from "@material-ui/icons/Done";
import GroupIcon from '@material-ui/icons/Group';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ScrollAnimation from 'react-animate-on-scroll';

export default function WhyUs() {
    return (
        <Box bgcolor="antiquewhite" py={2}>
             <ScrollAnimation animateIn="tada" initiallyVisible={true}>
          <h2>Why Should You Choose Us?</h2>
            </ScrollAnimation>
            <Box width="100%"  className={classes.WhyUs} py={2}>
                <Box className={classes.Values}>
                    <PersonAddIcon style={{ fontSize: "3rem" }} color={'secondary'}/>
                    <h4>Honest</h4>
                    <p>with our customers even if it’s against us</p>
                </Box>
                <Box className={classes.Values}>
                    <DoneIcon style={{ fontSize: "3rem" }} color={'secondary'}/>
                    <h4>Innovative</h4>
                    <p>with our projects</p>
                </Box>
                <Box className={classes.Values}>
                    <GroupIcon style={{ fontSize: "3rem" }} color={'secondary'}/>
                    <h4>Teamwork</h4>
                    <p>is our strength</p>
                </Box>
                <Box className={classes.Values}>
                    <BuildIcon style={{ fontSize: "3rem" }} color={'secondary'} />
                    <h4>Excellence</h4>
                    <p>in our work</p>
                </Box>
                <Box className={classes.Values} >
                    <HomeWorkIcon style={{ fontSize: "3rem" }} color={'secondary'} />
                    <h4>Customer satisfaction </h4>
                    <p>is our PRIORITY</p>
                </Box>
                <Box className={classes.Values}>
                    <AccountBalanceWalletIcon style={{ fontSize: "3rem" }} color={'secondary'}/>
                    <h4>Affordibility </h4>
                    <p>in our homes</p>
                </Box>
                <Box className={classes.Values}>
                    <EmojiEmotionsIcon style={{ fontSize: "3rem" }} color={'secondary'} />
                    <h4>Commitment</h4>
                    <p>to our customers</p>
                </Box>
            </Box>
        </Box>
    )
}
