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
     var hour = date.getHours();
     const min = date.getMinutes();
     const time = min/60;
     hour = hour +time;
     this.setState({
        hour,
        min
     });
    }
  
    render(){
      const {hour} = this.state;
      return (
        <div className='App'>
          <h2>{ (hour >= 9.5) && (hour <= 16)  ? `Market is currently open!` 
                                                  : `Market is currently closed!`}</h2>
        </div>
      );
    }
  
  }
  
  export default Greeting;
