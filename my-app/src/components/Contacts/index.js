import React, { Component } from 'react';
import ContactForm from "./ContactForm";
import './style.css';
import Info from "./Info";

class Contacts extends Component{
    render() {
        return(
            <div className='contacts' id='contacts' href="#contacts">
                <Info/>
                {/*<ContactForm/>*/}
            </div>
        )
    }
}
export default Contacts;