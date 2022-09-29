import React from 'react'

const AddTodoForm = () => {
  return (
    <form className='mt-4 border border-success'>
      <div className='card card-body'>
        <div className='form-group'>
          <label>Ajouter Todo</label>
          <input className='form-control  border border-secondary  border border-3' type="text" />
          <input className='btn btn-dark mt-4 rounded-pill ' type="submit" />
        </div>
      </div>

    </form>
  )
}

export default AddTodoForm
