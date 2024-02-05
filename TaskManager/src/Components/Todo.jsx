import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { editTodo, removeTodo,checked,editText } from '../feature/reduxSlice';

const Todo = () =>{

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return(
        <>
            <div className = "text-white text-2xl text-center m-10">Todos</div>
            {todos.map((todo) => (
            <div key={todo.id} className = {`h-12 m-10 rounded-lg flex flex-row px-5 space-x-5 w-1/2 mx-auto ${todo.completed ? "bg-[#c6e9a7]" : "bg-white"}`}  > 
                <input 
                type = "checkbox"
                className = "h-12"
                checked = {todo.completed}
                onChange = {() => dispatch(checked(todo.id))}
                />
                <input 
                type = "text"
                className = {`w-full focus:outline-none bg-transparent ${todo.completed ? "line-through" : ""}`} 
                value = {todo.text}
                onChange = {() => dispatch(editText(todo.id))}
                readOnly = {todo.editable}
                />
                <button
              className="w-8 h-8 rounded-lg text-sm border border-black/10 bg-gray-50 mx-2 hover:bg-gray-100 shrink-0 disabled:opacity-50 my-auto"
              onClick={() => dispatch(editTodo(todo.id))}
                  
              disabled={todo.completed}
                >
              {todo.editable ? "📁" : "✏️"}
          </button> 
                <button
                className = "bg-red-500 h-10 my-auto text-center rounded-md p-2" onClick = {() => dispatch(removeTodo(todo.id))}><span className="material-symbols-outlined text-white">delete</span></button>
            </div>)
            )}
        </>
    )
}

export default Todo;