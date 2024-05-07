import PropTypes from "prop-types";
import { useState } from "react";
export default function TaskList({ tab, tasks, onChange, onDelete }) {
	const filteredTasks = filterTasks(tab, tasks);
	return (
		<ul>
			{filteredTasks.map((t) => (
				<Task key={t.id} task={t} onChange={onChange} onDelete={onDelete} />
			))}
		</ul>
	);
}

function Task({ task, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<li>
			<input
				type="checkbox"
				checked={task.done}
				onChange={(e) => onChange({ ...task, done: e.target.checked })}
			/>
			{isEditing ? (
				<input
					type="text"
					value={task.text}
					onChange={(e) => onChange({ ...task, text: e.target.value })}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setIsEditing(false);
						}
					}}
				/>
			) : (
				<p onDoubleClick={() => setIsEditing(true)}>{task.text}</p>
			)}
			<button onClick={() => setIsEditing(!isEditing)}>
				{isEditing ? "Save" : "Edit"}
			</button>
			<button
				onClick={() => {
					onDelete(task);
				}}
			>
				Delete
			</button>
		</li>
	);
}
function filterTasks(tab, tasks) {
	if (tab === "All") {
		return tasks;
	} else if (tab === "Active") {
		return tasks.filter((task) => !task.done);
	} else if (tab === "Completed") {
		return tasks.filter((task) => task.done);
	}
}

Task.propTypes = {
	onChange: PropTypes.func,
	onDelete: PropTypes.func,
	task: PropTypes.shape({
		done: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
	}),
};
TaskList.propTypes = {
	onChange: PropTypes.func,
	onDelete: PropTypes.func,
	tab: PropTypes.string,
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
