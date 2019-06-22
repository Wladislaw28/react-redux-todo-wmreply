import React, {Component} from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../../todo-input/input/ToDoInput';
import Button from '../../todo-input/button/Button';
import ToDoListSub from './ToDoListSub';
import {addTaskInSubTask, deleteSubTask, completeSubTask, changeFilter} from '../../../actions/actionCreator';

import './ToDoSub.css';

class ToDoSub extends React.Component{

	state = {
		subtaskText: ''
	};

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			subtaskText: value,
		})
	};

	addTaskInSubTask = e => {
		e.preventDefault();
		const {subtaskText} = this.state;

		if (subtaskText.length > 3) {
			const {addTaskInSubTask} = this.props;

			addTaskInSubTask((new Date()).getTime(), subtaskText, false);

			this.setState({
				subtaskText: ''
			})
		}
	};

	filterSubTasks = (tasksub, activeFilter) => {
		switch (activeFilter) {
			case 'completed':
				return tasksub.filter(task => task.isCompleted);
			case 'active':
				return tasksub.filter(task => !task.isCompleted);
			default:
				return tasksub;
		}
	};

	render(){
		const {subtaskText} = this.state;
		const {completeTask, text, id, deleteTask, isCompleted, isExpansion,
			tasksub, deleteSubTask, completeSubTask, filters } = this.props;
		const isTasksSubExist = tasksub && tasksub.length > 0;
		const filteredSubTasks = this.filterSubTasks(tasksub , filters);


		return(
			<div className="todo-item-sub">
				<li className="todo-item-sub">
					<i onClick={ () => completeTask(id) }
					   className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
					<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
					<div className="sub-todo">
						<div className="sub-todo-form">
							<ToDoInput onChange={this.handleInputChange} value={subtaskText} type="text"
									   className="input__field__subtask" />
							<Button onClick={this.addTaskInSubTask} className="button-subtask">Add task</Button>
						</div>
						{isTasksSubExist && <ToDoListSub completeSubTask={completeSubTask} tasksSubList={filteredSubTasks} deleteSubTask={deleteSubTask} />}
					</div>
					<i onClick={ () => deleteTask(id) } className="fas fa-times" />
				</li>
			</div>
		)
	}
}

export default connect(({tasksub , filters}) => ({
	tasksub,
	filters
}), { addTaskInSubTask, deleteSubTask, completeSubTask, changeFilter })(ToDoSub);
