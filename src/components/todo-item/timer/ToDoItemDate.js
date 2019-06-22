import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button_Date from './timer-components/Button_Date';
import TimerDisplay from './timer-components/TimerDisplay';

import './ToDoItemDate.css';

class ToDoItemDate extends React.Component{

	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this);
		this.state = {
			timeLeft: null,
			timer: null,
			isCompletedDate: false
		};
	}

	startTimer(timeLeft) {
		clearInterval(this.state.timer);
		let timer = setInterval(() => {
			let timeLeft = this.state.timeLeft - 1;
			if (timeLeft === 0) {
				this.setState({
					isCompletedDate: true
				});
				clearInterval(timer);
			}
			this.setState({
				timeLeft: timeLeft
			});
		}, 1000);
		return this.setState({timeLeft: timeLeft, timer: timer});
	}


	render(){
		const {completeTask, deleteTask, id, text, data, isCompleted} = this.props;
		const {timeLeft, isCompletedDate} = this.state;
		let data_sec = Date.parse(data) / 100000;

		return(
			<div className="todo-item-div">
				<li  className='todo-item-date'>
					<i onClick={ () => completeTask(id) }
					   className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
					<span className={isCompletedDate ? 'completed text' : 'text'}>{text}</span>
					<Button_Date time={10} startTimer={this.startTimer} />
					<TimerDisplay timeLeft = {timeLeft}/>
					<i onClick={ () => deleteTask(id) } className="fas fa-times" />
				</li>
			</div>
		)
	}
}

ToDoItemDate.propTypes = {
	text: PropTypes.string,
	data: PropTypes.string,
	isCompleted: PropTypes.bool,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func,
	id: PropTypes.number
};

ToDoItemDate.defaultProps = {
	text: '',
	data: '1999-08-30',
	isCompleted: false,
	deleteTask: () => {},
	completeTask: () => {},
	id: 0
};

export default ToDoItemDate;
