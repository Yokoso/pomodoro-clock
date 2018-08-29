import React, { Component } from 'react';
import * as timerStates from '../timerStates';

class StartBtn extends Component {
    constructor(){
        super();

        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        if(this.props.timerState === timerStates.NOT_SET)
            return (<button className='btnStart' onClick={this.props.startTimer}>Start</button>)
        if(this.props.timerState === timerStates.RUNNING)
            return (<button className='btnStop' onClick={this.props.pauseTimer}>Pause</button>)
    }

    render(){
        return (
            <div className="startBtn">
                {this.getButton()}
            </div>
        );
    }
};

export default StartBtn;

