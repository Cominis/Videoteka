import React,{useState} from 'react';
import '../Layout/Layout.scss';
import Header from "../Header/Header.js";
import Middle from '../Middle/Middle';
import Sidebar from '../Sidebar/Sidebar';


function Layout() {

    const [isInfoOpen, setInfoOpen] = useState(false); 

    return (
        <div className="Layout">

            <div className="Layout__Sidebar">
               <Sidebar/>
            </div>

            <div className="Layout__Content" >

                {/* The Header component is being handled by Header.js now*/}
                <Header setInfo = {setInfoOpen} info = {isInfoOpen} />
                
                <Middle info = {isInfoOpen} /> 
            </div>
        </div>
    )
}

export default Layout;
