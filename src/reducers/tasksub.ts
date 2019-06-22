import {ADD_TASK_IN_SUBTASK, DELETE_SUBTASK, COMPLETE_SUBTASK} from '../constants';
import {load} from 'redux-localstorage-simple';

let TASKSUB = load({ namespace: 'todo-list-sub' });

// @ts-ignore
if (!TASKSUB || !TASKSUB.tasksub || !TASKSUB.tasksub.length) {
    TASKSUB = {
        tasksub: [],
    }
}

// @ts-ignore
const tasksub = (state = TASKSUB.tasksub, {id, text, isCompleted, type}) => {
    switch (type) {
        case ADD_TASK_IN_SUBTASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                }
            ];
        case DELETE_SUBTASK:
            return [...state].filter(task => task.id !== id);
        case COMPLETE_SUBTASK:
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

export default tasksub
