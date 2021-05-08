import React, {useState, useEffect} from 'react';
import Video from './Item/Video/Video';
import InformationPanel from './InformationPanel/InformationPanel'
import { makeStyles } from '@material-ui/core/styles';


let drawerWidth = 290; // drawer paper size + scroll bar size 

const useStyles = makeStyles((theme) => ({
   
    middle:{        
        transition: '3 sec',
        position: 'relative',
        display: "flex",
        flexDirection: "row",        
        justifyContent: 'space-between',
        height: "100%",
        overflowX: 'hidden',
        overflowY: 'hidden',                 
    },  
    whiteSpace: {
        position: 'absolute',
        width: '100%', 
        height: '100%',
        top: 0,
        left: 0, 
    },    
    grid: {  
        transition: 'width 0.2s',      
        overflowY: "scroll",
        marginTop: 50,
        marginLeft: 40,
        display: "grid",        
        gridTemplateColumns: "repeat(auto-fit, 220px)",
        gridAutoRows: 170,
        gap: 15,
        width: '100%', 
          
    },
    InfoPanelOpen: {      
        width: `calc(100% - ${drawerWidth}px)`,  
    },
    
     
  }));

function Middle (props) {
    const classes = useStyles();  
    const [videoList, setVideoList] = useState([]);     
    const [selectedVideo, setSelectedVideo] = useState({id: null, title: null, thumbnail: null});  


    //If information panel is open, add additional classes to adjust width
    let gridWithPanel, whiteSpaceWithPanel;
    if(props.info){
        gridWithPanel = classes.InfoPanelOpen;
        whiteSpaceWithPanel =classes.InfoPanelOpen;      
    }
    else{ 
        // better than undefined?
        gridWithPanel = ''; 
        whiteSpaceWithPanel ='';   
    }    
    
    useEffect(() => {
        loadVideoList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); 

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
     
    function removeSelected(){
        //select all radio inputs inside video components
        let videoRadio = document.getElementsByName('video-radio');
        //remove checked from all video components
        videoRadio.forEach((video)=> video.checked = false)
        //remove selected video        
        setSelectedVideo({
            id: null,
            title: null,
            thumbnail: null 
        });
    }
   
    
    return (       
        <div id='middle' className = {classes.middle}> 
            <div className = {`${classes.whiteSpace} ${whiteSpaceWithPanel}`} onClick={removeSelected}/>         
            <div className = {`${classes.grid} ${gridWithPanel}`}>
                {videoList.map((video, i) =>(                    
                    <Video key={i} index={i} id={video.id} title ={video.title} setSelected={setSelectedVideo} selected={selectedVideo}/>              
                ))}             
            </div>             
            <InformationPanel open = {props.info} selected={selectedVideo}/>                       
                      
        </div>
    );
}

export default Middle;