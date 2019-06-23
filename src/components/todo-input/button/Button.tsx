import * as React from 'react';
import * as classNames from 'classnames';

import './Button.css';

export interface ButtonProps {
    children: string;
    onClick: (e: any) => void
    className: string;
    disabled: boolean;
}

const Button = ({ onClick, className, disabled, ...attrs}: ButtonProps) => {

	const onClickAction = e => {
		if (disabled) {
			e.preventDefault();
		} else {
			return onClick(e);
		}
	};

	const classes = classNames(
		'button button--pipaluk button--text-thick',
		className
	);

	const Tag = 'button';

	return (
		<Tag
			className={classes}
			disabled={disabled}
			onClick={onClickAction}
			{...attrs}
		 />
	);
};



export default Button;
