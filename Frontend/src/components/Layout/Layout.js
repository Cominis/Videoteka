import React, { useState } from 'react';
import '../Layout/Layout.scss'
import { Toolbar } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

function Layout() {

    const [folderName, setFolderName] = useState("Folder");

    return (
        <div className="Layout">

            <div className="Layout__Sidebar">
                replace div with Sidebar component
            </div>

            <div className="Layout__Content" >

                <div className="Layout__Header" >
                    <div className="HeaderContent">
                        <div>
                            
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

                <div className="Layout__Middle" >
                    replace div with Middle component
                </div>

            </div>
        </div>
    )
}

export default Layout;
