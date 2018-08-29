import React, { Component } from 'react';

class Options extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleBreak = this.handleBreak.bind(this);
    }

    handleChange(event) {
        const newBaseTime = this.props.baseTime;

        if (event.target.id === 'workHours') 
            newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(event.target.value, 10), 'hours');
        if (event.target.id === 'workMinutes')
            newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(event.target.value, 10), 'minutes');

        this.props.setBaseTime(newBaseTime);
    }

    handleBreak(event) {
        const newBreakTime = this.props.breakTime;

        if (event.target.id === 'breakHours') 
            newBreakTime.subtract(newBreakTime.get('hours'), 'hours').add(parseInt(event.target.value, 10), 'hours');
        if (event.target.id === 'breakMinutes')
            newBreakTime.subtract(newBreakTime.get('minutes'), 'minutes').add(parseInt(event.target.value, 10), 'minutes');
            
        this.props.setBreakTime(newBreakTime);
    }



    render(){
        return (
            <div className="options">
                <p>Pomodoro settings</p>
                <p>Break time: </p>
                <label htmlFor="breakHours">Hours: </label>
                <input 
                    type="number" 
                    id='breakHours' 
                    className="breakHours" 
                    defaultValue={ this.props.breakTime.get('hours') }
                    onChange={ this.handleBreak }
                />
                <label htmlFor="breakMinutes">Minutes: </label>
                <input 
                    type="number"
                    id='breakMinutes' 
                    className="breakMinutes" 
                    defaultValue={ this.props.breakTime.get('minutes') } 
                    onChange={ this.handleBreak }
                />
                <p>Work time: </p>
                <label htmlFor="workHours">Hours: </label>
                <input 
                    type="number" 
                    id='workHours' 
                    className="workHours" 
                    defaultValue={ this.props.baseTime.get('hours') }
                    onChange={ this.handleChange }
                />
                <label htmlFor="workMinutes">Minutes: </label>
                <input 
                    type="number" 
                    id='workMinutes' 
                    className="workMinutes" 
                    defaultValue={ this.props.baseTime.get('minutes') } 
                    onChange={ this.handleChange }
                />
            </div>
        );
    };
};

export default Options;