import React, { Component } from "react"
// import Aux from "../Auxillary/Auxillary"
import classes from "./Layout.module.css"
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar"
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
// import { connect } from "react-redux"

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerShowHandler = () => {
        this.setState({ showSideDrawer: true })
    }

    sideDrawerHideHandler = () => {
        this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer } })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerOpen={this.sideDrawerShowHandler} />
                {/* <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    closed={this.sideDrawerHideHandler} show={this.state.showSideDrawer} /> */}
                <main className={classes.Content}>
                    {this.props.children}</main>
            </React.Fragment>

        )
    }
}




export default (Layout) 