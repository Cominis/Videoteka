import React from 'react';
import '../Layout/Layout.scss';
import Header from "../Header/Header.js";
import Middle from './Middle/Middle';


function Layout() {

    return (
        <div className="Layout">

            <div className="Layout__Sidebar">
                replace div with Sidebar component
            </div>

            <div className="Layout__Content" >

                {/* The Header component is being handled by Header.js now*/}
                <Header />
                
                <Middle/> 
            </div>
        </div>
    )
}

export default Layout;
