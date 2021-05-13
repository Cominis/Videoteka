import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import { SEVERITY_ERROR, SEVERITY_INFO } from '../../../../constants';
import SnackbarContext from 'context/SnackbarContext';
import { uploadVideo } from 'clients/videoClient';
import VideoUploadConfirmation from '../../VideoUpload/VideoUploadConfirmation';
import { makeStyles } from '@material-ui/core/styles';
import EmptyState from '../EmptyState';
import DropZone from '../DropZone/DropZone';

const useStyles = makeStyles((theme) => ({
    dragAndDrop: {        
        transition: 'width 0.2s', 
        position: 'absolute',
        width: '100%', 
        height: '100%',
        top: 0,
        left: 0,
        overflowY: "scroll",
        //overflowX: "hidden",      
    },
    InfoPanelOpen: {      
        width: `calc(100% - 250px)`,  
    },
}));

function VideoDragAndDrop(props) {
    const classes = useStyles();
    const [dragging, setDragging] = useState(false);
    const [video, setVideo] = useState();
    const [dropped, setDropped] = useState(false);
    const { showMessageSnackbar } = useContext(SnackbarContext);

    let depthCounter = 1;

    let dragAndDropWithPanel;
    if(props.InfoOpen){
        dragAndDropWithPanel = classes.InfoPanelOpen;        
    }
    else{         
        dragAndDropWithPanel = "";
    } 

    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        depthCounter++;
        if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    }

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        depthCounter--;
        if (depthCounter === 0) {
            setDragging(false);
        }
    }

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(false);
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            setVideo(event.dataTransfer.files[0]);
            setDropped(true);
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const handleSubmitConfirm = async () => {
        showMessageSnackbar('Uploading video.', SEVERITY_INFO);
        clearDropped();
        const res = await uploadVideo(video);
        if (res.error) {
            showMessageSnackbar(res.error, SEVERITY_ERROR);
        } else {
            showMessageSnackbar(`Video uploaded successfully ID: ${res.createdVideoId}`);
        }
    }

    const handleSubmitCancel = () => {
        clearDropped();
    }

    const clearDropped = () => {
        setDropped(false);
        setVideo(undefined);
    }

    return (
        <div
            onDragEnter={event => handleDragEnter(event)}
            onDragLeave={event => handleDragLeave(event)}
            onDragOver={event => handleDragOver(event)}
            onDrop={event => handleDrop(event)}
            className={`${classes.dragAndDrop} ${dragAndDropWithPanel}`}          
        >
            {dragging && (
                <DropZone/>
            )}
            <div>
                {props.showEmptyState && (
                    <EmptyState/>
                )}
                {props.children}
            </div>
            {dropped && (
                <VideoUploadConfirmation
                    open={dropped}
                    onConfirm={handleSubmitConfirm}
                    onCancel={handleSubmitCancel}
                    video={video}
                />
            )}
        </div>
    )
}

VideoDragAndDrop.propTypes = {
    showEmptyState: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

export default VideoDragAndDrop;
