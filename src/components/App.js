import React, { Component } from 'react';
import moment from 'moment';
import '../style/App.css';
import Title from './title';
import Options from './options';
import Timer from './timer';
import StartBtn from './startBtn';
import ResetBtn from './resetBtn';
import About from './about';
import * as timerStates from '../timerStates';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      breakTime: moment.duration(5, 'minutes'),
      userBreakTime: null,
      timerState: timerStates.NOT_SET,
      timer: null
    }

    this.setBaseTime = this.setBaseTime.bind(this);
    this.setBreakTime = this.setBreakTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  setBaseTime(newBaseTime){
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime
    });
  }
  setBreakTime(newBreakTime){
    this.setState({
      breakTime: newBreakTime,
      userBreakTime: newBreakTime
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.countDown, 1000)
    });
  }

  countDown() {
    if (this.state.currentTime.get('hours') === 0 
        && this.state.currentTime.get('minutes') === 0 
        && this.state.currentTime.get('seconds') === 0) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.BREAK,
      timer: null
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime)
    });
  }
  pauseTimer() {
    clearTimeout(this.state.timer);
    this.setState({
      timerState: timerStates.NOT_SET
    })
  }

  
  render() {
    return (
      <div className="App">
        <Title />
        {
          (this.state.timerState !== timerStates.RUNNING
          || this.state.timerState === timerStates.BREAK
          )
          &&
          (<Options 
          baseTime={this.state.baseTime} 
          setBaseTime={this.setBaseTime}
          breakTime={this.state.breakTime}
          setBreakTime={this.setBreakTime} />)
        }
        <Timer 
          currentTime={this.state.currentTime} 
          breakTime={this.state.breakTime}
          timerState={this.state.timerState}
          setBreak={this.state.setBreak} />
        <StartBtn 
          startTimer={this.startTimer} 
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
          pauseTimer={this.pauseTimer} />
        <ResetBtn  
          stopTimer={this.stopTimer}/>
        <About />
      </div>
    );
  }

  
}

export default App;
