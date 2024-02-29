/* 01-quick-start-ShareData
Update buttons (ShareData) together */
import ShareClick from "./ShareClick";
import { useState } from "react";
export default function ShareClickApp() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div>
			<ShareClick count={count} onClick={handleClick} />
			<ShareClick count={count} onClick={handleClick} />
		</div>
	);
}
