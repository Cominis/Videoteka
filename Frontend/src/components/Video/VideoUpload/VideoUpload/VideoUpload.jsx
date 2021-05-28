import React, { useContext, useRef, useState } from 'react';
import { uploadVideo } from 'clients/videoClient';
import VideoUploadConfirmation from '../VideoUploadConfirmation';
import Button from '@material-ui/core/Button';
import SnackbarContext from 'context/SnackbarContext';
import { SEVERITY_ERROR, SEVERITY_INFO } from '../../../../constants';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    HeaderButton: {
        "& #HeaderButton": {
            display: 'flex',
            padding: '5px',
            margin: '5px',
        }
    },
}));

function VideoUpload({ text }) {
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setSelected] = useState(false);
    const uploadFileInput = useRef()
    const { showMessageSnackbar } = useContext(SnackbarContext);

    const handleUploadButtonClick = () => {
        uploadFileInput.current.click();
    }

    const changeHandler = (event) => {
        if (!event.target || !event.target.files) {
            return;
        }
        setSelectedFile(event.target.files[0]);
        setSelected(true);
        event.target.value = null;
    };

    const handleSubmitConfirm = async () => {
        showMessageSnackbar('Uploading video.', SEVERITY_INFO);
        clearSelection();
        const res = await uploadVideo(selectedFile);
        if (res.error) {
            showMessageSnackbar(res.error, SEVERITY_ERROR);
        } else {
            showMessageSnackbar(`Video uploaded successfully ID: ${res.createdVideoId}`);
        }
    };

    const handleSubmitCancel = () => {
        clearSelection();
    }

    const clearSelection = () => {
        setSelected(false);
        setSelectedFile('');
    }

    return (
        <div>
            <div className={classes.HeaderButton}>
                <Button id='HeaderButton' variant='contained' onClick={handleUploadButtonClick}>{text}</Button>
            </div>
            <input type='file' name='file' onChange={changeHandler} ref={uploadFileInput} style={{ display: 'none' }} />
            {isSelected && (
                <VideoUploadConfirmation
                    open={isSelected}
                    onConfirm={handleSubmitConfirm}
                    onCancel={handleSubmitCancel}
                    video={selectedFile}
                />
            )}
        </div>
    )
}

VideoUpload.propTypes = {
    text: PropTypes.string,
};

VideoUpload.defaultProps = {
    text: 'Add new video',
}

export default VideoUpload;
