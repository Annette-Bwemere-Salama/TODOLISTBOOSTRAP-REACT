import React, { useState } from 'react'

const AddTodoForm = ({ addNewTodo }) => {

  const [addTodo, setAddTodo] = useState('')


  const handleTodo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo)

    setAddTodo('')
  }


  return (
    <form className='mt-4 shadow p-3 mb-5 bg-body rounded' onSubmit={handleTodo}>
      <div className='card card-body' >
        <div className='form-group'>
          <label>Ajouter Todo</label>
          <input className='form-control  border border-secondary  border border-2'
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
