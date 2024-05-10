import ToDoReducerApp from './v-useReducer/ToDoReducerApp'
import ToDoStateApp from './v-useState/ToDoStateApp'

export default function ToDoApp() {
  return (
    <div>
      <ToDoStateApp />
      <div className=" m-32" />
      <ToDoReducerApp />
      <div className="text-center mt-10 text-gray-500">
        <p>Enter to add a todo</p>
        <p>Double-click to edit a todo</p>
      </div>
    </div>
  )
}
