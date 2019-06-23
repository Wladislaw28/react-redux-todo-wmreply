import * as React from 'react';
import ToDoItem from '../todo-item/ToDoItem';
import ToDoItemDate from '../todo-item/timer/ToDoItemDate';
import ToDoSub from '../todo-item/sub/ToDoSub';

import {deleteTask, completeTask} from '../../actions/actionCreator';
import './ToDoList.css';

export interface TasksListProps {
    id: string;
    text: string;
    data: string;
    isCompleted: boolean;
    isExpansion: boolean;
}

export interface ToDoListProps {
    tasksList: TasksListProps[];
    deleteTask: typeof deleteTask;
    completeTask: typeof completeTask;
}

const ToDoList = ({tasksList, deleteTask, completeTask} : ToDoListProps) => (

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
							<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
							isCompleted={isCompleted} />
		))}
	</ul>
);

export default ToDoList;

