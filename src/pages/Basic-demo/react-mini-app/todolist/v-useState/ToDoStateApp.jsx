import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TaskList from '../components/TaskList'
import AddTask from '../components/AddTask'
import Footer from '../components/Footer'

export default function ToDoStateApp() {
  const [tasks, setTasks] = useState([
    // { id: 0, text: "test", done: false },
    // { id: 1, text: "test2", done: false },
  ])
  const [tab, setTab] = useState('all')
  const count = tasks.filter(t => !t.done).length
  function handleAddTask(text) {
    setTasks([...tasks, { id: uuidv4(), text, done: false }])
  }
  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id)
          return task
				 else
          return t
      }),
    )
  }
  function handleDeleteTask(task) {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  return (
    <div className="">
      <header>
        <h1>To Dos (useState)</h1>
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
        clearCompleted={() => setTasks(tasks.filter(t => !t.done))}
      />
    </div>
  )
}
