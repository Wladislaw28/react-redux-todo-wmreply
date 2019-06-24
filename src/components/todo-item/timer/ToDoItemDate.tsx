import * as React from 'react';
import Button_Date from './timer-components/Button_Date';
import TimerDisplay from './timer-components/TimerDisplay';
import {completeTask, deleteTask} from '../../../actions/actionCreator';


import './ToDoItemDate.css';

export interface ToDoItemDateProps {
    completeTask: typeof completeTask;
    deleteTask: typeof deleteTask;
    id: string;
    text: string;
    data: string;
    isCompleted: boolean;
    typeTask: string;
}

export interface ToDoItemDateState {
    timer: any;
    timeLeft: any;
    isCompletedDate: boolean;
}

class ToDoItemDate extends React.Component<ToDoItemDateProps, ToDoItemDateState>{

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
		const {completeTask, deleteTask, id, text, data, isCompleted, typeTask} = this.props;
		const {timeLeft, isCompletedDate} = this.state;
		 let data_sec = Date.parse(data) / 100000;//не знаю, как высчитать разность между датами( 2- чник)))

		return(
			<div className="todo-item-div">
				<li  className='todo-item-date'>
					<i onClick={ () => completeTask(id) }
					   className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
					<span className={isCompletedDate ? 'completed text' : 'text'}>{text}</span>
					<Button_Date time={data_sec} startTimer={this.startTimer} />
					<TimerDisplay timeLeft = {timeLeft}/>
					<i onClick={ () => deleteTask(id) } className="fas fa-times" />
				</li>
			</div>
		)
	}
}

export default ToDoItemDate;
