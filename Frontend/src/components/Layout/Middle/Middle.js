import React from 'react';
import Video from './Item/Video/Video';
import { Select, FormControl, InputLabel } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   
    middle:{
        height: "85%;",
        //backgroundColor: "rgb(180, 180, 180)",                
    },
    top:{
        marginLeft: 40,
        height: 60,
    },
    grid: {
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
            <div className = {classes.top}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Filter</InputLabel>
                    <Select>
                        <option aria-label="None" value="" />
                        <option marginLeft ='15' value={10}>Size ascending</option>
                        <option value={20}>Size descending</option>                        
                    </Select>
                </FormControl>
            </div>
            <div className = {classes.grid}>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
            </div>  
        </div>
    );
}

export default Middle;