import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header/Header.js";
import Middle from '../Middle/Middle';
import Drawer from '../Drawer/Drawer'
import {Link, Route, Switch } from "react-router-dom";

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
    
    const folderVideosA = [
        {id: 1, title: 'Video A 1', thumbnail: 'src=???'},
        {id: 2, title: 'Video A 2', thumbnail: 'src=???'},
        {id: 3, title: 'Video A 3', thumbnail: 'src=???'},
        {id: 4, title: 'Video A 4', thumbnail: 'src=???'},
        {id: 5, title: 'Video A 5', thumbnail: 'src=???'},
        {id: 6, title: 'Video A 6', thumbnail: 'src=???'},
        {id: 7, title: 'Video A 7', thumbnail: 'src=???'},
        {id: 8, title: 'Video A 8', thumbnail: 'src=???'},            
    ];

    const folderVideosB = [
        {id: 1, title: 'Video B 1', thumbnail: 'src=???'},
        {id: 2, title: 'Video B 2', thumbnail: 'src=???'},
        {id: 3, title: 'Video B 3', thumbnail: 'src=???'},
        {id: 4, title: 'Video B 4', thumbnail: 'src=???'},
        {id: 5, title: 'Video B 5', thumbnail: 'src=???'},          
    ];

    const folderVideosC = [
        {id: 1, title: 'Video C 1', thumbnail: 'src=???'},
        {id: 2, title: 'Video C 2', thumbnail: 'src=???'},
        {id: 3, title: 'Video C 3', thumbnail: 'src=???'},                  
    ];

    const folderVideosD = [
        {id: 1, title: 'Video D 1', thumbnail: 'src=???'},
        {id: 2, title: 'Video D 2', thumbnail: 'src=???'},
        {id: 3, title: 'Video D 3', thumbnail: 'src=???'},
        {id: 4, title: 'Video D 4', thumbnail: 'src=???'},
        {id: 5, title: 'Video D 5', thumbnail: 'src=???'},
        {id: 6, title: 'Video D 6', thumbnail: 'src=???'},                    
    ];

    const trashVideos = [
        {id: 1, title: 'Trash 1', thumbnail: 'src=???'},
        {id: 2, title: 'Trash 1', thumbnail: 'src=???'},
        {id: 3, title: 'Trash 1', thumbnail: 'src=???'},
        {id: 4, title: 'Trash 1', thumbnail: 'src=???'},
    ]
    

    return (
        <div className={classes.Layout}>

            <div className={classes.Layout__Sidebar}>
                <Drawer folders={["a", "b", "c", "d"]}>
                    <Link to="/a"/>
                    <Link to="/b"/>
                    <Link to="/c"/>
                    <Link to="/d"/>            
                </Drawer>
            </div>

            <div  className={classes.Layout__Content}>
                <Switch>                            
                    <Route path="/a">
                        <Header folderName = "a"  setInfo = {setInfoOpen} info = {isInfoOpen} />                
                        <Middle folderName = "a" folderVideos ={folderVideosA} info = {isInfoOpen} /> 
                    </Route>
                    <Route path="/b">
                        <Header folderName = "b"  setInfo = {setInfoOpen} info = {isInfoOpen} />                
                        <Middle folderName = "b" folderVideos ={folderVideosB} info = {isInfoOpen} /> 
                    </Route> 
                    <Route path="/c">
                        <Header folderName = "c" setInfo = {setInfoOpen} info = {isInfoOpen} />                
                        <Middle folderName = "c" folderVideos ={folderVideosC}  info = {isInfoOpen} /> 
                    </Route>  
                    <Route path="/d">
                        <Header folderName = "d" setInfo = {setInfoOpen} info = {isInfoOpen} />                
                        <Middle folderName = "d" folderVideos ={folderVideosD}  info = {isInfoOpen} /> 
                    </Route>
                    <Route path="/Trash">
                        <Header folderName = "Trash" setInfo = {setInfoOpen} info = {isInfoOpen} />
                        <Middle folderName = "Trash" folderVideos = {trashVideos} info = {isInfoOpen} />
                        {/* Trash Bin Component*/ }
                    </Route>             
                </Switch>               
            </div>
        </div>
    )
}

export default Layout;
