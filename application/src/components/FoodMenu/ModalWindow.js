import React, { Component } from 'react'

class ModalWindow  extends Component{
    state = {
        order: this.props.order,
        data: null,
    }
    componentDidMount = async() =>{
        fetch('http://www.json-generator.com/api/json/get/bViQHBLQpu?indent=2')
            .then((res)=>res.json())
            .then((res)=>this.setState({data: res}));
    }

    render() {
        const orders = this.state.order();
        let price = 0
        return(
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ваш заказ:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {orders.map(el => {
                                price+=this.state.data[el.id-1].price*el.count
                                return(
                                    <div>
                                        <p>Наименование: {this.state.data[el.id-1].name}</p>
                                        <p>Колличество: {el.count}</p>
                                    </div>
                                )
                            })}
                            <p>Общая сумма: {price}</p>
                        </div>
                        <div className="modal-footer">
                            <form action="#">
                            <div className="modal-footer-input">
                            <input type="text" required placeholder="Ваше имя:"/>
                            <input type="text" required placeholder="Номер телефона:" maxLength="10"/>
                            <input type="text" required placeholder="№ столика"/>
                            </div>
                            <div className="modal-footer-button">
                            <button type="submit" className="btn btn-primary">Подтвердить заказ</button>
                            <button type="submit" className="btn btn-secondary" data-dismiss="modal">Отменить</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default ModalWindow;

