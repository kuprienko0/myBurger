import React, { Component } from 'react';
import Header from "./Header";
import AboutUs from './AboutUs/index';
import Contacts from "./Contacts";


class MainPage extends Component{
    Scroll(){

    }
    render(){
        return(
            <div className='mainPage'>
                <Header/>
                <AboutUs/>
                <Contacts/>
            </div>
        )
    }
}
export default MainPage;