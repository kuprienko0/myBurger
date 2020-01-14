import React, { Component } from 'react'
import ModalWindow from "./ModalWindow";
import Cart from '../../img/iconmonstr-basket-3-240.png'

class ModalBtn  extends Component{
    state = {
        getOder: this.props.order
    }
    render() {
        return(
            <div>
                <button type="button" className="btn btn-primary cart" data-toggle="modal"
                        data-target=".bd-example-modal-lg">
                    <img src={Cart} alt="Cart"/>
                </button>
                <ModalWindow order={this.state.getOder}/>
            </div>
        )
    }

}
export default ModalBtn;

