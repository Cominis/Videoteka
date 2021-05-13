import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dropZone: {
        zIndex: 999,
        border: 'dashed #a1a1a1 7px',
        backgroundColor: 'rgba(255,255,255,.95)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    dropZoneContent: {
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '50%',
    }
}));

function DropZone() {
    const classes = useStyles();

    return (
        <div className={classes.dropZone}>
            <div className={classes.dropZoneContent}>
                <Typography variant='h4' color='textSecondary'>Drag & Drop here</Typography>
            </div>
        </div>
    )
}

export default DropZone;
