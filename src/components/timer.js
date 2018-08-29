import React, { Component } from 'react';
import * as timerStates from '../timerStates';

const leftPad = (val) => {
    if(val < 10) 
        return `0${val}`;
    return `${val}`;
}

class Timer extends Component {
    constructor() {
        super();
        
        this.switchTimer = this.switchTimer.bind(this);
    }

    switchTimer() {
        if(this.props.timerState === timerStates.COMPLETE || this.props.timerState === timerStates.BREAK) {
            return (
                <div className="break">
                    <h4>Break time</h4>
                    <h2 className="time">{`${leftPad(this.props.breakTime.get('hours'))}:${leftPad(this.props.breakTime.get('minutes'))}:${leftPad(this.props.breakTime.get('seconds'))}`}</h2>
                </div>
            )
        }
        else {
            return (
                <div className="work">
                    <h4>Work time:</h4>
                    <h2 className="time">{`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}</h2>
                </div>
            )
        }
    }
    



    render() {
        return (
            <div className="timer">
                {this.switchTimer()}
            </div>
        );
    }
};

export default Timer;