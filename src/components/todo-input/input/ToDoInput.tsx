import * as React from 'react';

import './ToDoInput.css';

export interface ToDoInputProps {
    value: string;
    className: string;
    type: string;
    onChange: ({ target: { value } }: { target: { value: any; }; }) => void;
}

const ToDoInput: React.FunctionComponent<ToDoInputProps> = ({ value, onChange, className, type }) => (
	<div className="todo-input-wrapper">
		<span className="input input--isao">
			<input
				type={type}
				className={className}
				onChange={onChange}
				value={value}
			/>
			<label className="input__label input__label--isao">
				<span className="input__label-content input__label-content--isao">Enter text to task</span>
			</label>
		</span>
	</div>
);

export default ToDoInput;

