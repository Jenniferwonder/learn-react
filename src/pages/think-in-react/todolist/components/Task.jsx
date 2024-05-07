import { useState } from "react";
import PropTypes from "prop-types";
export default function Task({ task, onChange, onDelete }) {
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
						if (e.target.value === "") return;
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
Task.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
		// add other prop validation for task if needed
	}).isRequired,
	onChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};
