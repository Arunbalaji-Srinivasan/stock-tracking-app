import React from 'react';

class Greeting extends React.Component {
    state = {
      hour: null,
      min : null
    }
    
    componentDidMount() {
      this.getHour()
    }
  
    getHour = () => {
     const date = new Date();
     const hour = date.getHours();
     const min = date.getMinutes();
     this.setState({
        hour,
        min
     });
    }
  
    render(){
      const {hour, min} = this.state;
      return (
        <div className='App'>
          <h2>{hour >= 9 && min >= 30 && hour <=16 ? `Market is currently open! Current Time - ${hour}:${min}` 
                                                   : `Market is currently closed! Current Time - ${hour}:${min}`}</h2>
        </div>
      );
    }
  
  }
  
  export default Greeting;
