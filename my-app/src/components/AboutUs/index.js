import React, { Component } from 'react';
import chefImg from '../../img/chef.png';
import './style.css';
import cook from '../../img/cook.jpg'
import burger from '../../img/burger.jpg'

class AboutUs extends Component{
    render() {
        return(
            <section className="about-us-main background" id='aboutUs' >
                <div className="about-us main-bg" >
                    <div className="chef-img"><img className="img-fluid" src={chefImg} alt="Image"/></div>
                    <div className="history">
                        <div className="history-text">
                            <p>The Burger – первый бургерный ресторан, который находится в самом центре Днепра, которое посвятило себя исключительно одному блюду.
                                Здесь к бургеру вам подадут картошку фри, салат, соусы и безлимитную Рepsi.</p>
                        </div>
                        <img src={cook} alt=""/>
                    </div>
                    <div className="about-restaurant">
                        <img src={burger} alt=""/>
                        <div className="about-restaurant-text">
                            <p>Фишка The Burger – открытая кухня, оборудованная огромным аргентинским грилем. Так можно сделать заказ и наблюдать,
                                как повара трудятся и готовят его для вас. Кроме значительного ассортимента бургеров, заведение славится своими
                                американскими стейками, дружественной атмосферой и одной из лучших коктейльных карт в городе.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AboutUs;