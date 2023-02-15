// import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { deleTodo, compleTodo, ediTodo } from '../store/todoSlice';

//creating the list items to be populated into the ul

const TodoItem = ({ id, content, completed}) => {
    const dispatch = useDispatch();

    const handleCompleted = () => {
        dispatch(compleTodo({id, completed : !completed}));
    };
    const handleDelete = () => {
        dispatch(deleTodo({id}));
    };
    const handleEdit = () => {
        dispatch(ediTodo({id}));
    };
    
    return(
        <li className="listItem">
            <input type='checkbox' id="checkbox" checked={completed} onChange={handleCompleted}></input>
                <h2 id="todotext">{content}</h2> 
            <button onClick={handleDelete} id="button">Delete</button>
            <button onClick={handleEdit} id="button">Edit</button> 
        </li>

    )
}

export default TodoItem;