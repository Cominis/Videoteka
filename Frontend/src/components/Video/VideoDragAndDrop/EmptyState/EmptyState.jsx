import React from 'react'
import {makeStyles, Paper, Typography } from '@material-ui/core';
import VideoUpload from '../../VideoUpload/VideoUpload';
import CloudUpload from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    paper: {       
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',        
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.secondary,
        width: 400,
        height: 400,
    },
}));

function EmptyState() {
    const classes = useStyles();
    
    return (       
        <Paper className={classes.paper}>
            <CloudUpload color='disabled' style={{ fontSize: 60 }} />
            <Typography variant='h5'>Drag & Drop to Upload Video</Typography>
            <Typography variant='h5'>OR</Typography>
            <VideoUpload text='Browse Video' />
        </Paper> 
    )
}

export default EmptyState;
