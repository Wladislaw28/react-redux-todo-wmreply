import React, {Component} from 'react';
import './TimerDisplay.css';

class TimerDisplay extends React.Component {
	render() {
		return <h1 className="display">left <br/>  <span>{this.props.timeLeft} </span> <br/> seconds</h1>
	}
}

export default TimerDisplay;
