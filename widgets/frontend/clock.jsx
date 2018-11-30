import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }
  
  addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
  
  render() {
    const hours = this.addZero(this.state.time.getHours());
    const minutes = this.addZero(this.state.time.getMinutes());
    const seconds = this.addZero(this.state.time.getSeconds());
    
    return (
      <div className="clock">
        <h1>Clock</h1>
        <section className="clock-body">
          <div>
            <p>Date</p>
            <p>{this.state.time.toLocaleDateString("en-US")}</p>
          </div>
          
          <div>
            <p>Time</p>
            <p>{hours}:{minutes}:{seconds}</p>
          </div>
        </section>
      </div>
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