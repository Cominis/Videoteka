import React, { useState } from 'react';
import '../Layout/Layout.scss';
import '../Header/Header.scss';
import { Toolbar, Button } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

// Placeholder connectection to the backend
const backendURL = "..."

function doSomethingWith(searchTextObject) {
    const urlToCall = backendURL + "/search/" + searchTextObject.searchText;
    //Console log for debug purposes
    console.log(urlToCall);
    // TODO: Actually call the url
}

function Header() {

    // State accessor to change the name of the Title
    const [folderName, setFolderName] = useState("Folder");
    // State accessor to get search bar text
    const [searchText, setSearchText] = useState("");

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

                        {/* For now, buttons which don't do anything */}
                        <Button id="HeaderButton" variant="contained"> Add new video </Button>
                        <Button id="HeaderButton" variant="contained"> Info </Button>
                    </div>
                </Toolbar>
                
            </div>
        </div>
    )
}

export default Header;
