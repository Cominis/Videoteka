import React, { useState } from 'react';
import '../Layout/Layout.scss'
import { Toolbar } from '@material-ui/core';
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
                    <SearchBar
                        onChange={(newValue) => setSearchText({ searchText: newValue })}
                        onRequestSearch={() => doSomethingWith(searchText)}
                    />
                </div>
                <Toolbar id="ToolbarAdjustment">
                    <h2> {folderName} </h2>
                    <div className="FolderName">
                        <button className="MenuButton"> Add new video </button>
                        <button className="MenuButton InfoButton"> i </button>
                    </div>
                </Toolbar>
            </div>
        </div>
    )
}

export default Header;
