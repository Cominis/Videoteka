import React from 'react';
import Video from './Item/Video/Video';
import { Select, FormControl, InputLabel } from "@material-ui/core";
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

    return (       
        <div className = {classes.middle}>           
            <div className = {classes.grid}>
                <Video title ="Video 1" />
                <Video title ="Video 2"/>
                <Video title ="Video 3"/>
                <Video title ="Video 4"/>
                <Video title ="Video 5"/>
                <Video title ="Video 6"/>
                <Video title ="Video 7"/>
                <Video title ="Video 8"/>
            </div>  
        </div>
    );
}

export default Middle;