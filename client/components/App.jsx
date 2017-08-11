import React, { Component } from 'react'

import Binary from './Binary'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      classNameState: 0
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div >
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        <div>Binary: <Binary time = {this.state.secondsElapsed}/> </div>
        <div className='color-container'>

        </div>
        </div>

    );
  }
}

export default App
