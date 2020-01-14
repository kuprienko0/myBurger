import React, {Component} from 'react';
import FoodItem from "./FoodItem";

class FoodWrap extends Component{
    state ={
        renderBlock: this.props.renderBlock,
        categories: [
            {
                name:'burgers',
                title:'Бургеры:'
            },
            {
                name:'pizza',
                title:'Пицца:'
            },
            {
                name:'potatoes',
                title:'Гарнир:'
            },
            {
                name:'sets',
                title:'Сеты:'
            },
            {
                name:'drinks',
                title:'Напитки:'
            }
        ],
        data: null,
        addOrder: this.props.addOrder
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.renderBlock !== prevState.renderBlock) return {renderBlock:nextProps.renderBlock}
         else return null;
    }

    componentDidMount = async() =>{
        fetch('http://www.json-generator.com/api/json/get/bViQHBLQpu?indent=2')
            .then((res)=>res.json())
            .then((res)=>this.setState({data: res}));
    }

    render() {
        const {data, renderBlock, categories} = this.state;
        if(data == null){
            return(
                <div className='foodWrap container'>
                    <h2 className='food-header'>
                        {
                            categories.map((elem,key)=>{
                                if(elem.name == renderBlock)
                                    return elem.title;
                            })
                        }
                    </h2>
                    <div id="preloader" className='food-header'>
                        <div id="loader"></div>
                        <h2>Получение товаров...</h2>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='foodWrap container'>
                    <h2 className='food-header'>
                        {
                            categories.map((elem,key)=>{
                                if(elem.name == renderBlock)
                                    return elem.title;
                            })
                        }
                    </h2>
                    <div className='foodRow row'>
                    {
                        data.map((elem, key)=>{
                            if(elem.category == renderBlock)
                            return <FoodItem key={key} name={elem.name} description={elem.ingredients} img={elem.img} id={elem.id} weigh={elem.weigh} price={elem.price} addOrder={this.state.addOrder}></FoodItem>
                        })
                    }
                    </div>
                </div>
            )
        }
    }
}

export default FoodWrap;