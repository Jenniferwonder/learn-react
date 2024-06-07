import { useReducer, useState } from 'react'
import TaskList from '../components/TaskList'
import AddTask from '../components/AddTask'
import Footer from '../components/Footer'
import taskReducer from './taskReducer'

export default function ToDoReducerApp() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [tab, setTab] = useState('all')
  const count = tasks.filter(t => !t.done).length
  function handleAddTask(text) {
    dispatch({
      type: 'addTask',
      text,
    })
  }
  function handleChangeTask(task) {
    dispatch({
      type: 'changeTask',
      task,
    })
  }
  function handleDeleteTask(task) {
    dispatch({
      type: 'deleteTask',
      task,
    })
  }

  return (
    <div className="">
      <header>
        <h1>To Dos (useReducer)</h1>
        <AddTask onAddTask={handleAddTask} />
      </header>
      <TaskList
        tasks={tasks}
        tab={tab}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      <Footer
        count={count}
        showAll={() => setTab('all')}
        showActive={() => setTab('active')}
        showCompleted={() => setTab('completed')}
        clearCompleted={() => dispatch({ type: 'clearCompleted' })}
      />
    </div>
  )
}
