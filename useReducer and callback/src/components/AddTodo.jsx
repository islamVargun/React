import React from 'react'

function AddTodo({submitHandle, onChange, state}) {
  console.log('ADDTODO render edildi')
  return (
    <form onSubmit={submitHandle}>
      <input 
        type="text" 
        value={state.todo} 
        onChange={onChange}  
        placeholder="Add a new todo"
      />
      <button 
        disabled={!state.todo.trim()} 
        type='submit'
      >
        todo ekle
      </button>
    </form>
  )
}

export default AddTodo