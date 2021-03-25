import React from 'react';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Paper } from "@material-ui/core";

function VideoPlayerCard({ playerOptions }) {
    return (
        <Paper>
            <VideoPlayer {...playerOptions} />
        </Paper>
    );
}

export default VideoPlayerCard;
