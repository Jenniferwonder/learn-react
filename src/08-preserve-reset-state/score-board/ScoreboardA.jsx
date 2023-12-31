// Option 1: Rendering a component in different positions
// Make two Counters be independent
import "./styles.css";
import { useState } from "react";

export default function ScoreboardA() {
	const [isPlayerA, setIsPlayerA] = useState(true);
	return (
		<div>
			{isPlayerA && <Counter person="Taylor" />}
			{!isPlayerA && <Counter person="Sarah" />}
			<button
				onClick={() => {
					setIsPlayerA(!isPlayerA);
				}}
			>
				Next player!
			</button>
		</div>
	);
}

function Counter({ person }) {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);

	let className = "counter";
	if (hover) {
		className += " hover";
	}

	return (
		<div
			className={className}
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => setHover(false)}
		>
			<h1>
				{person}'s score: {score}
			</h1>
			<button onClick={() => setScore(score + 1)}>Add one</button>
		</div>
	);
}
