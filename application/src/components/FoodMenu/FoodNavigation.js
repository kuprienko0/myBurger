import React, { Component } from 'react';
import $ from 'jquery';
import logo from '../../img/logo.png';

class FoodNavigation extends Component{
    state = {
        active: 'burgers',
        onRender: this.props.onRender,
    }
    changeActivePointMenu = (e)=> {
        e.preventDefault();
        $(`li.food-link[data-name=${this.state.active}]`).removeClass('foodActive');
        new Promise((resolve, reject)=>{
            this.setState({active: e.target.getAttribute('data-name')})
            resolve(this.state)
        }).then((res)=>{this.state.onRender(this.state.active);})
        $(e.target).parent().addClass('foodActive')
    }
    render() {
        return(
            <nav>
                <ul>
                    <li className="food-link foodActive" data-name={'burgers'}><a href="#" onClick={e=>{this.changeActivePointMenu(e)}} data-name={'burgers'}></a>
                        <div className="food-name"><h2>Бургеры</h2></div>
                    </li>
                    <li className="food-link" data-name={'pizza'}><a href="#" onClick={e=>{this.changeActivePointMenu(e)}} data-name={'pizza'}></a>
                        <div className="food-name"><h2>Пицца</h2></div>
                    </li>
                    <li className="food-link" data-name={'potatoes'}><a href="#" onClick={e=>{this.changeActivePointMenu(e)}} data-name={'potatoes'}></a>
                        <div className="food-name"><h2>Гарниры</h2></div>
                    </li>
                    <li className="food-link" data-name={'sets'}><a href="#" onClick={e=>{this.changeActivePointMenu(e)}} data-name={'sets'}></a>
                        <div className="food-name"><h2>Сеты</h2></div>
                    </li>
                    <li className="food-link" data-name={'drinks'}><a href="#" onClick={e=>{this.changeActivePointMenu(e)}} data-name={'drinks'}></a>
                        <div className="food-name"><h2>Напитки</h2></div>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default FoodNavigation;