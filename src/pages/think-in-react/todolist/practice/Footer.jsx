import PropTypes from "prop-types";
export default function Footer({
	count,
	showAll,
	showActive,
	showCompleted,
	clearCompleted,
}) {
	return (
		<div>
			<p>{count} item left</p>
			<button onClick={showAll}>All</button>
			<button onClick={showActive}>Active</button>
			<button onClick={showCompleted}>Completed</button>
			<button onClick={clearCompleted}>Clear Completed</button>
		</div>
	);
}

Footer.propTypes = {
	clearCompleted: PropTypes.func,
	count: PropTypes.number,
	showActive: PropTypes.func,
	showAll: PropTypes.func,
	showCompleted: PropTypes.func,
};
