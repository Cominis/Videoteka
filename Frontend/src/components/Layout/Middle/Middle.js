import React, {useState, useEffect} from 'react';
import Video from './Item/Video/Video';
import { makeStyles } from '@material-ui/core/styles';
import VideoDragAndDrop from '../../Video/VideoDragAndDrop';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '6vh',
        paddingLeft: '1.5vw',
    },
}));

function Middle () {
    const classes = useStyles();  
    const [videoList, setVideoList] = useState([]);     

    function loadVideoList(){
        //TO DO: load video info from database
        let folderVideos = [
            {id: 1, title: 'Video 1', thumbnail: 'src=???'},
            {id: 2, title: 'Video 2', thumbnail: 'src=???'},
            {id: 3, title: 'Video 3', thumbnail: 'src=???'},
            {id: 4, title: 'Video 4', thumbnail: 'src=???'},
            {id: 5, title: 'Video 5', thumbnail: 'src=???'},
            {id: 6, title: 'Video 6', thumbnail: 'src=???'},
            {id: 7, title: 'Video 7', thumbnail: 'src=???'},
            {id: 8, title: 'Video 8', thumbnail: 'src=???'},
        ];
          
        setVideoList(folderVideos);
    }    

    useEffect(() => {
        loadVideoList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);           
    
    return (
        <VideoDragAndDrop showEmptyState={videoList.length === 0}>
            <Grid container className={classes.root} spacing={2}>
                {videoList.map((video, i) =>
                    <Grid item key={i}>
                        <Video title={video.title} />
                    </Grid>
                )}
            </Grid>
        </VideoDragAndDrop>
    );
}

export default Middle;
