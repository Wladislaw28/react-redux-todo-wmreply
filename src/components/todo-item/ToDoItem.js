import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ToDoItem.css';

class ToDoItem extends React.Component{

	render(){
		const {completeTask, isCompleted, deleteTask, id, text} = this.props;
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

ToDoItem.propTypes = {
	text: PropTypes.string,
	isCompleted: PropTypes.bool,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func,
	id: PropTypes.number
};

ToDoItem.defaultProps = {
	text: '',
	isCompleted: false,
	deleteTask: () => {},
	completeTask: () => {},
	id: 0
};

export default ToDoItem;
