import React from 'react';
import logo from './logo.svg';
import Greeting from './components/Greeting';
import { Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import StockList from './components/StockList';
import DisplayStock from './components/DisplayStock';
import './App.css';

class App extends React.Component {
  state = {
    stocks: ["MOMO", "TPL", "MU","CART","NFLX","PAYC","NVDA","NXST","TRTN","SSNC"],
    copyStocks: [],
    favourite : true,
    stockName:''
  };

  componentDidMount = () =>{
    this.setState({
      copyStocks : this.state.stocks
    })
  }

  setFavourite = () =>{
    this.setState({
       favourite : !this.state.favourite
    })
  }

  setStockName = (name)=>{
    this.setState({
      stockName : name
    })
  }

  searchStocks = (query) => {
    if(query.length > 0){
      const data = this.state.stocks.filter(function(item){
          return item.toLowerCase().match( query );
      });
      this.setState({
        stocks : data
      })
    }else{
      this.setState({
        stocks : this.state.copyStocks
      })
    } 
  };
  render(){
    const value = this.state.value;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Addepar Take Home Test - Stock Tracking Application

          <Route exact path="/" render={()=>(
        <div>
        <Greeting />
        <SearchBar value={ value }
        onChange={ this.searchStocks }/>
        <StockList stock={ this.state.stocks } stockName = {this.setStockName}/></div>
      )}/>
      <Route
        exact
        path="/stock"
        render={() => (
          <DisplayStock favourite = {this.setFavourite} stockName = {this.state.stockName} isFavourite = {this.state.favourite}
          />
        )}/>
        </p>
      </header>
      
    </div>
  );
        }
}

export default App;
