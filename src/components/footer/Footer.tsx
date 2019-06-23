import React from 'react';
import {FILTERS_BTN} from '../../constants';
import {changeFilter} from '../../actions/actionCreator';

import './Footer.css';

export interface FooterProps{
    amount: number;
    activeFilter: string;
    changeFilter: typeof changeFilter;
}

const Footer:  React.FunctionComponent<FooterProps> = ({amount, activeFilter, changeFilter}) => (
	<div className="footer">
		<span className="amount">{`${amount} Task left`}</span>
		<div className="btn-group">
			{FILTERS_BTN.map(({id, text}) =>
				<button onClick={() => {changeFilter(id)}} key={id}
						className={id === activeFilter ? "filter-btn active" : 'filter-btn'}>
					{text}</button>
			)}
		</div>
	</div>
);

export default Footer;
