import * as React from 'react';
import ToDoItem from '../ToDoItem';
import {deleteSubTask, completeSubTask} from '../../../actions/actionCreator';

import './ToDoListSub.css';

export interface TasksSubListProps {
    id: string;
    text: string;
    isCompleted: boolean;
    typeTask: string;
}

export interface ToDoListSubProps {
    tasksSubList: TasksSubListProps[];
    deleteSubTask: typeof deleteSubTask;
    completeSubTask: typeof completeSubTask;
}

const ToDoListSub = ({tasksSubList, deleteSubTask, completeSubTask} : ToDoListSubProps) => (
	<ul className="todo-list-sub">
		{tasksSubList.map(({ id, text, isCompleted, typeTask }) =>(
				<ToDoItem completeTask={completeSubTask} deleteTask={deleteSubTask} id={id} key={id} text={text}
			 				isCompleted={isCompleted} typeTask={typeTask}/>
			))}
	</ul>
);

export default ToDoListSub;
