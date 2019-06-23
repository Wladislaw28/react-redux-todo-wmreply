import React from 'react';
import {searchTask} from '../../actions/actionCreator';
import ToDo from '../../containers/Todo';

import './SearchBar.css';

export interface SearchBarProps {
    searchText: string;
    searchTask: typeof searchTask;
    type: string;
    update: typeof ToDo;
}

const SearchBar: React.SFC<SearchBarProps> = ({ searchText , searchTask, type, update}) => {

	const dataSearch = e => {
		const value = e.target.value.toLowerCase();

		searchTask(value);

		update({
			searchText: value
		});
	};

	return(
		<div className="searchbar">
			<span className="input input--isao">
			<input
				value={searchText}
				type={type}
				className="input__field__search input__field--isao"
				onChange={dataSearch}
			/>
				<label className="input__label input__label--isao">
					<span className="input__label-content input__label-content--isao">Search task by text...</span>
				</label>
			</span>
		</div>
		)
};


export default SearchBar
