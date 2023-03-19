import React from "react"
import "./App.css"
import ToDoForm from './components/ToDoForm'
import ToDo from "./components/ToDo"
import { useState } from 'react'



function App() {
  const [open, setOpen] = useState(true);
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <>
      <div className={`first_slide-wrap${open ? ' ' : ' hidden-first_slide'}`}>
        <h1 className="main-title">TaskDo </h1>
        <p className="descr">Manage You Task Checklist Easily</p>
        <a href="#main.html" className="btn" onClick={() => setOpen(false)}>Lets start</a>
      </div>
      <div className={`second_slide-wrap${open ? ' ' : ' show-second_slide'}`}>
        <ToDoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
            />
          )
        })}
      </div>
    </>
  )
}
export default App



