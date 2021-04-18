import React, { useState } from 'react';
import '../Layout/Layout.scss';
import Header from "../Header/Header.js";

function Layout() {

    return (
        <div className="Layout">

            <div className="Layout__Sidebar">
                replace div with Sidebar component
            </div>

            <div className="Layout__Content" >

                {/* The Header component is being handled by Header.js now*/}
                {Header()}

                <div className="Layout__Middle" >
                    replace div with Middle component
                </div>

            </div>
        </div>
    )
}

export default Layout;
