import React from 'react';
import ToDoItem from '../ToDoItem';

import './ToDoListSub.css';

const ToDoListSub = ({tasksSubList, deleteSubTask, completeSubTask}) => (
	<ul className="todo-list-sub">
		{tasksSubList.map(({ id, text, isCompleted }) =>(
				<ToDoItem completeTask={completeSubTask} deleteTask={deleteSubTask} id={id} key={id} text={text}
			 				isCompleted={isCompleted} />
			))}
	</ul>
);

export default ToDoListSub;
