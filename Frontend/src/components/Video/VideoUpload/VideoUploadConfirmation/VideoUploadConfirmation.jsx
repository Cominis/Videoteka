import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import VideoUploadInfo from '../VideoUploadInfo';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80%',
        maxHeight: 450,
    },
}));

function VideoUploadConfirmation(props) {
    const { onCancel, open, onConfirm, ...other } = props;
    const classes = useStyles();

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth='xs'
            aria-labelledby='confirmation-dialog-title'
            open={open}
            classes={classes}
            {...other}
        >
            <DialogTitle id='confirmation-dialog-title'>Upload video</DialogTitle>
            <DialogContent dividers>
                <VideoUploadInfo {...other}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color='secondary'>
                    Cancel
                </Button>
                <Button onClick={onConfirm} color='primary'>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

VideoUploadConfirmation.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default VideoUploadConfirmation;
