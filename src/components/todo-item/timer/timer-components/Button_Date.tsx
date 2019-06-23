import * as React from 'react';
import './Button_Date.css'

export interface Button_Date_Props {
    time: number;
    startTimer: (e: number) => void;
}

class Button_Date extends React.Component<Button_Date_Props, {}>{

	handleButtonDate(){
		return this.props.startTimer(this.props.time)
	}

	render(){
		return <button className="button button--pipaluki button--text-thicki"
                       onClick={this.handleButtonDate.bind(this)}>Start Task</button>
	}
}

export default Button_Date;
