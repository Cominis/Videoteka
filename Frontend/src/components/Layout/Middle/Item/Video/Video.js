import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import  playButton from '../../../../../assets/play-button.PNG';


const useStyles = makeStyles({
       
    container: {
        display: "flex",
        flexDirection: "column",         
    },
    top:{ 
        width: 220,
        height: 125,     
        pointerEvents: "none",   
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

function Video () {

    const classes = useStyles();

    return(
        <Card >
        <CardActionArea className={classes.container}>
            <CardMedia className={classes.top}
                component="img"            
                alt="Play Button"
                image= {playButton}/>
            <CardContent className={classes.bottom}  >
            <Typography className={classes.title} >
                Video Title
            </Typography>          
            </CardContent>
        </CardActionArea>      
        </Card>
    )
}

export default Video;
