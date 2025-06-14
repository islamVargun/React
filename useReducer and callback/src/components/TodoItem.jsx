import React from 'react'
import {memo} from 'react'


function TodoItem({ todo }) {
  console.log("ITEM render edildi")
  return (
    <li>
      {todo}
    </li>
  )
}

export default memo(TodoItem)