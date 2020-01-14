import React, { Component } from 'react';
import StockItem from './StocksItem';
import './style.css';
import Img from '../../img/1.jpg'
import Img2 from '../../img/2.jpg'
import Img3 from '../../img/3.jpg'
import Img4 from '../../img/4.jpg'
import Img5 from '../../img/5.png'
import Img6 from '../../img/6.jpg'


class Stock extends Component{
    render() {
        let links = document.querySelectorAll('.navigation-link');
        links.forEach(item =>{item.classList.remove('active')});
        return(
            <section className="stocks">
                <div className="stocks-wrap">
                    <StockItem title={"Скидка 50% на бургеры"} descriptions={"Акция на пиццу: вторая средняя -50% или 1+1 = 3 третья в подарок.Заказываете две или три средние пиццы? Тогда Вам полагается подарок* от Папа Джон! Для всех, кто заказывает пиццу для себяи своих друзей предлагаем специальное предложение: Каждая вторая средняя пицца -50% или каждая третья - всего за 5 гривен. Предложение действует на все средние пиццы при заказе на доставку с понедельника по четверг."}
                               img={Img} data={"25.11-30.11"}></StockItem>
                    <StockItem title={"1+1 на все бургеры"} descriptions={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur dolorem impedit quia similique,\n" +
                    "                suscipit veritatis vitae voluptatum? Architecto debitis dolore ducimus exercitationem minus molestiae mollitia non quidem quo quos."}
                               img={Img2} data={"25.11-30.11"}></StockItem>
                    <StockItem title={"Пиво к бургеру в подарок"} descriptions={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur dolorem impedit quia similique,\n" +
                    "                suscipit veritatis vitae voluptatum? Architecto debitis dolore ducimus exercitationem minus molestiae mollitia non quidem quo quos."}
                               img={Img3} data={"25.11-30.11"}></StockItem>
                    <StockItem title={"На вторую пиццу -70%"} descriptions={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur dolorem impedit quia similique,\n" +
                    "                suscipit veritatis vitae voluptatum? Architecto debitis dolore ducimus exercitationem minus molestiae mollitia non quidem quo quos."}
                               img={Img4} data={"25.11-30.11"}></StockItem>
                    <StockItem title={"2+1"} descriptions={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur dolorem impedit quia similique,\n" +
                    "                suscipit veritatis vitae voluptatum? Architecto debitis dolore ducimus exercitationem minus molestiae mollitia non quidem quo quos."}
                               img={Img5} data={"25.11-30.11"}></StockItem>
                    <StockItem title={"На алкоголь 1+1=3"} descriptions={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur dolorem impedit quia similique,\n" +
                    "                suscipit veritatis vitae voluptatum? Architecto debitis dolore ducimus exercitationem minus molestiae mollitia non quidem quo quos."}
                               img={Img6} data={"25.11-30.11"}></StockItem>
                    <StockItem title={"Скидка 50% на бургеры"} descriptions={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur dolorem impedit quia similique,\n" +
                    "                suscipit veritatis vitae voluptatum? Architecto debitis dolore ducimus exercitationem minus molestiae mollitia non quidem quo quos."}
                               img={Img} data={"25.11-30.11"}></StockItem>
                </div>
            </section>
        )
    }
}
export default Stock;