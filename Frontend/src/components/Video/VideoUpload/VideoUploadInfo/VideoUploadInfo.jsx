import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import formatBytes from 'services/formatBytes';

function VideoUploadInfo({ video }) {
    return (
        <>
            <Typography>Name: {video.name}</Typography>
            <Typography>Type: {video.type}</Typography>
            <Typography>Size: {formatBytes(video.size)}</Typography>
            <Typography>Last modified: {video.lastModifiedDate.toLocaleDateString()}</Typography>
        </>
    );
};

VideoUploadInfo.propTypes = {
    video: PropTypes.any.isRequired,
};

export default VideoUploadInfo;
