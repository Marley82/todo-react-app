import { createSlice } from "@reduxjs/toolkit";
//setting slice details for functions in task much like example in lecture
let edTodo = "";


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        // nextId: 2,
        data:
            [{id:1, content: 'todo1', completed: false},
            ]
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                content: action.payload.content,
                completed: false,
            }
            state.data.push(newTodo);
        },
        ediTodo: (state, action) => {
            edTodo = prompt("What do you want to change it to?");
            const index = state.data.findIndex(
                (todos) => todos.id === action.payload.id
            );
            state.data[index].content = edTodo;
        },
        deleTodo: (state, action) => {
            const todoId = action.payload.id;
            state.data = state.data.filter((todo) => todo.id !== todoId);
            // return state.data.filter((todo) => todo.id !== action.payload.id);
        },
        compleTodo: (state, action) => {
            const index = state.data.findIndex(
                (todos) => todos.id === action.payload.id
            );
            state.data[index].completed = action.payload.completed;
        }
    },
});
export const {addTodo, ediTodo, deleTodo, compleTodo} = todoSlice.actions;
export default todoSlice.reducer;