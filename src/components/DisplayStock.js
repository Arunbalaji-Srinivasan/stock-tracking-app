import React from 'react';
import './stock.css';


class DisplayStock extends React.Component{
    render(){
        const {stockName,favourite,isfavourite}= this.props
        const favour = isfavourite === true ? "Favourite" : "Not Favourite"
        return (
            <div className="StockListItem">
            {stockName}
            <button className="SearchBar__Button" onClick={ favourite }>Add to Favourite</button>
            {favour}
            </div>
        )
    }
}
export default DisplayStock;