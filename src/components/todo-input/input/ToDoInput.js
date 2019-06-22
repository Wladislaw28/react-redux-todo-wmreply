import React from 'react';
import PropTypes from 'prop-types';

import './ToDoInput.css';

const ToDoInput = ({ value, onChange, onKeyPress, className, type }) => (
	<div className="todo-input-wrapper">
		<span className="input input--isao">
			<input
				type={type}
				className={className}
				onChange={onChange}
				value={value}
				onKeyPress={onKeyPress}
			/>
			<label className="input__label input__label--isao">
				<span className="input__label-content input__label-content--isao">Enter text to task</span>
			</label>
		</span>
	</div>
);

ToDoInput.propTypes = {
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	value: PropTypes.string,
	type: PropTypes.string,
};

ToDoInput.defaultProps = {
	onChange: () => {},
	onKeyPress: () => {},
	value: '',
	type: '',
};

export default ToDoInput;

