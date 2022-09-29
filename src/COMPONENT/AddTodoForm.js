import React, { useState } from 'react'

const AddTodoForm = ({ addNewTodo }) => {

  const [addTodo, setAddTodo] = useState('')

  // addNewTodo(addTodo);

  const handleTodo = (e) => {
    e.preveventDefault()
    addNewTodo(addTodo);
  }

  return (
    <form className='mt-4 border border-success' onSubmit={handleTodo}>
      <div className='card card-body' >
        <div className='form-group'>
          <label>Ajouter Todo</label>
          <input className='form-control  border border-secondary  border border-3'
            value={addTodo} type="text"
            onChange={(e) => setAddTodo(e.target.value)}
          />
          <input className='btn btn-dark mt-4 rounded-pill ' type="submit" />
        </div>
      </div>

    </form>
  )
}

export default AddTodoForm
