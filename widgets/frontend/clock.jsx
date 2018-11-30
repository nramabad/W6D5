import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }
  
  render() {
    return (
      <>
        <h1>Clock</h1>
        <h2>{this.state.time.toTimeString()}</h2>
      </>
    );
  }
  
  tick() {
    this.setState({time: new Date()});
  }
  
  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.handle);
    this.handle = 0;
  }
}

export default Clock;