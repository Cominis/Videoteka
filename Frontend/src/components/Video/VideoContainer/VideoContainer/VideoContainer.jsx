import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import VideoPlayer from '../VideoPlayer';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

function VideoContainer({ playerOptions, open, handleClose }) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >
                <VideoPlayer {...playerOptions} />
            </Modal>
        </div>
    );
}

VideoContainer.propTypes = {
    playerOptions: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default VideoContainer;
