import { useReducer,useCallback,useState } from 'react'
import './App.css'
import todoReducer from './reducers/todoReducer'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  console.log('app render edildi')

const [count,setCount]=useState(0)

  
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: ''
  })
  const onChange =useCallback( (e) => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  },[])
  const submitHandle = useCallback((e) => {
    e.preventDefault()
    if (!state.todo.trim()) return
    dispatch({ type: 'ADD_TODO' })
  },[])

  return (
    <>
      <Header />
<h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>Arttır</button>

      <div className="todo-app">
        <h1>todo app</h1>
        <AddTodo onChange={onChange} submitHandle={submitHandle} state={state} />
        <Todos state={state} />
      </div>
    </>
  )
}

export default App