import PropTypes from "prop-types";
import { useState } from "react";
// import debounce from "./utils/debounce";
export default function AddTask({ onAddTask }) {
	const [text, setText] = useState("");
	function handleSubmit(e) {
		if (e.key === "Enter") {
			onAddTask(text);
			setText("");
		}
	}
	return (
		<div>
			<input
				type="text"
				placeholder="Enter to add task"
				value={text}
				onChange={
					// (e) => debounce(setText(e.target.value))
					(e) => setText(e.target.value)
				}
				onKeyDown={(e) => handleSubmit(e)}
			/>
		</div>
	);
}

AddTask.propTypes = {
	onAddTask: PropTypes.func,
};
