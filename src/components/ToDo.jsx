import React from 'react'
import { useState } from 'react'
import {TiDelete} from 'react-icons/ti'

import Checkbox from './Checkbox';

export default function ToDo({todo, removeTask}) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  }
  return (
    <div className="todo-wrap" onClick={handleToggle}>
      <div className="item-wrap">
        <Checkbox checked={checked} />
        <p className={`item-text${checked ? ' line-through' : ' '}`}>{todo.task}</p>
      </div>
      <div className="delete">
      <TiDelete className='delete-item' onClick={() => removeTask(todo.id)}/>
      </div>

    </div>
  )
}
