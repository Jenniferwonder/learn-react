import { useState } from "react";
import PropTypes from "prop-types";
TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			// add other prop validation for tasks if needed
		})
	).isRequired,
	onChangeTask: PropTypes.func.isRequired,
	onDeleteTask: PropTypes.func.isRequired,
	tab: PropTypes.string.isRequired,
};
Task.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
		// add other prop validation for task if needed
	}).isRequired,
	onChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};
export default function TaskList({ tasks, tab, onChangeTask, onDeleteTask }) {
	const visibleTodos = filterTodos(tasks, tab);
	return (
		<ul>
			{visibleTodos.map((t) => (
				<li key={t.id}>
					<Task task={t} onChange={onChangeTask} onDelete={onDeleteTask} />
				</li>
			))}
		</ul>
	);
}
function Task({ task, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	let TaskContent;
	if (isEditing) {
		TaskContent = (
			<input
				className="flex-grow"
				type="text"
				value={task.text}
				onChange={(e) => {
					onChange({ ...task, text: e.target.value });
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setIsEditing(false);
					}
				}}
			/>
		);
	} else {
		TaskContent = (
			<p
				onDoubleClick={() => setIsEditing(true)}
				className={task.done ? "line-through flex-grow" : "flex-grow"}
			>
				{task.text}
			</p>
		);
	}
	return (
		<div className="flex items-center border-b-2">
			<input
				type="checkbox"
				checked={task.done}
				onChange={(e) => {
					onChange({
						...task,
						done: e.target.checked,
					});
				}}
			/>
			{TaskContent}
			<button onClick={() => setIsEditing(!isEditing)}>
				{isEditing ? "save" : "edit"}
			</button>
			<button onClick={() => onDelete(task)}>delete</button>
		</div>
	);
}

export function filterTodos(todos, tab) {
	return todos.filter((todo) => {
		if (tab === "all") {
			return todo;
		} else if (tab === "active") {
			return !todo.done;
		} else if (tab === "completed") {
			return todo.done;
		}
	});
}
