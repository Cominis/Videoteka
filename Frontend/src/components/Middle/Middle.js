import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { getUserVideos } from 'clients/videoClient';
import getVideoSource from 'services/getVideoSource';
import PropTypes from 'prop-types';
import Video from './Item/Video/Video';
import InformationPanel from './InformationPanel/InformationPanel';
import VideoDragAndDrop from '../Video/VideoDragAndDrop';
import VideoContainer from '../Video/VideoContainer';

const drawerWidth = 290; // drawer paper size + scroll bar size

const useStyles = makeStyles(() => ({
    middle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        overflow: 'hidden',
    },
    whiteSpace: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,

    },
    grid: {
        marginTop: 50,
        marginLeft: 40,
        gap: 15,
        width: 'calc(100% - 40px)',
    },
    InfoPanelOpen: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
}));

function Middle({ folderName, folderVideos, info }) {
    const classes = useStyles();
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({
        id: null,
        title: null,
        thumbnail: null,
        src: null,
        contentType: null,
    });
    const [playerOpt, setPlayerOpt] = useState({
        id: null,
        title: null,
        thumbnail: null,
        src: null,
        contentType: null,
    });
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(() => {
        // temp show default video for other folders
        if (folderName !== 'a') {
            removeSelected();

            const videos = folderVideos.map((values) => ({
                ...values,
                src: 'http://localhost:3000/videoteka-video.mp4',
                contentType: 'video/mp4',
            }));

            setVideoList(videos);
        } else {
            (async () => {
                const videos = await getUserVideos(1);

                setVideoList(videos.userVideos);
            })();
        }
    }, [folderVideos, folderName]);

    const videoPlayerOptions = (src, type) => ({
        autoplay: true,
        playbackRates: [0.25, 0.5, 1, 1.5, 2],
        width: 768,
        height: 432,
        controls: true,
        sources: [
            {
                src,
                type,
            },
        ],
    });

    function removeSelected() {
        // select all radio inputs inside video components
        const videoRadio = document.getElementsByName('video-radio');
        // remove checked from all video components
        videoRadio.forEach((video) => video.checked = false);
        // remove selected video
        setSelectedVideo({
            id: null,
            title: null,
            thumbnail: null,
            src: null,
            contentType: null,
        });
    }

    const getPlayerOptions = (video) => {
        if (video?.src) {
            return videoPlayerOptions(video.src, video.contentType);
        }

        return video.title !== null
            ? videoPlayerOptions(
                getVideoSource(video.title, video.contentType),
                video.contentType,
            )
            : videoPlayerOptions(null, null);
    };

    const handlePlayVideo = (video) => {
        setPlayerOpt(getPlayerOptions(video));
        setPlayVideo(true);
    };

    const handleClose = () => {
        setPlayVideo(false);
        setPlayerOpt(videoPlayerOptions(null, null));
    };

    return (
        <div id="middle" className={classes.middle}>
            <VideoDragAndDrop InfoOpen={info} showEmptyState={videoList.length === 0}>
                {videoList.length !== 0
                        && <div className={classes.whiteSpace} onClick={removeSelected} />}
                <Grid container className={classes.grid}>
                    {videoList.map((video, i) => (
                        <Grid item key={i}>
                            <Video
                                index={i}
                                videoInfo={video}
                                select={setSelectedVideo}
                                play={handlePlayVideo}
                            />
                        </Grid>
                    ))}
                </Grid>
            </VideoDragAndDrop>
            <InformationPanel open={info} selected={selectedVideo} />
            <VideoContainer
                playerOptions={playerOpt}
                open={playVideo}
                handleClose={handleClose}
            />
        </div>
    );
}

Middle.propTypes = {
    info: PropTypes.bool.isRequired,
    folderName: PropTypes.string.isRequired,
    folderVideos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Middle;
