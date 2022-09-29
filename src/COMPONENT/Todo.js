import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v4 as uuid } from 'uuid'


const Todo = () => {

    const [todos, setTodos] = useState([
        { id: 1, todo: 'Acheter du lait' },
        { id: 2, todo: 'Acheter du pain' },
        { id: 3, todo: 'Acheter du fromage' }
    ])

    const [warnirng, setWarning] = useState(false)

    const myTodos = todos.map(todo => {
        return (
            <li className='list-group-item  shadow p-3 mb-2 bg-body rounded' key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

        if (newTodo !== '') {

            warnirng && setWarning(false)
            setTodos([...todos, {
                id: uuid(),
                todo: newTodo
            }])
        } else {
            setWarning(true)
        }
    }

    const warnirngMsg = warnirng && <div className='alert alert-danger mt-3 shadow p-3 mb-2 rounded text-center' role="alert">
        Veuillez indiquer un Todo S'il vous plait.
    </div>

    return (
        <div >
            {warnirngMsg}
            <h1 className='text-center'>{todos.length} To-do</h1>
            <ul className='list-group'>
                {myTodos}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo} />
        </div>
    )
}

export default Todo