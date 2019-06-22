import { combineReducers } from 'redux';
import tasks from './tasks';
import filters from './filters';
import tasksub from './tasksub';

const rootReducer = combineReducers({tasks, filters, tasksub});

export default rootReducer;
