import {createSlice,nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [{id: '1',text:'Hello World', completed:false,editable:false}]
}

export const reduxSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo: (state,action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                editable: false
            }
            state.todos.push(todo);
        },

        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        editTodo: (state,action) =>{
            state.todos = state.todos.map((todo) => {
                console.log(todo.editable)
                if(todo.id  === action.payload){
                    return {...todo,editable: !todo.editable}
                }
                return todo
            })
        },

        editText: (state,action) =>{
            state.todos = state.todos.map((todo) =>{
                if(todo.id===action.payload.id && todo.editable){
                    return {...todo,text: action.payload}
                }
                return todo
            })
        },

        checked: (state,action) =>{
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo,completed: !todo.completed} : todo )
        }
    }

})
 
export const {addTodo,removeTodo,editTodo,editText,checked} = reduxSlice.actions
export default reduxSlice.reducer