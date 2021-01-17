import React, { Component } from 'react';
import classes from './Navbar.css';

class Navbar extends Component {

    render(){
        return(
            <div>
                <nav className={classes.Navbar}>
                    <img className={classes.Logo} src="https://static.thenounproject.com/png/25603-200.png" alt="logo image" />
                    <div className={classes.Name}>FORM TO EXCEL CONVERTER</div>
                </nav>
            </div>
        )
    }
}

export default Navbar;

