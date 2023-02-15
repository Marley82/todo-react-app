import React from "react";
import { useSelector,} from "react-redux";
import TodoItem from "./todoItem";
// import { todoSlice } from './components/todoSlice'

//creating the actual todolist

const TodoList = () => {
    
    const todos = useSelector((state) => state.todos);
	console.log(todos);

    return (
		<ul className='list'>
			{todos.data.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} content={todo.content} completed={todo.completed} />
			))}
		</ul>
	);
}

export default TodoList