import React from 'react';
import {useState}  from 'react';
import {useDispatch}  from "react-redux";
import { addTodo } from '../feature/reduxSlice';
import {store} from '../App/store'

const AddTodo = () =>{

    const [input,setInput] = useState("");
    const dispatch = useDispatch();


    const  add = (e) =>{
        e.preventDefault();
        if( input === "" ){
            alert("Please enter a task")
        }else{
            console.log("Dispatching addTodo with input: ",input)
            dispatch(addTodo(input));
            // console.log("Todo state after dispatch: ", store.getState().todos)
            setInput("");
        }
    }

    return(
        <>
            <form onSubmit={add}>
                <div className = "flex justify-center pt-10 align-center space-x-5">
                    <input
                        type = "text"
                        placeholder = "Add Todos..."
                        onChange = {(e) => setInput(e.target.value)}
                        value = {input}
                        className = "p-3 px-5 w-96 rounded-full active: outline-none"
                        
                    />
                    
                    <button type = "submit" className = "px-5  w-20 rounded-full bg-red-500 text-white"> Add </button>
                </div>
            </form>
        
        </>
    )
}

export default AddTodo;