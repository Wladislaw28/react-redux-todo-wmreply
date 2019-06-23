import React from 'react';
import classNames from 'classnames';

import './Input.css';

export interface InputProps {
    id: string | undefined;
    className: string;
    label: HTMLDivElement;
    error: string;
    name: string;
}

const Input : React.FunctionComponent<InputProps> = ({id, className, label, error, ...attrs}) => {
	const classes = classNames(
		'input',
		className,
		{ error },
	);

    return (
		<div className="inputWrapper">
			<div className="labelsWrapper">
				{label
				&& <label className="inputLabel">{label}</label>
				}
			</div>
			<input
				name={id}
				id={id}
				className={classes}
				{...attrs}
			/>
			{error
			&& <span className="inputError">{error}</span>
			}
		</div>
	);
};

export default Input;
