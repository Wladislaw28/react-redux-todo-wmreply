import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../todo-item/ToDoItem';
import ToDoItemDate from '../todo-item/timer/ToDoItemDate';
import ToDoSub from '../todo-item/sub/ToDoSub';

import './ToDoList.css';

const ToDoList = ({tasksList, deleteTask, completeTask}) => (

	// if (tasksList.data !== ''){
	// 	return(
	// 		<ul className="todo-list">
	// 			{tasksList.map(({ id, text, data, isCompleted }) => (
	// 				<ToDoItemDate completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text} data={data}
	// 				isCompleted={isCompleted} />
	// 			))}
	// 		</ul>
	// 	)
	// } else {
	// 	return(
	// 		<ul className="todo-list">
	// 			{tasksList.map(({ id, text, isCompleted , isExpansion }) => (
	// 				<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
	// 				isCompleted={isCompleted} />,
	// 					<ToDoSub completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
	// 							 isCompleted={isCompleted} isExpansion={isExpansion} />
	// 			))}
	// 		</ul>
	// 	)
	// }


	<ul className="todo-list">
		{tasksList.map(({ id, text, data, isCompleted, isExpansion }) => (

							<ToDoSub completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
										 isCompleted={isCompleted} isExpansion={isExpansion} />

		))}
	</ul>
);

ToDoList.propTypes = {
	tasksList: PropTypes.array,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func
};

ToDoList.defaultProps = {
	tasksList: [],
	deleteTask: () => {},
	completeTask: () => {}
};


export default ToDoList;

