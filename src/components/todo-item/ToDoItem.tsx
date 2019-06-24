import * as React from 'react';
import {completeTask, deleteTask} from '../../actions/actionCreator';

import './ToDoItem.css';

export interface ToDoItemProps {
    id: string;
    text: string;
    isCompleted: boolean;
    completeTask: typeof completeTask;
    deleteTask: typeof deleteTask;
    typeTask: string;
}

class ToDoItem extends React.Component<ToDoItemProps,{}>{

	render(){
		const {completeTask, isCompleted, deleteTask, id, text, typeTask} = this.props;
		return(
			<div className="todo-item">
				 		<li  className='todo-item'>
				 			<i onClick={ () => completeTask(id) }
							   className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
				 			<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
				 			<i onClick={ () => deleteTask(id) } className="fas fa-times" />
				 		</li>
			</div>
		)
	}
}

export default ToDoItem;
