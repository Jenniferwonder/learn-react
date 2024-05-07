import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import Footer from "./Footer.jsx";
export default function ToDoApp() {
	const [tasks, setTasks] = useState([]);
	const [tab, setTab] = useState("All");
	const count = tasks.filter((t) => !t.done).length;
	function handleAddTask(text) {
		setTasks([...tasks, { id: uuidv4(), text: text, done: false }]);
		console.log(tasks);
	}
	function handleChangeTask(task) {
		setTasks(
			tasks.map((t) => {
				if (t.id === task.id) {
					return task;
				} else return t;
			})
		);
	}
	function handleDeleteTask(task) {
		setTasks(tasks.filter((t) => t.id !== task.id));
	}
	return (
		<div>
			<h1>To Dos</h1>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				tab={tab}
				onChange={handleChangeTask}
				onDelete={handleDeleteTask}
			/>
			<Footer
				count={count}
				showAll={() => setTab("All")}
				showActive={() => setTab("Active")}
				showCompleted={() => setTab("Completed")}
				clearCompleted={() => setTasks(tasks.filter((t) => !t.done))}
			/>
		</div>
	);
}
