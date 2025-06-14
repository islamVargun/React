
import TodoItem from './TodoItem'
import {memo} from 'react'

function  Todos({ state }) {
  console.log('TODOS render edildi')
  return (
    <ul>
      {state.todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </ul>
  )
}

export default memo(Todos)