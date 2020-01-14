import React, { Component } from 'react';
class StockItem extends Component{
    render() {
        const {title, descriptions, img, data} = this.props;
        return(
                <div className="stocks-item">
                    <div className="stocks-img">
                        <img src={img} alt="StockItem" className='img-fluid'/>
                    </div>
                    <div className="stocks-info">
                        <h2>{title}</h2>
                        <p>{descriptions}</p>
                        <p>{data}</p>

                    </div>
                </div>

        )
    }
}
export default StockItem;