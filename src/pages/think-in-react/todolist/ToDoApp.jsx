import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Footer from "./Footer";
export default function ToDoApp() {
	const [tasks, setTasks] = useState([
		// { id: 0, text: "test", done: false },
		// { id: 1, text: "test2", done: false },
	]);
	const [tab, setTab] = useState("all");
	const count = tasks.filter((t) => !t.done).length;
	function handleAddTask(text) {
		// setTasks(tasks.push({ id: tasks.length - 1, text: text, done: false }));
		setTasks([...tasks, { id: uuidv4(), text: text, done: false }]);
	}
	function handleChangeTask(task) {
		setTasks(
			tasks.map((t) => {
				if (t.id === task.id) {
					return task;
				} else {
					return t;
				}
			})
		);
	}
	function handleDeleteTask(task) {
		setTasks(tasks.filter((t) => t.id !== task.id));
	}

	return (
		<div className="">
			<header>
				<h1>todos (useState)</h1>
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
				showAll={() => setTab("all")}
				showActive={() => setTab("active")}
				showCompleted={() => setTab("completed")}
				clearCompleted={() => setTasks(tasks.filter((t) => !t.done))}
			/>
			<div className="text-center mt-10 text-gray-500">
				<p>Enter to add a todo</p>
				<p>Double-click to edit a todo</p>
			</div>
		</div>
	);
}
