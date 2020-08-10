import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

/**
 * React por default instala plugins e conversions JSS (CSS in Javascript)
 * usando function makeStyles do material ui
 */
const useStyles = makeStyles( theme => ({

    sideMenu : {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "320px",
        height: "100%",
        backgroundColor: "#253053"
    }
    
}));


const SideMenu = () => {

    const classes = useStyles();

    return (
        <div className={classes.sideMenu}>side menu</div>
    );
}

export default SideMenu;