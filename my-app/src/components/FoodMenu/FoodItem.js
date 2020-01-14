import React, { Component } from 'react';

class FoodItem extends Component{
    state = {
        count: 1,
        id: this.props.id,
        addOrder: this.props.addOrder
    }
    changeCount(e, index){
        e.preventDefault();
        this.setState({count: this.state.count + index})
    }
    addToCart(e){
        e.preventDefault();
        this.state.addOrder({id: this.state.id, count: this.state.count})
    }
    render() {
        const {name, description, img, weigh, price} = this.props;
        return(
            <div className="food-item">
                <div className="food-img">
                    <img src={img} alt="Pizza" className="img-fluid"/>
                </div>
                <div className="food-info">
                    <h3 className="food-name">{name}</h3>
                    <p className="food-description"><span>Состав: </span>
                        {
                            description.map((elem, key)=>{
                                return `${elem}, `;
                            })
                        }
                    </p>
                </div>
                <div className="food-footer">
                    <div className="food-ttx">
                        <p>{weigh} г.</p>
                        <p className="price">{price} ₴</p>
                    </div>
                    <div className="food-order-counter">
                        <a href="#" className="food-minus" onClick={e =>{this.changeCount(e, -1)}}></a>
                        <p className="counterValue">{this.state.count}</p>
                        <a href="#" className="food-plus" onClick={e =>{this.changeCount(e, 1)}}></a>
                        <a href="#" className="food-add" onClick={e=>{this.addToCart(e)}}>Купить</a>
                    </div>

                </div>
            </div>
        )
    }
}
export default FoodItem;