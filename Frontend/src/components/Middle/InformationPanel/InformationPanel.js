import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    paper: {
        //visibility: 'hidden',
        width: 250,       
        height: "100%",   
        position: 'absolute',        
        backgroundColor: 'rgb(220,220,220)',
    },  
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',       
    },
    contentImage: {
        alignSelf: 'center',
        marginTop: 50,
        width: 240,
    },
    contentTitle: {
        marginLeft: 10,
       width: 220,   
    },
    contentInfo: {
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 20,            
    },
    deletBtn:{
        width: 180,  
        marginLeft: -20,         
        marginBottom: 50,
        alignSelf: 'center',
            '&:hover':{
                backgroundColor: 'tomato',
            }
    }
        
  }));

function InformationPanel (props) {

    const classes = useStyles();       
  
    return (       
     <div  >        
        <Drawer             
            variant="persistent"           
            anchor="right" 
            open={props.open}            
            BackdropProps={{ open: false }}            
            classes={{
                paper: classes.paper,                
                modal: classes.modal
            }}
            >    
            <div className={classes.content}>               
                <img className={classes.contentImage} src= {props.selected.thumbnail} alt=""/>                     
                <h2 className={classes.contentTitle}>{props.selected.title}</h2>    

                {   
                    (props.selected.id)
                    
                    ?   <div className={classes.contentInfo}>
                            <div>
                                <p><b>ID:</b> {props.selected.id}</p>
                                <p><b>Some info:</b> aaa </p>
                                <p><b>Some info:</b> bbb </p>
                            </div>                            
                            <Button className={classes.deletBtn} variant="contained" > Delete video </Button>
                        </div>
                    :   <div/> //empty div if there is no selected item
                }             
            </div>  
        </Drawer>
     </div>
    );
}

export default InformationPanel;