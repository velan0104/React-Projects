import './App.css'
import Todo from './Components/Todo'
import AddTodo from './Components/AddTodo'

function App() {

  return (
    <>
    <div className = "flex justify-center flex-col">
      <AddTodo/>
      <Todo/>
    </div>
 
    </>
  )
}

export default App
