import { v4 as uuidv4 } from 'uuid'

export default function taskReducer(tasks, action) {
  switch (action.type) {
    case 'addTask': {
      return [...tasks, { id: uuidv4(), text: action.text, done: false }]
    }
    case 'changeTask': {
      return tasks.map((t) => {
        if (t.id === action.task.id)
          return action.task
        return t
      })
    }
    case 'deleteTask': {
      return tasks.filter(t => t.id !== action.task.id)
    }
    case 'clearCompleted': {
      return tasks.filter(t => !t.done)
    }
    default: {
      throw new Error(`Invalid action: ${action.type}`)
    }
  }
}
