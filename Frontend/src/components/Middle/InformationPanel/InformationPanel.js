import React, {useState, useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    paper: {
        //visibility: 'hidden',
        width: 250,       
        height: "100%",   
        position: 'absolute',        
        backgroundColor: 'grey',
    },
  
    modal:{
        position: 'absolute',  
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
            ModalProps={{container: document.getElementById('middle')}}
            classes={{
                paper: classes.paper,
                docked: classes.docked,
                modal: classes.modal
            }}              
        >            
               
                
            
        </Drawer>
     </div>
    );
}

export default InformationPanel;