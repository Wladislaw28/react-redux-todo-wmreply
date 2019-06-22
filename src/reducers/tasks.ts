import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, ADD_TASK_WITH_DATA, SEARCH_TASK, ADD_TASK_SUB} from '../constants';
import {load} from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });


// @ts-ignore
if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
	TASKS = {
		tasks: [],
	}
}

// @ts-ignore
const tasks = (state = TASKS.tasks, { id, text, data, isCompleted, valueSearch, isExpansion, type }) => {
	switch (type) {
		case ADD_TASK :
			return [
				...state, {
					id,
					text,
					isCompleted,
				}
			];
        case ADD_TASK_WITH_DATA:
            return [
                ...state, {
                    id,
                    text,
                    data,
                    isCompleted,
                }
            ];
        case ADD_TASK_SUB:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                    isExpansion
                }
            ];
		case DELETE_TASK :
			return [...state].filter(task => task.id !== id);
        case SEARCH_TASK:
            return [...state].filter(task =>
                 task.text.toLowerCase().includes(valueSearch));
		case COMPLETE_TASK :
			return [...state].map(task => {
				if( task.id === id){
					task.isCompleted = !task.isCompleted;
				}
				return task;
			});
		default:
			return state;
	}
};

export default tasks;
