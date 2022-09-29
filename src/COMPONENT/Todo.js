import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v4 as uuid } from 'uuid'


const Todo = () => {

    const [todos, setTodos] = useState([
        { id: 1, todo: 'Acheter du lait' },
        { id: 2, todo: 'Acheter du pain' },
        { id: 3, todo: 'Acheter du fromage' }
    ])

    const myTodos = todos.map(todo => {
        return (
            <li className='list-group-item  border border-success' key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {
        setTodos([...todos, {
            id: uuid(),
            todo: newTodo
        }])
    }

    return (
        <div >
            <h1 className='text-center'>{todos.length} To-do</h1>
            <ul className='list-group'>
                {myTodos}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo} />
        </div>
    )
}

export default Todo