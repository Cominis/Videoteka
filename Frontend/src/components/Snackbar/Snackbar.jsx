import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SnackbarContext from 'context/SnackbarContext';
import PropTypes from 'prop-types';
import VideoUploadConfirmation from '../Video/VideoUpload/VideoUploadConfirmation';
import { SEVERITY_SUCCESS } from '../../constants';

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function SnackbarCustom({ message, severity, open }) {
    const { changeSnackbarOpen } = useContext(SnackbarContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        changeSnackbarOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

VideoUploadConfirmation.propTypes = {
    message: PropTypes.string,
    severity: PropTypes.string,
    open: PropTypes.bool.isRequired,
};

VideoUploadConfirmation.defaultProps = {
    message: '',
    severity: SEVERITY_SUCCESS,
}

export default SnackbarCustom;
