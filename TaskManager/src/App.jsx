import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {

  return (
    <>
    <div className = "bg-gray-900 h-screen ">
      <AddTodo/>
      <Todo/>
    </div>
    
    </>
  )
}

export default App
