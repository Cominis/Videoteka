import React from 'react';
import {
    Card, CardActionArea, CardMedia, CardContent, Typography, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import defaultThumbnail from 'assets/default-thumbnail.png';
import PropTypes from 'prop-types';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const useStyles = makeStyles({
    input: {
        display: 'none',
        '&:checked ~ $container ': {
            backgroundColor: '#ffcccb',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    top: {
        width: 220,
        height: 125,
        pointerEvents: 'none',
    },
    bottom: {
        padding: 0,
        width: 220,
        height: 45,
    },
    title: {
        margin: 10,
        fontWeight: 400,
        fontSize: 16,
    },
    playButtonContainer: {
        position: 'absolute',
    },
    playButton: {
        position: 'relative',
        bottom: 160,
        left: 56,
    },
});

function Video({
    videoInfo,
    index,
    play,
    select,
}) {
    const classes = useStyles();

    function toggleSelection() {
        const checkedVideo = document.getElementById(`video-${index}`);

        if (!checkedVideo.checked) {
            checkedVideo.checked = true;
            select({ ...videoInfo, thumbnail: defaultThumbnail });
        }
    }

    const handlePlay = () => {
        play(videoInfo);
    };

    return (
        <>
            <Card>
                <input id={`video-${index}`} type="radio" name="video-radio" className={classes.input} />
                <CardActionArea className={classes.container} onClick={toggleSelection}>
                    <CardMedia
                        className={classes.top}
                        component="img"
                        alt="Video thumbnail"
                        image={defaultThumbnail}
                    />
                    <CardContent className={classes.bottom}>
                        <Typography className={classes.title}>
                            {videoInfo.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className={classes.playButtonContainer}>
                    <IconButton className={classes.playButton} onClick={handlePlay}>
                        <PlayCircleFilledWhiteIcon style={{ fontSize: 85 }} />
                    </IconButton>
                </div>
            </Card>
        </>
    );
}

Video.propTypes = {
    videoInfo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.any,
        src: PropTypes.string,
        contentType: PropTypes.string.isRequired,
    }).isRequired,
    play: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    select: PropTypes.func.isRequired,
};

export default Video;
