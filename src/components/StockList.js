import React from 'react';
import './stock.css';
import { Link } from "react-router-dom";

class StockListItem extends React.Component{
    render(){
        const {stock,stockName} = this.props
        return (
            <div className="StockListItem">
            <ul>
                {
                    stock.map((stock)=>(
                        <li key={stock}> <Link to="/stock" onClick={(event) => stockName(stock)}>
                      {stock}
                      </Link></li>
                    ))
                }
            </ul>
            </div>
        )
    }
}
export default StockListItem;
