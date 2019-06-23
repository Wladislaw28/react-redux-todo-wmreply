import * as React from 'react';
import './TimerDisplay.css';

export interface TimerDisplayProps{
    timeLeft: number;
}

class TimerDisplay extends React.Component<TimerDisplayProps,{}> {
	render() {
		return <h1 className="display">left <br/>  <span>{this.props.timeLeft} </span> <br/> seconds</h1>
	}
}

export default TimerDisplay;
