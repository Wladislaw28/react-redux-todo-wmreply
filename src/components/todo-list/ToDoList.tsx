import * as React from 'react';
import ToDoItem from '../todo-item/ToDoItem';
import ToDoItemDate from '../todo-item/timer/ToDoItemDate';
import ToDoSub from '../todo-item/sub/ToDoSub';

import {deleteTask, completeTask} from '../../actions/actionCreator';
import './ToDoList.css';

export interface TasksListProps {
    id: string;
    text: string;
    data: string;
    isCompleted: boolean;
    isExpansion: boolean;
    typeTask: string;
}

export interface ToDoListProps {
    tasksList: TasksListProps[];
    deleteTask: typeof deleteTask;
    completeTask: typeof completeTask;
}

const ToDoList = ({tasksList, deleteTask, completeTask} : ToDoListProps) => {

    // if (tasksList.data !== ''){
    // 	return(
    // 		<ul className="todo-list">
    // 			{tasksList.map(({ id, text, data, isCompleted }) => (
    // 				<ToDoItemDate completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text} data={data}
    // 				isCompleted={isCompleted} />
    // 			))}
    // 		</ul>
    // 	)
    // } else {
    // 	return(
    // 		<ul className="todo-list">
    // 			{tasksList.map(({ id, text, isCompleted , isExpansion }) => (
    // 				<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
    // 				isCompleted={isCompleted} />,
    // 					<ToDoSub completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
    // 							 isCompleted={isCompleted} isExpansion={isExpansion} />
    // 			))}
    // 		</ul>
    // 	)
    // }

    return(
        <ul className="todo-list">
            {tasksList.map(({id, text, data, isCompleted, isExpansion, typeTask}) => {
                switch (typeTask) {
                    case "subtask":
                        return(<ToDoSub completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
                                        isCompleted={isCompleted} isExpansion={isExpansion} typeTask={typeTask}/>);
                    case "datatask":
                        return(<ToDoItemDate completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text} data={data}
                        			isCompleted={isCompleted} typeTask={typeTask} />);
                    case "simpletask":
                        return(<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
                        			isCompleted={isCompleted} typeTask={typeTask} />);
                }
                // return(
                //     <ToDoSub completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
                //              isCompleted={isCompleted} isExpansion={isExpansion}/>
                //     )
            })}
        </ul>
        )

};

export default ToDoList;

