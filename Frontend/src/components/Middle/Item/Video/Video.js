import React, {useState} from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import  playButtonIMG from '../../../../assets/play-button.PNG';


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
    top:{         
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
  });

function Video (props) {
    
    const classes = useStyles();

    function toggleSelection(){ 

        let checkedVideo = document.getElementById(`video-${props.index}`); 
       
        if (!checkedVideo.checked){
            checkedVideo.checked = true; 
            props.setSelected({
                id: props.id,
                title: props.title,
                thumbnail: playButtonIMG, 
            });           
        }   
    }

    return(
        <Card >
            <input id={`video-${props.index}`}   type="radio" name="video-radio" className={classes.input} /> 
            <CardActionArea className={classes.container} onClick={toggleSelection}>
                <CardMedia className={classes.top}
                    component="img"            
                    alt="Play Button"
                    image= {playButtonIMG}/>
                <CardContent className={classes.bottom}  >
                <Typography className={classes.title} >
                    {props.title}
                </Typography>          
                </CardContent>
            </CardActionArea>      
        </Card>
    )
}

export default Video;
