import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header/Header.js";
import Middle from '../Middle/Middle';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    Layout: {        
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
    }, 
    Layout__Sidebar: {        
        height: '100%', 
        width: 'auto',        
        backgroundColor: 'rgb(100, 100, 100)',
    },      
    Layout__Content: { 
        width: '100% ',            
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
    },    

}));


function Layout() {
   const classes = useStyles(); 

    const [isInfoOpen, setInfoOpen] = useState(false);      

    return (
        <div className={classes.Layout}>

            <div className={classes.Layout__Sidebar}>
               <Sidebar  />
            </div>

            <div  className={classes.Layout__Content}>
                {/* The Header component is being handled by Header.js now*/}
                <Header setInfo = {setInfoOpen} info = {isInfoOpen} />                
                <Middle info = {isInfoOpen} /> 
            </div>
        </div>
    )
}

export default Layout;
