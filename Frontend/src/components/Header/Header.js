import React, { useState } from 'react';
import '../Layout/Layout.scss';
import '../Header/Header.scss';
import { Toolbar, Button } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import VideoUpload from '../Video/VideoUpload/VideoUpload';

// Placeholder connectection to the backend
const backendURL = "..."

function doSomethingWith(searchTextObject) {
    const urlToCall = backendURL + "/search/" + searchTextObject.searchText;
    //Console log for debug purposes
    console.log(urlToCall);
    // TODO: Actually call the url
}


function Header(props) {
    // State accessor to change the name of the Title
    const [folderName, setFolderName] = useState("Folder");
    // State accessor to get search bar text
    const [searchText, setSearchText] = useState("");

    function toggleDrawer(){
        props.setInfo(!props.info);
    }

    return (
        <div className="Layout__Header" >
            <div className="HeaderContent">
                
                <div>
                    <SearchBar className="SearchBar"
                        onChange={(newValue) => setSearchText({ searchText: newValue })}
                        onRequestSearch={() => doSomethingWith(searchText)}
                    />
                </div>
                
                <Toolbar id="ToolbarAdjustment">

                    <h1 className="FolderName"> {folderName} </h1>

                    <div className="HeaderButtons">
                       
                        <VideoUpload/>
                        <Button id="HeaderButton" variant="contained" onClick={toggleDrawer}> Info </Button>

                    </div>
                </Toolbar>
                
            </div>
        </div>
    )
}

export default Header;
