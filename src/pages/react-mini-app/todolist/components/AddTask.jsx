import { useState } from 'react'
import PropTypes from 'prop-types'

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
}
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  function handleSubmit(e) {
    if (e.key === 'Enter') {
      if (e.target.value === '')
        return
      onAddTask(text)
      setText('')
    }
  }
  return (
    <input
      className=" w-full h-12 "
      type="text"
      placeholder="Enter to add a todo"
      value={text}
      label="New Todo Input"
      onChange={(e) => {
			  setText(e.target.value)
      }}
      onKeyDown={(e) => {
			  handleSubmit(e)
      }}
    />
  )
}
