import React, {useState, useEffect} from 'react';
import Video from './Item/Video/Video';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   
    middle:{
        height: "85%;",
        //backgroundColor: "rgb(180, 180, 180)",                
    },   
    grid: {
        marginTop: 50,
        marginLeft: 40,
        display: "grid",
        gridTemplateColumns: "repeat(6, 220px)",
        gridAutoRows: 170,
        gap: 15,       
    },
    formControl: {        
        minWidth: 160,        
    },
     
  }));

function Middle () {
    const classes = useStyles();  
    const [videoList, setVideoList] = useState([]); 

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

    let newVideoList  = videoList.concat(folderVideos);

    useEffect(() => {
        setVideoList(newVideoList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);   
        
    
    return (       
        <div className = {classes.middle}>           
            <div className = {classes.grid}>
            {videoList.map((video, i) =>                    
                <Video key={i} title ={video.title} />              
            )}             
            </div>  
        </div>
    );
}

export default Middle;