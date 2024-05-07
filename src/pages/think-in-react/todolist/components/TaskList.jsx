import PropTypes, { object } from "prop-types";
import Task from "./Task";
import filterTodos from "../utils/filterTodos";
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

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(object).isRequired,
	onChangeTask: PropTypes.func.isRequired,
	onDeleteTask: PropTypes.func.isRequired,
	tab: PropTypes.string.isRequired,
};
