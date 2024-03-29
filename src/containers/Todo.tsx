import * as React from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../components/todo-input/input/ToDoInput';
import Button from '../components/todo-input/button/Button';
import Footer from '../components/footer/Footer';
import ToDoList from '../components/todo-list/ToDoList';
import Searchbar from '../components/search/SearchBar';
import {addTask, addTaskData, addTaskSub, deleteTask, searchTask, completeTask, changeFilter} from "../actions/actionCreator";
import './Todo.css';

export interface ToDoProps {
    addTask: typeof addTask;
    addTaskData: typeof addTaskData;
    addTaskSub: typeof addTaskSub;
    deleteTask: typeof deleteTask;
    searchTask: typeof searchTask;
    completeTask: typeof completeTask;
    changeFilter: typeof changeFilter;
    tasks: [];
    filters: any;
}

export interface ToDoState {
    taskText: string;
    taskData: string;
    searchText: string;
    isExpansion: boolean;
}

class ToDo extends React.Component<ToDoProps,ToDoState> {

	state = {
		taskText: '',
		taskData: '',
		searchText: '',
		isExpansion: false
	};

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			taskText: value,
		})
	};

	handleInputDataChange = ({ target: { value } }) => {
		this.setState({
			taskData: value,
		})
	};

	handleCheckBoxChange = () => {
		this.setState({
			isExpansion: !this.state.isExpansion,
		});
	};

	addTask = (e) => {
		e.preventDefault();
		const { taskText } = this.state;

		if (taskText.length > 3) {
			const { addTask } = this.props;

			addTask((new Date()).getTime(), taskText, false, 'simpletask');

			this.setState({
				taskText: ''
			})
		}
	};

	addTaskData = (e) => {
		e.preventDefault();
		const { taskText, taskData } = this.state;

		if (taskText.length > 3) {
			const { addTaskData } = this.props;

			addTaskData((new Date()).getTime(), taskText, taskData, false, 'datatask');

			this.setState({
				taskText: '',
				taskData: ''
			})
		}
	};

	addTaskSub = (e) => {
		e.preventDefault();
		const { taskText, isExpansion } = this.state;

		if (taskText.length > 3) {
			const { addTaskSub } = this.props;

            addTaskSub((new Date()).getTime(), taskText, false, true, 'subtask');

			this.setState({
				taskText: '',
				isExpansion: false
			})
		}
	};

	getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length-1;

	filterTasks = (tasks, activeFilter) => {
		switch (activeFilter) {
			case 'completed':
				return tasks.filter(task => task.isCompleted);
			case 'active':
				return tasks.filter(task => !task.isCompleted);
			default:
				return tasks;
		}
	};

	updateData(config) {
		this.setState(config);
	};


	render() {
		const { taskText, taskData, searchText, isExpansion } = this.state;
		const { tasks, deleteTask, completeTask, filters, changeFilter, searchTask } = this.props;
		const isTasksExist = tasks && tasks.length > 0;
		const filteredTasks = this.filterTasks(tasks, filters);
		const taskCounter = this.getActiveTasksCounter(tasks);

		return (
			<div className="todo-wrapper">
				<Searchbar update={this.updateData.bind(this)} searchTask={searchTask} type="text" searchText={searchText}   />

				<div className="todo-form">

					<ToDoInput onChange={this.handleInputChange} value={taskText} type="text"
							   className='input__field input__field--isao' />
					<ToDoInput onChange={this.handleInputDataChange} value={taskData} type="date"
							   className='input__field input__field--isao' />
					<h2 className="h2_checkbox">Expand the task for subtasks?</h2>
					<input id="checkbox" type="checkbox" className="input input-checkbox"
                           checked={isExpansion} onChange={this.handleCheckBoxChange} />
					<Button disabled={false} className="button button--pipaluk button--text-thick"
                            onClick={this.addTask}>Add Simple task</Button>
					<Button disabled={false} className="button button--pipaluk button--text-thick"
                            onClick={this.addTaskData}>Add task with data</Button>
					<Button disabled={false} className="button button--pipaluk button--text-thick"
                            onClick={this.addTaskSub}>Add Expansion Task</Button>

				</div>
				{isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
				{isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} deleteTask={deleteTask} />}
			</div>
		);
	}
}

export default connect(({tasks, filters}) => ({
	tasks,
	filters,
}), { addTask, addTaskData, addTaskSub, searchTask,
	deleteTask, completeTask, changeFilter})(ToDo);
