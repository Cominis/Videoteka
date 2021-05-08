import React from 'react'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import VideoUpload from '../../VideoUpload/VideoUpload';
import CloudUpload from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function EmptyState() {
    const classes = useStyles();
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <CloudUpload color='disabled' style={{ fontSize: 60 }} />
                    <Typography variant='h5'>Drag & Drop to Upload Video</Typography>
                    <Typography variant='h5'>OR</Typography>
                    <VideoUpload text='Browse Video' />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default EmptyState;
