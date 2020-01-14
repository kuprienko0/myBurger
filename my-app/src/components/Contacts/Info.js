import React, { Component } from 'react';
import Location from '../../img/location.png'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Facebook from '../../img/iconmonstr-twitter-1-240.png'
import Twitter from '../../img/iconmonstr-facebook-1-240.png'
import Insta from '../../img/iconmonstr-instagram-13-240.png'

class Info extends Component{
    render() {
        return(
            <section className="left-contact-info">

                            <div className="info">
                                <h2 className="">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li className="phone"><img src={Location} alt=""/><span className="text">г.Днепр, пр.Яворницкого 100</span>
                                        </li>
                                        <li className="phone"><img src={Phone} alt=""/><span className="text">+380 (93) 361 33 39</span>
                                        </li>
                                        <li className="phone"><img src={Email} alt=""/><span className="text">burger@gmail.com</span></li>
                                    </ul>
                                </div>

                                <ul className="all-social">
                                    <li className="social"><a href="https://twitter.com/burgerking"><img src={Twitter} alt="..."/></a></li>
                                    <li className="social"><a href="https://www.facebook.com/theburger.ua"><img src={Facebook} alt="..."/></a></li>
                                    <li className="social"><a href="https://www.instagram.com/burgerking/?hl=ru"><img src={Insta} alt="..."/></a></li>
                                </ul>
                            </div>
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21162.363471654182!2d35.02358298402604!3d48.470046572207345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KjQkNCTINCU0J3QldCf0KA!5e0!3m2!1sru!2sua!4v1574952343042!5m2!1sru!2sua"
                                width="100%" height="100%" frameBorder="2" style={{border:0}} allowFullScreen=""></iframe>
                        </div>
            </section>

        )
    }
}
export default Info;