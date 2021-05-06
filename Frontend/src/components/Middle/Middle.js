import React, {useState, useEffect} from 'react';
import Video from './Item/Video/Video';
import InformationPanel from './InformationPanel/InformationPanel'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

let drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
   
    middle:{
        position: 'relative',
        display: "flex",
        flexDirection: "row",        
        justifyContent: 'space-between',
        height: "85%;",
        overflowX: 'hidden',
        overflowY: 'hidden',
        
        //backgroundColor: "rgb(180, 180, 180)",                
    },   
    grid: {
        overflowY: "scroll",
        marginTop: 50,
        marginLeft: 40,
        display: "grid",        
        gridTemplateColumns: "repeat(5, 220px)",
        gridAutoRows: 170,
        gap: 15,
        //height: 'inherit', 
        width: `calc(100% - ${drawerWidth}px)`,  
          
    },
    
     
  }));

function Middle (props) {
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
        <div id='middle' className = {classes.middle}>           
            <div className = {classes.grid}>
                {videoList.map((video, i) =>                    
                    <Video key={i} title ={video.title} />              
                )}             
            </div> 
            
            <InformationPanel open = {props.info}/>                       
                      
        </div>
    );
}

export default Middle;