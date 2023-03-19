import React from 'react'
import { useState } from 'react'

export default function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
        console.log({userInput})
    }
  
    return (
        <>
            <h3 className="form-title">
                Todo App
            </h3>
            <div className="form-wrapper">
                <form   onSubmit={handleSubmit}>
                    <input
                        value={userInput}
                        onChange={handleChange}
                        className="form-input"
                        type="text"
                        placeholder="Type some here..."
                    />
                    <button className="form-button">
                        Add
                    </button>
                </form>
            </div>
        </>
    )
}
