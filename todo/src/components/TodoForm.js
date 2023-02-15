import { useDispatch} from 'react-redux';
import React, { useState } from 'react';
import { addTodo } from '../store/todoSlice';
// setting iputs form to add todos

const TodoForm = ()=>{
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addTodo({
        content: input,
    }))
  };

  return(
    <form onSubmit={handleSubmit}>
        <input id="input" type="text" placeholder="Todo" value ={input} onChange={(e) =>setInput(e.target.value)}></input>
        <button type="submit" >Submit</button>
    </form>
  )
}

export default TodoForm;