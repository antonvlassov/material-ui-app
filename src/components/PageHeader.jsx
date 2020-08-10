import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles( theme => ({
    
    // aplica eo root element do componente (no caso Paper)
    root : {
        backgroundColor: "#fdfdff"
    },

    pageHeader : {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },

    pageIcon : {
        display: 'inline-block',
        padding: theme.spacing(2),
        color:'#3c44b1'
    },

    pageTitle : {
        paddingLeft: theme.spacing(4),
    },

    subtitle : {
        opacity: '0.6'
    }


    
}));

const PageHeader = (props) => {

    const classes = useStyles();

    const { title, subtitle, icon } = props;

    return (
        <Paper square className={classes.root}>
            <Box className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                {icon}
                </Card>
                <Box className={classes.pageTitle}>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography classes={{subtitle2 :classes.subtitle }} variant="subtitle2" component="div">
                        {subtitle}
                    </Typography>
                </Box>
            </Box>

        </Paper>
    );
}

export default PageHeader;