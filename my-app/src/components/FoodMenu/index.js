import React, { Component } from 'react';
import FoodNavigation from "./FoodNavigation";
import './style.css';
import FoodWrap from "./FoodWrap";
import ModalBtn from "./ModalBtn";

class FoodMenu extends Component{
    state = {
        renderBlock: 'burgers',
        order: []
    }
    renderBlock = (block) =>{
        this.setState({renderBlock: block});
    }
    addToOrder = (item) => this.setState({order: [...this.state.order, item]});
    getOrder = ()=>{return this.state.order}
    render() {
        let links = document.querySelectorAll('.navigation-link');
        links.forEach(item =>{item.classList.remove('active')});
        return(
            <section className="food-menu">
                <FoodNavigation onRender={this.renderBlock}/>
                <FoodWrap  renderBlock={this.state.renderBlock} addOrder={this.addToOrder}/>
                <ModalBtn order={this.getOrder}></ModalBtn>
            </section>
        )
    }
}
export default FoodMenu;