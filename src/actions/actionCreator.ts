import {
    ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_FILTER,
    ADD_TASK_WITH_DATA, SEARCH_TASK, ADD_TASK_SUB, ADD_TASK_IN_SUBTASK, DELETE_SUBTASK, COMPLETE_SUBTASK
} from '../constants';



export const addTask = (id, text, isCompleted) => ({
	type: ADD_TASK,
	id,
	text,
	isCompleted,
});

export const addTaskData = (id, text, data, isCompleted) => ({
    type: ADD_TASK_WITH_DATA,
    id,
    text,
    data,
    isCompleted,
});

export const addTaskSub = (id, text, isCompleted, isExpansion) => ({
    type: ADD_TASK_SUB,
    id,
    text,
    isCompleted,
    isExpansion
});

export const addTaskInSubTask = (id, text, isCompleted) => ({
    type: ADD_TASK_IN_SUBTASK,
    id,
    text,
    isCompleted
});

export const deleteSubTask = id => ({
    type: DELETE_SUBTASK,
    id
});

export const completeSubTask = id => ({
    type: COMPLETE_SUBTASK,
    id
});

export const searchTask = (valueSearch) => ({
    type: SEARCH_TASK,
    valueSearch
});

export const deleteTask = id => ({
	type: DELETE_TASK,
	id
});

export const completeTask = id => ({
	type: COMPLETE_TASK,
	id
});


export const changeFilter = activeFilter => ({
	type: CHANGE_FILTER,
	activeFilter
});
