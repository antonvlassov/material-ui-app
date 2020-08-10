import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

// material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { IconButton, InputBase, Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

/**
 * Customization
 * 
 * AppBar - convertido para elemento html Header
 */

const useStyles = makeStyles( theme => ({
    
    // root - convention para cutomizar CSS do root component
    root : {
        backgroundColor: "#fff"

    },

    searchInput : {
        opacity: "0.6",
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: "0.8rem",
        '&:hover' : {  // & representa o elemento para qual "esta" classe está aplicada (cssinjs.org)
            backgroundColor:'#f2f2f2'
        },
        // override explicito da regra do MUI (obtido pelo inspect do Chrome)
        '& .MuiSvgIcon-root' : {
            marginRight: theme.spacing(1)   // espaçamento com base no default fo theme
        }              
    },


    // CSS Rules - podem ser customizados usando classes

    // className - gera classes de estilo sem prefixo "MUI"


    // classes - altera diretamente MUI rules, 
    // que estão dentro dos elementos internos que não podem ser alterados com className
    // classes (rules) que podem ser alterados estão no doc oficial API

    
}));

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item style={{border: '1px solid #000'}}>
                        <InputBase 
                            placeholder="Search Topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon />}
                    />

                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item style={{border: '1px solid #000'}}>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                           <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;