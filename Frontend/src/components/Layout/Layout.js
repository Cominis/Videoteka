import React from 'react';
import '../Layout/Layout.scss';
import Middle from './Middle/Middle';

function Layout () {
    return(        
        <div className="Layout">
            <div className="Layout__Sidebar">
                replace div with Sidebar component
            </div>
            <div className="Layout__Content" >
                <div className="Layout__Header" >
                    replace div with Header component
                </div>
                
                <Middle/> 
            </div>
                     
        </div>        
    )
}

export default Layout;
